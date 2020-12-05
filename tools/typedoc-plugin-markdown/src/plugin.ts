/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import * as fs from 'fs'
import * as path from 'path'

import { BindOption, ContainerReflection, Reflection, Renderer } from 'typedoc'
import { Context, Converter } from 'typedoc/dist/lib/converter'
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components'
import { CommentTag } from 'typedoc/dist/lib/models'
import MarkdownTheme from './theme'

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {
    moduleRenames: any[] = []

    @BindOption('theme')
    theme!: string

    initialize() {
        this.listenTo(this.owner, {
            [Converter.EVENT_BEGIN]: this.onBegin,
            [Converter.EVENT_CREATE_DECLARATION]: this.onDeclarationBegin,
            [Converter.EVENT_RESOLVE_BEGIN]: this.onResolveBegin
        })
    }

    /**
     * Overide default assets
     */
    onBegin() {
        Renderer.getDefaultTheme = () => path.join(__dirname, 'resources')
    }

    private filterComment(comment: undefined | Comment): comment is Comment {
        return comment !== undefined && !!comment
    }

    /**
     * filter logic for CommentTags exist
     */
    private filterCommentTags(tags: CommentTag[] | undefined): tags is CommentTag[] {
        return tags !== undefined && !!tags
    }

    private convertCommentTagText(tagName: string, tagText: string): string {
        const texts = tagText.split('\n')
        const fileName = `/dataspot/samples${texts[0].substr(texts[0].lastIndexOf('/'))}.js`

        const script = `

<div class="running-sample">
    <span class="running-sample-container" data-ref="${texts[0]}"></span>
    <script src='${fileName}' title="${texts[0]}"></script>
</div>

`

        return tagName === 'sample_only'
            ? script
            : `
\`\`\`ts
${fs.readFileSync(`../samples/${texts[0]}.ts`, 'utf8')}
\`\`\`

${script}

`
    }

    private onDeclarationBegin(context: Context, reflection: Reflection, node?: any) {
        if (!node) return
        const { fileName } = node.parent
        const match = new RegExp('.*/lib/(.*)').exec(fileName)

        const vals = Object.values(context.project.reflections) // get reflection from context
            .map((r: any) => r.comment) // get Comment from Reflection
            .filter(this.filterComment) // filter only comment exist
            .map((comment: any) => comment.tags) // get CommentTags from Comment
            .filter(this.filterCommentTags) // filter only CommentTags exist
            .reduce((a, b) => a.concat(b), []) // merge all CommentTags
            .filter((tag: any) => tag.tagName === 'sample' || tag.tagName === 'sample_only')

        if (vals.length) {
            vals.forEach((t: any) => {
                if (!t.done) {
                    t.done = true
                    t.text += this.convertCommentTagText(t.tagName, t.text)
                }
            })
        }

        /*
         */
        if (match != null) {
            this.moduleRenames.push({
                renameTo: match[1]
                    .replace(/\.ts$/g, '')
                    .split('/')
                    .join('.'),
                reflection: <ContainerReflection>reflection
            })
        }
    }

    /**
     * Load markdown theme and perform additional checks
     */
    onResolveBegin(context: Context) {
        // v2 legacy markdown themes
        const legacyThemes = ['bitbucket', 'docusaurus', 'docusaurus2', 'vuepress', 'gitbook']
        if (![...legacyThemes, ...['default', 'markdown']].includes(this.theme)) {
            // For custom themes check that the theme is a markdown theme
            // If it is return and pass through to renderer
            const themeFileName = path.resolve(path.join(this.theme, 'theme.js'))
            if (fs.existsSync(themeFileName) && this.isMarkdownTheme(themeFileName)) {
                return
            }
            this.application.logger.warn(
                `[typedoc-plugin-markdown] '${this.theme}' is not a recognised markdown theme. If an html theme is required, please disable this plugin.`
            )
        }

        // Graceful upgrade for legacy themes
        if (legacyThemes.includes(this.theme)) {
            this.application.logger.warn(
                `[typedoc-plugin-markdown] Please note the ${this.theme} theme is no longer supported as of v3.0.0.`
            )
            this.upgradeMessages(this.theme)
        }

        // Set the default markdown theme
        this.application.options.setValue('theme', path.join(__dirname))

        this.moduleRenames.forEach((item) => {
            const renaming = <ContainerReflection>item.reflection
            if (item.reflection.parent) {
                const list = item.renameTo.split('.')
                const last = list.splice(-1)[0]
                if (last === 'index') {
                    const val = `${list.join('.')}_index`
                    renaming.name = val
                } else {
                    renaming.name = `${list.join('.')}${list.length ? '.' : ''}${item.reflection.originalName}`
                }
            }

            // context.project.removeReflection(renaming, true)
        })

        // const projRefs: any = context.project.reflections
        // const refsArray: Reflection[] = Object.keys(projRefs).reduce((m: any, k) => {
        //     m.push(projRefs[k])
        //     return m
        // }, [])

        // Process each rename
        // this.moduleRenames.forEach((item) => {
        //     const renaming = <ContainerReflection>item.reflection

        //     // Find an existing module that already has the "rename to" name.  Use it as the merge target.
        //     const mergeTarget = <ContainerReflection[]>refsArray.filter((ref) => {
        //         return ref.kind === renaming.kind && ref.name === item.renameTo
        //     })

        //     console.log('...', item.renameTo, renaming.name, mergeTarget.length)

        //     // If there wasn't a merge target, just change the name of the current module and exit.
        //     if (!mergeTarget[0]) {
        //         renaming.name = `${item.renameTo}.${renaming.name}`
        //         return
        //     }

        //     // if (!mergeTarget.children) {
        //     //     mergeTarget.children = []
        //     // }

        //     // // Since there is a merge target, relocate all the renaming module's children to the mergeTarget.
        //     // let childrenOfRenamed = refsArray.filter((ref) => ref.parent === renaming)
        //     // childrenOfRenamed.forEach((ref: Reflection) => {
        //     //     // update links in both directions

        //     //     //console.log(' merging ', mergeTarget, ref);
        //     //     ref.parent = mergeTarget
        //     //     mergeTarget?.children?.push(<any>ref)
        //     // })

        //     // // Now that all the children have been relocated to the mergeTarget, delete the empty module
        //     // // Make sure the module being renamed doesn't have children, or they will be deleted
        //     // if (renaming.children) renaming.children.length = 0

        //     context.project.removeReflection(renaming, true)
        // })
    }

    /**
     * Checks if the custom theme class is initiated from markdown theme
     */
    isMarkdownTheme(themeFileName: string) {
        try {
            const ThemeClass = require(themeFileName).default
            return ThemeClass.prototype instanceof MarkdownTheme
        } catch (e) {
            return false
        }
    }

    upgradeMessages(theme: string) {
        if (theme.startsWith('docusaurus')) {
            this.application.logger.warn(
                `[typedoc-plugin-markdown] Please use https://www.npmjs.com/package/docusaurus-plugin-typedoc`
            )
        }
        if (theme === 'vuepress') {
            this.application.logger.warn(
                `[typedoc-plugin-markdown] Please use https://www.npmjs.com/package/vuepress-plugin-typedoc`
            )
        }
        if (theme === 'bitbucket') {
            this.application.logger.warn(
                '[typedoc-plugin-markdown] Please use https://www.npmjs.com/package/typedoc-bitbucket-theme'
            )
        }
    }
}

import { Reflection } from 'typedoc'
import { PageEvent } from 'typedoc/dist/lib/output/events'
import MarkdownTheme from '../../theme'
import { escape } from './escape'

export function breadcrumbs(this: PageEvent) {
    const breadcrumbs: string[] = []

    breadcrumbs.push(
        this.url === this.project?.url
            ? 'Globals'
            : `[Globals](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(this.project?.url as string)})`
    )

    const res = breadcrumb(this, this.model, breadcrumbs)

    return res
}

function breadcrumb(page: PageEvent, model: Reflection, md: string[]) {
    if (model && model.parent) {
        breadcrumb(page, model.parent, md)
        if (model.url) {
            md.push(
                page.url === model.url
                    ? `${escape(model.name)}`
                    : `[${escape(model.name)}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(model.url)})`
            )
        }
    }

    return md.join(' / ')
}

export function parent(this: PageEvent, grandParent = false) {
    const breadcrumbs: string[] = []

    breadcrumbs.push(MarkdownTheme.HANDLEBARS.helpers.relativeURL(this.project?.url as string))

    const res = pp(this, this.model, breadcrumbs)

    if (res[0] === '../globals.md') {
        return ''
    } else {
        const newTitle = res[1]
        const list = newTitle.split('.')

        if (list.length === 1) {
            return 'Dataspot'
        } else {
            const lastTwo = list.slice(-2)
            const areSimilar = lastTwo[0] === lastTwo[1] || lastTwo[1] === 'index'
            list.splice(areSimilar ? -2 : -1)

            if (!grandParent) {
                if (list.length === 0) {
                    return 'Dataspot'
                } else {
                    return list.slice(-1)[0]
                }
            } else if (list.length === 1) {
                return 'Dataspot'
            } else {
                return list.slice(-2)[0]
            }
        }
    }
}

function pp(page: PageEvent, model: Reflection, md: string[]) {
    if (model && model.parent) {
        pp(page, model.parent, md)
        if (model.url) {
            md.push(escape(model.name))
        }
    }

    return md
}

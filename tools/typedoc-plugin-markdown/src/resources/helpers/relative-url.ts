import MarkdownTheme from '../../theme'

export function relativeURL(url: string) {
    const result = MarkdownTheme.HANDLEBARS.helpers.relativeURL(url)
    return result.replace('.md#', '#')
}

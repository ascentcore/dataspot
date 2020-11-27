import MarkdownTheme from '../../theme'

export function relativeURL(url: string, stripPath = false) {
    const result = MarkdownTheme.HANDLEBARS.helpers.relativeURL(url).replace('.md#', '#')
    return stripPath ? result.substr(result.lastIndexOf('#')) : result
}

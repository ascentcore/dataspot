import { ParameterReflection } from 'typedoc'
import { PageEvent } from 'typedoc/dist/lib/output/events'

import { escape } from './escape'

export function reflectionTitle(this: PageEvent, shouldEscape = true, nameOnly = false) {
    const title: string[] = []
    if (this.model.kindString) {
        title.push(`${this.model.kindString}: `)
    }
    title.push(shouldEscape ? escape(this.model.name) : this.model.name)
    if (this.model.typeParameters) {
        const typeParameters = this.model.typeParameters
            .map((typeParameter: ParameterReflection) => typeParameter.name)
            .join(', ')
        title.push((shouldEscape ? '\\<' : '<') + typeParameters + '>')
    }

    if (title.length === 1) {
        return 'Dataspot'
    } else if (nameOnly) {
        let newTitle = title[1]
        newTitle = newTitle.replace(/\.ts$/g, '')
        newTitle = newTitle.replace('\\_index', '')
        const list = newTitle.split('.')
        let lastElement: any = list.splice(-1)[0]
        if (lastElement === 'index') {
            lastElement = list.splice(-1)[0]
        }
        return lastElement
    } else {
        return title.join('')
    }
}

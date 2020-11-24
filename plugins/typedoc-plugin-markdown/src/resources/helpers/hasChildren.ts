import { ParameterReflection } from 'typedoc'
import { PageEvent } from 'typedoc/dist/lib/output/events'

import { escape } from './escape'

export function hasChildren(this: PageEvent, shouldEscape = true) {
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
        return true
    } else {
        let newTitle = title[1]
        const list = newTitle.split('.')

        const lastTwo = list.slice(-2)
        return lastTwo[0] === lastTwo[1] || lastTwo[1] === 'index'
    }
}

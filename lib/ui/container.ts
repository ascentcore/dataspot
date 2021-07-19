import Random from '../math/random'

export default class Container {
    static getRootContainer(docRef?: string, experimentId?: string): HTMLElement {
        console.log('get root container...', docRef)
        let ref: HTMLElement | null = null

        if (experimentId) {
            // eslint-disable-next-line no-unused-expressions
            document.querySelector(`#${experimentId}`)?.remove()
        }

        if (docRef) {
            ref = document.querySelector(docRef)
        }

        if (!ref) {
            const isLab = document.querySelector('#labEnvironment')
            if (isLab !== null) {
                ref = document.createElement('div')
                ref.id = experimentId || `experiment-${Random.randomInt(0, 1000)}`
                ref.style.margin = '0 0 0 200px'
                ref.style.padding = '50px 20px 0'
                document.body.appendChild(ref)
            }
        }

        if (!ref) {
            ref = document.createElement('div')
            document.body.appendChild(ref)
        }

        return ref
    }
}

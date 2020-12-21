export default class Container {
    static getRootContainer(docRef?: string): HTMLElement {
        let ref: HTMLElement | null = null

        if (docRef) {
            ref = document.querySelector(docRef)
        }

        if (!ref) {
            const isLab = document.querySelector('#labEnvironment')
            if (isLab !== null) {
                ref = document.createElement('div')
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

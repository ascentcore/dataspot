import BaseComponent from '../common/baseComponent'

export class Accordion extends BaseComponent {
    constructor(container: HTMLElement, title: string) {
        super(container)
        const wrapper = this.getElement('div', ['accordion'])
        const id = Math.floor(Math.random() * 1e4)
        wrapper.innerHTML = `
        <input type="checkbox" id="accordion-${id}" name="accordion-checkbox" hidden checked>
        <label class="accordion-header" for="accordion-${id}">
          <i class="icon icon-arrow-right mr-1"></i>
          ${title}
        </label>`

        this.root = this.getElement('div', ['accordion-body'])
        wrapper.appendChild(this.root)
        container.appendChild(wrapper)
    }
}

export { Accordion as default }

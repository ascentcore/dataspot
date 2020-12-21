import BaseComponent from '../common/baseComponent'

export class TabBar extends BaseComponent {
    public tabs: HTMLElement[] = []

    public titles: HTMLElement[] = []

    public containers: HTMLElement[] = []

    private activeTabIndex: number | undefined

    constructor(container: HTMLElement, tabs: string[], rootClasses: string[] = []) {
        super(container)
        this.root = this.getElement('div', rootClasses, container)
        const tabRoot = this.getElement('ul', ['tab', 'tab-block'], this.root)
        tabs.forEach((title: string, index: number) => {
            const currentTab: HTMLElement = this.getElement('li', ['tab-item'], tabRoot)
            const tabContainer: HTMLElement = this.getElement('div', [], this.root)
            tabContainer.style.display = 'none'
            const titleElement = this.getElement('span', ['tab-item-content'], currentTab)
            titleElement.innerText = title
            this.titles.push(titleElement)
            currentTab.addEventListener('click', () => {
                this.setActive(index)
            })
            this.tabs.push(currentTab)
            this.containers.push(tabContainer)
        })

        this.setActive(0)
    }

    setTitle(index: number, title: string) {
        this.titles[index].innerText = title
    }

    setActive(index: number): void {
        if (this.activeTabIndex !== undefined) {
            this.tabs[this.activeTabIndex].classList.remove('active')
            this.containers[this.activeTabIndex].style.display = 'none'
        }

        this.activeTabIndex = index
        this.tabs[this.activeTabIndex].classList.add('active')
        this.containers[this.activeTabIndex].style.display = 'block'
    }
}

export { TabBar as default }

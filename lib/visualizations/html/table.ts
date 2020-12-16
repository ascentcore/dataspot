import HTMLBaseVisualization from './htmlbase'

export default class Table extends HTMLBaseVisualization {
    constructor(config: any, elemClass = 'table-elem') {
        super(config, elemClass)
    }

    public setup() {}

    private updateFn(data: any[], elemClass: string): void {
        const { width, border, borderCollapse } = this.config
        const { document, rootContainer } = this.dependencies
        const table = document.createElement('table')
        table.border = border
        table.width = width
        table.style = `border-collapse: ${borderCollapse}`

        const tableHead = document.createElement('thead')
        table.appendChild(tableHead)

        if (data.length) {
            const tr = document.createElement('tr')
            tableHead.appendChild(tr)
            Object.keys(data[0]).forEach((key) => {
                const td = document.createElement('td')
                td.appendChild(document.createTextNode(`${key}`))
                tr.appendChild(td)
            })
        }

        const tableBody = document.createElement('tbody')
        table.appendChild(tableBody)

        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement('tr')
            tableBody.appendChild(tr)

            Object.entries(data[i]).forEach((entry: { [key: string]: any }) => {
                const td = document.createElement('td')
                td.appendChild(document.createTextNode(`${entry[1]}`))
                tr.appendChild(td)
            })
        }
        rootContainer.querySelector(`.${elemClass}`).innerHTML = ''
        rootContainer.querySelector(`.${elemClass}`).appendChild(table)
    }

    public dataUpdate(data: any[], elemClass = this.elemClass) {
        this.updateFn(data, elemClass)
        return this.updateFn
    }
}

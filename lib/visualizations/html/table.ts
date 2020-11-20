import HTMLBaseVisualization from './htmlbase'
import { TwoDPointScatter, TwoDPointLine } from '../../models/types'

export default class Table extends HTMLBaseVisualization {
    constructor(config: any, elemId = 'table-elem') {
        super(config, elemId)
    }

    public setup() {}

    private updateFn(data: TwoDPointLine[] | TwoDPointScatter[], elemId: string): void {
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
        rootContainer.querySelector(`#${elemId}`).appendChild(table)
    }

    public dataUpdate(data: TwoDPointLine[] | TwoDPointScatter[], elemId = this.elemId) {
        this.updateFn(data, elemId)
        return this.updateFn
    }
}

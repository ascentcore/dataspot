/* eslint-disable no-await-in-loop */
import { JSDOM } from 'jsdom'
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import getReportFolder from '../../utils/osutils'
import HTMLBaseVisualization from './htmlbase'

import serializeFunction from '../../utils/serialization-utils'

import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class HTMLVisualizationWrapper {
    private root!: Element | null

    constructor(private visualization: HTMLBaseVisualization, private name: string, private asHtml: boolean) {}

    get lab(): Lab {
        return getInstance(Lab)
    }

    async setup(initialData?: { data: any; elemClass: string }[]): Promise<void> {
        const dom = new JSDOM(`<!DOCTYPE html><div id="root"/>`)
        this.root = dom.window.document.querySelector('#root')

        this.visualization.injectDOM(dom.window.document)
        this.visualization.setContainer(<HTMLElement>this.root)
        this.visualization.setup()

        if (initialData) {
            // eslint-disable-next-line no-restricted-syntax
            for (const elem of initialData) {
                await this.dataUpdate(elem.data, elem.elemClass)
            }
        }

        if (this.lab) {
            await this.lab.store(`${this.name}-setup`, {
                type: 'html',
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').outerHTML,
                prepareDependenciesExpr: serializeFunction(this.visualization.setup, 'setup')
            })
        }
    }

    async dataUpdate(
        data: TwoDPointScatter[] | TwoDPointLine[],
        elemClass = this.visualization.elemClass
    ): Promise<void> {
        // eslint-disable-next-line prettier/prettier
        const dataUpdateExpr = this.visualization.dataUpdate(data, elemClass)

        if (this.lab) {
            await this.lab.store(`${this.name}-data`, {
                data,
                elemClass,
                dataUpdateExpr: dataUpdateExpr ? serializeFunction(dataUpdateExpr, 'updateFn') : null
            })
        } else if (this.asHtml) {
            fs.writeFile(
                `${getReportFolder()}/${this.name}-output.html`,
                `<html><body>${this.visualization.getDependency('rootContainer').outerHTML}</body></html>`,
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        } else {
            nodeHtmlToImage({
                output: `${getReportFolder()}/${this.name}-output.png`,
                html: `<html><body>${this.visualization.getDependency('rootContainer').outerHTML}</body></html>`
            }).catch((err) => console.log(err))
        }
    }
}

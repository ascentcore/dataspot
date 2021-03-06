/* eslint-disable no-await-in-loop */
import { JSDOM } from 'jsdom'
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs'
import OSUtils from '@ascentcore/dataspot/utils/os'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import HTMLBaseVisualization from './htmlbase'

import serializeFunction from '../../utils/serialization-utils'

import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class HTMLVisualizationWrapper {
    private root!: Element | null

    constructor(private visualization: HTMLBaseVisualization, private name: string, private asHtml: boolean) {}

    get lab(): Lab {
        return getInstance(Lab)
    }

    async setup(initialData?: TwoDPointLine | TwoDPointScatter): Promise<void> {
        const dom = new JSDOM(`<!DOCTYPE html><div id="root"/>`)
        this.root = dom.window.document.querySelector('#root')

        this.visualization.injectDOM(dom.window.document)
        this.visualization.setContainer(<HTMLElement>this.root)
        this.visualization.setup(initialData)

        if (this.lab) {
            await this.lab.store(`${this.name}-setup`, {
                type: 'html',
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').outerHTML
            })
        }
    }

    async dataUpdate(data: any[], elemClass: string): Promise<void> {
        if (this.lab) {
            await this.lab.store(`${this.name}-data`, {
                data,
                elemClass,
                dataUpdateExpr: serializeFunction(this.visualization.getDataUpdateFn(), 'updateFn')
            })
        } else if (this.asHtml) {
            this.visualization.dataUpdate(data, elemClass)
            fs.writeFile(
                `${OSUtils.getReportFolder()}/${this.name}-output.html`,
                `<html><body>${this.visualization.getDependency('rootContainer').outerHTML}</body></html>`,
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        } else {
            this.visualization.dataUpdate(data, elemClass)
            nodeHtmlToImage({
                output: `${OSUtils.getReportFolder()}/${this.name}-output.png`,
                html: `<html><body>${this.visualization.getDependency('rootContainer').outerHTML}</body></html>`
            }).catch((err) => console.log(err))
        }
    }
}

import { JSDOM } from 'jsdom'
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs'
import OSUtils from '@ascentcore/dataspot/utils/osUtils'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import HTMLBaseVisualization from './htmlbase'

import serializeFunction from '../../utils/serialization-utils'

import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class HTMLVisualizationWrapper extends HTMLBaseVisualization {
    private root!: Element | null

    constructor(
        private visualization: HTMLBaseVisualization,
        private name: string,
        private asHtml: boolean,
        initialData?: TwoDPointScatter[] | TwoDPointLine[]
    ) {
        super(visualization.config, 'wrapper-elem')
        this.setup(initialData)
    }

    get lab(): Lab {
        return getInstance(Lab)
    }

    setup(initialData?: any): void {
        const dom = new JSDOM(`<!DOCTYPE html><div id="root"/>`)
        this.root = dom.window.document.querySelector('#root')

        this.visualization.injectDOM(dom.window.document)
        this.visualization.setContainer(<HTMLElement>this.root)
        this.visualization.setup()

        if (initialData) {
            this.dataUpdate(initialData)
        }

        if (this.lab) {
            this.lab.store(`${this.name}-setup`, {
                type: 'html',
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').outerHTML,
                prepareDependenciesExpr: serializeFunction(this.visualization.setup, 'setup')
            })
        }
    }

    dataUpdate(data: any[], elemClass = this.visualization.elemClass) {
        // eslint-disable-next-line prettier/prettier
        const dataUpdateExpr = this.visualization.dataUpdate(data, elemClass)

        if (this.lab) {
            this.lab.store(`${this.name}-data`, {
                data,
                elemClass,
                dataUpdateExpr: dataUpdateExpr ? serializeFunction(dataUpdateExpr, 'updateFn') : null
            })
        } else if (this.asHtml) {
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
            nodeHtmlToImage({
                output: `${OSUtils.getReportFolder()}/${this.name}-output.png`,
                html: `<html><body>${this.visualization.getDependency('rootContainer').outerHTML}</body></html>`
            }).catch((err) => console.log(err))
        }
        return dataUpdateExpr
    }
}

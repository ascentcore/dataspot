import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

export default function D3Visualization({ db, document, rev }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)
    const [updateExpression, setUpdateExpression] = useState(null)

    const componentIsMounted = useRef(true)

    function loadData() {
        db.get(`${document}-data`).then(function(doc) {
            if (divRef && updateExpression && block && componentIsMounted.current) {
                if (!block.dependencies.container || block.dependencies.container.empty()) {
                    block.dependencies.container = d3.select(divRef.current.querySelector('svg'))
                }
                const { data, svgElemId } = doc
                updateExpression(block, data, svgElemId)
            }
        })
    }

    useEffect(() => {
        db.get(`${document}-setup`).then(function(doc) {
            const {
                config,
                prepareDependenciesExpr,
                dataUpdateExpr,
                linePlotDataUpdateExpr,
                scatterPlotDataUpdateExpr
            } = doc
            const block = {
                dependencies: { d3 }
            }

            Object.assign(block, { config })

            if (!block.dependencies.container || block.dependencies.container.empty()) {
                block.dependencies.container = d3.select(divRef.current.querySelector('svg'))
            }

            const globalsExpr = prepareDependenciesExpr
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/setup\(\) +{/g, '')
                .replace(/}$/g, '')

            let dataUpdateExpression = dataUpdateExpr
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/dataUpdate\([^\)]*\) +{/g, '')
                .replace(/}$/g, '')

            let linePlotDataUpdateExpression = linePlotDataUpdateExpr
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/dataUpdate\([^\)]*\) +{/g, '')
                .replace(/}$/g, '')

            linePlotDataUpdateExpression = Function('block', 'data', 'svgElemId', linePlotDataUpdateExpression)

            let scatterPlotDataUpdateExpression = scatterPlotDataUpdateExpr
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/dataUpdate\([^\)]*\) +{/g, '')
                .replace(/}$/g, '')

            scatterPlotDataUpdateExpression = Function('block', 'data', 'svgElemId', scatterPlotDataUpdateExpression)

            const getDataUpdateFunction = (svgElemId) => {
                const svgElem = d3.select(divRef.current.querySelector('svg')).select(`#${svgElemId}`)
                if (svgElem.empty()) {
                    return null
                }
                let updateFn = null
                switch (svgElem.attr('data-type')) {
                    case 'line-plot':
                        updateFn = linePlotDataUpdateExpression
                        break
                    case 'scatter-plot':
                        updateFn = scatterPlotDataUpdateExpression
                        break
                    default:
                        break
                }
                return (data, svgElemId) => updateFn(block, data, svgElemId)
            }

            Object.assign(block, { getDataUpdateFunction })

            // eslint-disable-next-line no-new-func
            const prepareDependencies = Function('block', globalsExpr)
            prepareDependencies(block)

            // eslint-disable-next-line no-new-func
            dataUpdateExpression = Function('block', 'data', 'svgElemId', dataUpdateExpression)

            setBlock(block)
            setUpdateExpression(() => dataUpdateExpression)
            setNode(doc.node)
        })

        return () => {
            componentIsMounted.current = false
        }
    }, [])

    useEffect(() => {
        loadData()
    }, [rev, updateExpression, block])

    return <div ref={divRef} style={{ border: '1px solid #808080' }} dangerouslySetInnerHTML={{ __html: node }}></div>
}

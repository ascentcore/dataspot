import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

export default function D3Visualization({ db, docName, setup }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)

    const componentIsMounted = useRef(true)

    function loadData() {
        db.get(`${docName}-data`).then(function(doc) {
            if (divRef && block && componentIsMounted.current) {
                if (!block.dependencies.rootContainer || block.dependencies.rootContainer.empty()) {
                    block.dependencies.rootContainer = d3.select(divRef.current.querySelector('svg'))
                }
                const { data, elemClass, dataUpdateExpr } = doc

                let dataUpdateExpression = dataUpdateExpr.replace(/this\./g, 'block.')

                dataUpdateExpression = Function('block', 'data', 'elemClass', dataUpdateExpression)

                dataUpdateExpression(block, data, elemClass)
            }
        })
    }

    useEffect(() => {
        const { config, prepareDependenciesExpr, node } = setup
        const block = {
            dependencies: { d3, palette: d3.scaleOrdinal(d3.schemeAccent) }
        }

        Object.assign(block, { config })

        if (!block.dependencies.rootContainer || block.dependencies.rootContainer.empty()) {
            block.dependencies.rootContainer = d3.select(divRef.current.querySelector('svg'))
        }

        const globalsExpr = prepareDependenciesExpr.replace(/this\./g, 'block.')

        // eslint-disable-next-line no-new-func
        const prepareDependencies = Function('block', globalsExpr)
        prepareDependencies(block)

        setBlock(block)
        setNode(node)

        return () => {
            componentIsMounted.current = false
        }
    }, [])

    useEffect(() => {
        loadData()
    }, [block])

    return <div ref={divRef} style={{ border: '1px solid #808080' }} dangerouslySetInnerHTML={{ __html: node }}></div>
}

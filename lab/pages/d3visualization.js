import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

export default function D3Visualization({ db, document, rev }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)
    const [updateExpression, setUpdateExpression] = useState(null)

    const componentIsMounted = useRef(true)
    useEffect(() => {
        return () => {
            componentIsMounted.current = false
        }
    }, [])

    function loadData() {
        db.get(`${document}-data`).then(function(doc) {
            if (divRef && updateExpression && block && componentIsMounted.current) {
                if (!block.dependencies.svg || block.dependencies.svg.empty()) {
                    block.dependencies.svg = d3.select(divRef.current.querySelector('svg'))
                }
                const { data } = doc
                updateExpression(block, data)
            }
        })
    }

    useEffect(() => {
        db.get(`${document}-setup`).then(function(doc) {
            const { config, prepareDependenciesExpr, dataUpdateExpr } = doc
            const block = {
                dependencies: { d3 }
            }

            Object.assign(block, { config })


            let globalsExpr = prepareDependenciesExpr
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/setup\(\) +{/g, '')
                .replace(/}$/g, '')

            let dataUpdateExpression = dataUpdateExpr
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/dataUpdate\(data\) +{/g, '')
                .replace(/}$/g, '')

            const prepareDependencies = Function('block', globalsExpr)
            prepareDependencies(block)

            dataUpdateExpression = Function('block', 'data', dataUpdateExpression)

            setBlock(block)
            setUpdateExpression(() => dataUpdateExpression)
            setNode(doc.node)
        })
    }, [])

    useEffect(() => {
        loadData()
    }, [rev, updateExpression, block])

    return <div ref={divRef} style={{ border: '1px solid #808080' }} dangerouslySetInnerHTML={{ __html: node }}></div>
}

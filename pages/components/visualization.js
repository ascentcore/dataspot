import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

export default function Visualization({ db, docName, rev }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)

    const getData = () => {
        db.get(`${docName}-data`).then(function(doc) {
            if (
                !block.dependencies.rootContainer ||
                (block.dependencies.rootContainer instanceof d3.selection && block.dependencies.rootContainer.empty())
            ) {
                block.dependencies.rootContainer =
                    block.type === 'd3' ? d3.select(divRef.current.querySelector('svg')) : divRef.current
            }
            const { data, elemClass, dataUpdateExpr } = doc

            let dataUpdateExpression = dataUpdateExpr.replace(/this\./g, 'block.')

            dataUpdateExpression = Function('block', 'data', 'elemClass', dataUpdateExpression)

            dataUpdateExpression(block, data, elemClass)
        })
    }

    useEffect(() => {
        db.get(`${docName}-setup`).then(function(setup) {
            console.log('setup')
            const { config, prepareDependenciesExpr, node, type } = setup

            const newBlock = {
                dependencies: {
                    d3,
                    palette: d3.scaleOrdinal(d3.schemeAccent),
                    document,
                    rootContainer: type === 'd3' ? d3.select(divRef.current.querySelector('svg')) : divRef.current
                },
                config,
                type
            }

            const globalsExpr = prepareDependenciesExpr.replace(/this\./g, 'block.')

            // eslint-disable-next-line no-new-func
            const prepareDependencies = Function('block', globalsExpr)
            prepareDependencies(newBlock)

            setBlock(newBlock)
            setNode(node)
        })
    }, [])

    useEffect(() => {
        if (block) {
            getData()
        }
    }, [block, rev])

    return <div ref={divRef} style={{ border: '1px solid #808080' }} dangerouslySetInnerHTML={{ __html: node }}></div>
}

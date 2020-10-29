import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

export default function Scatter({ db, document, rev }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)
    const [updateExpression, setUpdateExpression] = useState(null)

    useEffect(() => {
        db.get(`${document}-dataupdate`).then(function(doc) {
            const { config, globals, expression } = doc
            const block = {
                globals: { d3 }
            }
            Object.assign(block, { config })

            let globalsExpr = globals
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/setupGlobals\(\) +{/g, '')
                .replace(/}$/g, '')

            let dataUpdateExpression = expression
                .replace(/\/\/.*/g, '')
                .replace(/\n/g, ' ')
                .replace(/this\./g, 'block.')
                .replace(/dataUpdate\(data\) +{/g, '')
                .replace(/}$/g, '')

            const setupGlobals = Function('block', globalsExpr)
            setupGlobals(block)

            dataUpdateExpression = Function('block', 'data', dataUpdateExpression)

            setBlock(block)
            setUpdateExpression(() => dataUpdateExpression)
            setNode(doc.node)
        })
    }, [])

    useEffect(() => {
        if (divRef && updateExpression && block) {
            if (!block.globals.svg) {
                block.globals.svg = d3.select(divRef.current.querySelector('svg'))
            }
            db.get(`${document}-data`).then(function(doc) {
                const { svg, x, y } = block.globals
                updateExpression(block, Object.values(doc))
            })
        }
    }, [rev])

    return <div ref={divRef} style={{ border: '1px solid #808080' }} dangerouslySetInnerHTML={{ __html: node }}></div>
}

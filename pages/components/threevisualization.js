import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ThreeVisualization({ db, document, rev }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)
    const [updateExpression, setUpdateExpression] = useState(null)

    const componentIsMounted = useRef(true)

    function loadData() {
        db.get(`${document}-data`).then(function(doc) {
            if (divRef && updateExpression && block && componentIsMounted.current) {
                if (!block.dependencies.renderer) {
                    block.dependencies.renderer = new THREE.WebGLRenderer({
                        canvas: divRef.current.querySelector('canvas')
                    })
                }
                const { data } = doc
                console.log(data)
                // TODO transform serialized function back
                //updateExpression(block, data)
            }
        })
    }

    useEffect(() => {
        db.get(`${document}-setup`).then(function(doc) {
            let { config, prepareDependenciesExpr, dataUpdateExpr } = doc
            const block = {
                dependencies: { THREE }
            }

            Object.assign(block, { config })

            // TODO check block.dependencies.svg.empty()
            if (!block.dependencies.renderer) {
                block.dependencies.renderer = new THREE.WebGLRenderer({
                    canvas: divRef.current.querySelector('canvas')
                })
            }

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

        return () => {
            componentIsMounted.current = false
        }
    }, [])

    useEffect(() => {
        loadData()
    }, [rev, updateExpression, block])

    return <div ref={divRef} style={{ border: '1px solid #808080' }} dangerouslySetInnerHTML={{ __html: node }}></div>
}

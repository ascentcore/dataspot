import { useEffect, useRef, useState } from 'react'

export default function HTMLVisualization({ db, docName, setup }) {
    const divRef = useRef(null)
    const [node, setNode] = useState(null)
    const [block, setBlock] = useState(null)

    const componentIsMounted = useRef(true)

    function loadData() {
        db.get(`${docName}-data`).then(function(doc) {
            if (divRef && block && componentIsMounted.current) {
                if (!block.dependencies.rootContainer) {
                    block.dependencies.rootContainer = divRef.current
                }
                const { data, elemId, dataUpdateExpr } = doc

                let dataUpdateExpression = dataUpdateExpr.replace(/this\./g, 'block.')

                dataUpdateExpression = Function('block', 'data', 'elemId', dataUpdateExpression)

                dataUpdateExpression(block, data, elemId)
            }
        })
    }

    useEffect(() => {
        const { config, prepareDependenciesExpr, node } = setup
        const block = { dependencies: { document } }

        Object.assign(block, { config })

        if (!block.dependencies.rootContainer) {
            block.dependencies.rootContainer = divRef.current
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

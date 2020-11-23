import { useEffect, useRef, useState } from 'react'
import D3Visualization from './d3visualization'
import HTMLVisualization from './htmlvisualization'

export default function Visualization({ db, docName }) {
    const [doc, setDoc] = useState(null)

    useEffect(() => {
        db.get(`${docName}-setup`).then(function(doc) {
            setDoc(doc)
        })
    }, [])

    return doc !== null ? (
        doc.type === 'd3' ? (
            <D3Visualization db={db} docName={docName} setup={doc} />
        ) : (
            <HTMLVisualization db={db} docName={docName} setup={doc} />
        )
    ) : null
}

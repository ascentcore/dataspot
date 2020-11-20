import { useEffect, useRef, useState } from 'react'
import D3Visualization from './d3visualization'

export default function Visualization({ db, document }) {
    const [doc, setDoc] = useState(null)

    useEffect(() => {
        db.get(`${document}-setup`).then(function(doc) {
            setDoc(doc)
        })
    }, [])

    return doc !== null ? (
        <D3Visualization db={db} document={document} setup={doc}/>
    ) : null
}

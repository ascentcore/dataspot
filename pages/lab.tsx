import PouchDB from 'pouchdb'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import D3Visualization from './components/d3visualization'

export default function Lab() {
    const [docs, setDocs] = useState({})
    const [keys, setKeys] = useState([])
    const router = useRouter()
    const [db, setDB] = useState(null)

    useEffect(() => {
        if (router.query.project !== undefined) {
            setDB(new PouchDB(`http://localhost:3000/db/${router.query.project}`))
        }
    }, [router.query.project])

    useEffect(() => {
        if (db !== null) {
            db.allDocs().then((data) => {
                const keys = Array.from(new Set(data.rows.map((row) => row.key.replace(/-data$|-setup$/, ''))))
                setKeys(keys)
            })
            const localState = {}
            const changes = db
                .changes({
                    since: 'now',
                    live: true
                })
                .on('change', function(change) {
                    const { id, seq } = change
                    localState[id] = seq
                    setDocs({ ...localState })
                })
                .on('error', function(err) {
                    console.log(err)
                    // handle errors
                })

            return () => {
                console.log('Unsubscribing listener ...')
                changes.cancel()
            }
        }
    }, [db])

    return (
        <div className='lab-container'>
            <h1 className='lab-name'>{router.query.project}</h1>

            <main>
                {keys.map((key) => (
                    <React.Fragment key={key}>
                        <h1>{key}</h1>
                        <D3Visualization db={db} document={key} key={docs[`${key}-setup`]} rev={docs[`${key}-data`]} />
                        <br />
                    </React.Fragment>
                ))}
            </main>
        </div>
    )
}

import PouchDB from 'pouchdb'
import Head from 'next/head'
import D3Visualization from './components/d3visualization'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Lab() {
    const [docs, setDocs] = useState({})
    const [keys, setKeys] = useState([])
    const router = useRouter()
    const [db] = useState(() => {
        return new PouchDB(`http://localhost:3000/db/${router.query.project}`)
    })

    useEffect(() => {
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
    }, [])

    return (
        <div className='container'>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                {keys.map((key) => (
                    <React.Fragment>
                        <h1>{key}</h1>
                        <D3Visualization db={db} document={key} key={docs[`${key}-setup`]} rev={docs[`${key}-data`]} />
                        <br />
                    </React.Fragment>
                ))}
            </main>
        </div>
    )
}
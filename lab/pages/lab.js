import PouchDB from 'pouchdb'
import Head from 'next/head'
import D3Visualization from './d3visualization'
import { useEffect, useState } from 'react'

var db = new PouchDB('http://localhost:3000/db/research')

export default function Lab() {
    const [docs, setDocs] = useState({})

    useEffect(() => {
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
                <D3Visualization
                    db={db}
                    document='scatter-plot'
                    key={docs['scatter-plot-setup']}
                    rev={docs['scatter-plot-data']}
                />
                <D3Visualization
                    db={db}
                    document='sigmoid-plot'
                    key={docs['sigmoid-plot-setup']}
                    rev={docs['sigmoid-plot-data']}
                />
            </main>
        </div>
    )
}

import PouchDB from 'pouchdb'
import Head from 'next/head'
import Scatter from './scatter'
import { useEffect, useState } from 'react'

var db = new PouchDB('http://localhost:3000/db/research')

export default function Home() {
    const [docs, setDocs] = useState({})

    useEffect(() => {
        console.log('use effect?!')
        db.changes({
            since: 'now',
            live: true
        })
            .on('change', function(change) {
                console.log(change)
                const { id, seq } = change
                setDocs({ ...docs, [id]: seq })

                // console.log({ ...docs, [id]: seq }, change)
            })
            .on('error', function(err) {
                console.log(err)
                // handle errors
            })
    }, [])

    return (
        <div className='container'>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <Scatter db={db} document='vis' key={docs['vis-dataupdate']} rev={docs['vis-data']} />
            </main>
        </div>
    )
}

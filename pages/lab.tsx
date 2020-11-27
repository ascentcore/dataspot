import PouchDB from 'pouchdb'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from './components/card'

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
                setKeys(Array.from(new Set(data.rows.map((row) => row.key.replace(/-data$|-setup$/, '')))))
            })
            const localState = {}
            const changes = db
                .changes({
                    since: 'now',
                    live: true
                })
                .on('change', (change: any) => {
                    const { id, seq } = change
                    localState[id] = seq
                    setDocs({ ...localState })
                })
                .on('error', (err: any) => {
                    console.log(err)
                })

            return () => {
                console.log('Unsubscribing listener ...')
                changes.cancel()
            }
        }
        return () => {}
    }, [db])

    return (
        <div className='columns'>
            {keys.map((key: string) => (
                <Card key={key} dbref={key} db={db} docs={docs}></Card>
            ))}
        </div>
    )
}

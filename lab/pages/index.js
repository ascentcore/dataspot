import PouchDB from 'pouchdb'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const [projects, setProjects] = useState([])
    const router = useRouter()

    useEffect(() => {
        const genericDb = new PouchDB(`http://localhost:3000/db/lab`)
        genericDb.get('projects').then((data) => {
            setProjects(Object.keys(data.list))
        })
    }, [])

    return (
        <div className='home-container'>
            <main>
                {projects.map((project) => {
                    return (
                        <h1
                            key={project}
                            onClick={() => {
                                router.push({
                                    pathname: '/lab',
                                    query: { project }
                                })
                            }}
                        >
                            {project}
                        </h1>
                    )
                })}
            </main>
        </div>
    )
}

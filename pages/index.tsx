import PouchDB from 'pouchdb'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
    const [projects, setProjects] = useState([])
    const router = useRouter()

    useEffect(() => {
        const genericDb = new PouchDB(`http://localhost:3000/db/lab`)
        genericDb.get('projects').then((data: any) => {
            setProjects(Object.values(data.list))
        })
    }, [])

    const getUpdateValue = (update: number) => {
        const date = new Date(update)
        return date.toUTCString()
    }

    return (
        <div>
            {projects.map((project) => (
                <div className='column col-4 col-xs-12' key={project.name}>
                    <div
                        className='card'
                        onClick={() => {
                            router.push({
                                pathname: '/lab',
                                query: { project: project.name }
                            })
                        }}
                    >
                        <div className='card-image'>
                            <img className='img-responsive' style={{ width: '100%' }} src='/header-img.jpeg' />
                        </div>
                        <div className='card-header'>
                            <div className='card-title h5'>{project.name}</div>
                        </div>
                        <div className='card-body'>Last update: {getUpdateValue(project.update)}</div>
                    </div>
                </div>
            ))}
        </div>
    )

    // return (
    //     <div classNameName='home-container'>
    //         <main>
    //             {projects.map((project) => {

    //                 return (
    //                     <h1
    //                         key={project}
    //                         onClick={() => {
    //                             router.push({
    //                                 pathname: '/lab',
    //                                 query: { project }
    //                             })
    //                         }}
    //                     >
    //                         {project}
    //                     </h1>
    //                 )
    //             })}
    //         </main>
    //     </div>
    // )
}

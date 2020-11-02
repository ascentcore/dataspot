import PouchDB from 'pouchdb'
import RegisterInstance from '../registry/registry'

class Lab extends RegisterInstance {
    private db: any

    public connected: Promise<boolean>

    constructor(private project: string, url = 'http://localhost:3000/db') {
        super()
        const genericDb: any = new PouchDB(`${url}/lab`)
        this.db = new PouchDB(`${url}/${project}`)
        this.connected = new Promise((res, rej) => {
            genericDb
                .get('projects')
                .then((data: any) => {
                    const newData = { ...data }
                    if (!newData.list[project]) {
                        newData.list[project] = { name: project }
                    }

                    newData.list[project].update = new Date().getTime()
                    genericDb
                        .put(newData)
                        .then(() => {
                            res(true)
                        })
                        .catch((err: any) => console.log(err))
                })
                .catch((err: any) => {
                    if (err.status === 404) {
                        return genericDb
                            .put({
                                _id: 'projects',
                                list: { [project]: { name: project, update: new Date().getTime() } }
                            })
                            .then(() => {
                                res(true)
                            })
                            .catch((putErr: any) => {
                                console.log(err)
                                return Promise.reject(putErr)
                            })
                    } else {
                        rej(new Error(`Unable to connect to remote lab instance at: ${url}`))
                        this.unregister()
                        return Promise.resolve()
                    }
                })
        })
    }

    public async store(key: string, data: any): Promise<any> {
        try {
            await this.connected
            let storeData: any = {
                _id: key
            }
            try {
                console.log('gettin...')
                storeData = await this.db.get(key)
                console.log(storeData)
            } catch (err) {
                console.log('error', err)
            }

            console.log('puttin....')

            return this.db.put(Object.assign(storeData, data)).catch((err: any) => console.log(err))
        } catch (err) {
            return Promise.resolve()
        }
    }
}

export default Lab

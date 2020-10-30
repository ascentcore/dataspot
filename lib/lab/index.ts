/* eslint-disable no-underscore-dangle */
import PouchDB from 'pouchdb'
import RegisterInstance from '../registry/registry'

class Lab extends RegisterInstance {
    private initialized = false

    private db: any

    constructor(private project: string, url = 'http://localhost:3000/db') {
        super()
        const genericDb: any = new PouchDB(`${url}/lab`)
        this.db = new PouchDB(`${url}/${project}`)

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
                        this.initialized = true
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
                            this.initialized = true
                        })
                        .catch((putErr: any) => {
                            console.log(err)
                            return Promise.reject(putErr)
                        })
                } else {
                    this.unregister()
                    return Promise.resolve()
                }
            })
    }

    public async store(key: string, data: any): Promise<any> {
        if (this.initialized) {
            let storeData: any = {
                _id: key
            }
            try {
                storeData = await this.db.get(key)
            } catch (err) {
                console.log('error')
            }

            return this.db.put(Object.assign(storeData, data))
        } else {
            return Promise.resolve()
        }
    }
}

export default Lab

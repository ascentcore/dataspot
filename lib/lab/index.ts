/* eslint-disable no-underscore-dangle */
import PouchDB from 'pouchdb'
import RegisterInstance from '../registry/registry'

class Lab extends RegisterInstance {
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
                genericDb.put(newData).catch((err: any) => console.log(err))
            })
            .catch((err: any) => {
                if (err.status === 404) {
                    return genericDb
                        .put({
                            _id: 'projects',
                            list: { [project]: { name: project, update: new Date().getTime() } }
                        })
                        .catch((putErr: any) => {
                            console.log(err)
                            return Promise.reject(putErr)
                        })
                } else {
                    return Promise.reject(err)
                }
            })
    }

    public async store(key: string, data: any): Promise<any> {
        console.log(`storing ${key}`)
        let storeData: any = {
            _id: key
        }
        try {
            storeData = await this.db.get(key)
        } catch (err) {
            console.log(err)
        }

        return this.db.put(Object.assign(storeData, data))
    }
}

export default Lab

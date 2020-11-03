const express = require('express')
const PouchDB = require('pouchdb')
const expressPouch = require('express-pouchdb')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use('/db', expressPouch(PouchDB))

        server.get('*', (req, res) => {
            if (req.url === '/db') return next()
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })

const server = expressPouch({
    mode: 'minimumForPouchDB',
    overrideMode: {
        include: ['routes/fauxton']
    }
})

server.setPouchDB(require('pouchdb'))

server.listen(3100, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3100')
})

const fs = require('fs')
const express = require('express')
const PouchDB = require('pouchdb').defaults({ prefix: 'dbs/' })
const expressPouch = require('express-pouchdb')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

if (!fs.existsSync('dbs')) {
    fs.mkdirSync('dbs')
}

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

server.setPouchDB(PouchDB)

server.listen(3100, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3100')
})

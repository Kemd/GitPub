// CONSTANTS
const express = require('express')
const res = require('express/lib/response')

const app = express()

const port = 3000

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.listen(port, () => {
    console.log('Listening on port', port)
})
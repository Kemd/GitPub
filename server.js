// CONSTANTS
const express = require('express')
const drinks = require('./models/drinks')

const app = express()

const port = 3000

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

// DRINKS ROUTE
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { drinks })
})

// SHOW ROUTE
app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(port, () => {
    console.log('Listening on port', port)
})
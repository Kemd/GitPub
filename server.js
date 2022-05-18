// CONSTANTS
const express = require('express')
const drinks = require('./models/drinks')
const food = require('./models/foods')

const app = express()

const port = 3000

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

// DRINKS ROUTE
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {  drinks })
})

// SHOW ROUTE
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})

// FOOD ROUTE
app.get('/foods', (req, res) => {
    res.render('food_index.ejs', { allFoods: food })
})

app.get('/foods/:foo', (req, res) => {
    res.render('food_show.ejs', {
        foodie: food[req.params.foo]
    })
})

app.listen(port, () => {
    console.log('Listening on port', port)
})
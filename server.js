require('dotenv').config()
// === Variables === //
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const db = require('./models/database')

// === Configuration of the App === //
app.use(express.urlencoded({ extended: true })) //code for req.body
app.use((req,res,next) => {
    res.locals.data = {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
    console.log('Connected to MongoDB')
})
// === Mount middleware === //

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/logs', require('./controllers/routeController'))

// === Connection check === //
app.listen(3002, () => {
    console.log('Listening on port 3002')
})


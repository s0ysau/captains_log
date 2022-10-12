require('dotenv').config()
// === Variables === //
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Logs = require('./models/logs')


// === Configuration of the App === //
app.use(express.urlencoded({ extended: true })) //code for req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})
// === Mount middleware === //

app.use(methodOverride('_method'))

// === Mount Routes ===/ 
// INDEX
app.get('/logs', (req, res) => {
    // res.send('Index Page Working')
    Logs.find({}, (err, foundLog) => {
        if (err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Index', {
                logs: foundLog
            })
        }
    })
})

// NEW
app.get('/logs/new', (req, res) => {
    res.render('./logs/New')
})

// DELETE
app.delete('/logs/:id', (req, res) => {
    Logs.findByIdAndDelete((req.params.id), (err, deleteLog) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})

// UPDATE 
app.put('/logs/:id', (req, res) => {
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Logs.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
        if (err) {
            console.error.apply(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${updatedLog._id}`)
        }
    })
})

// CREATE
app.post('/logs/', (req, res) => {
    // res.send(req.body)
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Logs.create(req.body, (err, createdLog) => {
        if (err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
            // res.send(createdLog)
        }
    })
})

// EDIT
app.get('/logs/:id/edit', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Edit', {
                logs: foundLog
            })
        }
    })
})

// SHOW
app.get('/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        if (err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Show', {
                logs: foundLog
            })
        }
    }) 
})

// === Connection check === //
app.listen(3002, () => {
    console.log('Listening on port 3002')
})


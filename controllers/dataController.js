const { update } = require('../models/logs')
const Log = require('../models/logs')

const dataController = {
	// INDEX
	index(req, res, next) {
        Log.find({}, (err, foundLog) => {
                if(err){
                res.status(400).send({
                    msg: err.message
                }) 
            } else {
                res.locals.data.logs = foundLog
                next()
            }
        })
    },
		
	// DELETE
	destroy (req, res, next) {
		Log.findByIdAndDelete (req.params.id, (err, deleteLog) => {
			if(err){
            res.status(400).send({
                msg: err.message
            })
        } else {
            res.locals.data.logs = deleteLog
            next()
        }
		})
	},
	
	// UPDATE 
	update(req, res, next) {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
		Log.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updateLog) => {
			if(err){
            res.status(400).send({
                msg: err.message
            })
        } else {
            res.locals.data.logs = updateLog
            next()
        }
		})
	},
	
	// CREATE
	create (req, res, next) {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
		Log.create(req.body, (err, createLog) => {
			if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.logs = createLog
                next()
            }
		})
	},
	
	// EDIT
	
	// SHOW
	show (req, res, next) {
        Log.findById(req.params.id, (err, foundLog) => {
                if(err) {
            res.status(404).send({
                msg: err.message,
                output: 'Could not find Entry Log with that ID'
            })
        } else {
            res.locals.data.logs = foundLog
            next()
        }
        })
	}
}

module.exports = dataController
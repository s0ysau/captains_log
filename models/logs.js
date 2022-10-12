const mongoose = require('mongoose')

// Make a Schema

const logsSchema = new mongoose.Schema({
	title: { type: String, require: true},
	entry: { type: String, require: true},
	shipIsBroken: { type: Boolean, default: true }
})

// Make a model from the Schema

const Logs = mongoose.model('Logs', logsSchema)


// Export the model for use in the app

module.exports = Logs
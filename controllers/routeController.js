const express = require('express') 
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

// Route
// Index
router.get('/', dataController.index, viewController.index)
// New
router.get('/new', viewController.newView)
// delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// update
router.put('/:id', dataController.update, viewController.redirectShow)
// create
router.post('/', dataController.create, viewController.redirectShow) 
// edit
router.get('/:id/edit', dataController.show, viewController.edit)
// show
router.get('/:id', dataController.show, viewController.show)

module.exports = router
const express = require('express')
const router = express.Router()

const Item = require('./../models/Item.model')

// Get all items on main page
router.get('/all', (req, res, next) => {

    Item.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Get detailed view of one item
router.get('/:item_id', (req, res, next) => {

    Item.findById(req.params.item_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Edit one item
router.get('/:item_id/edit', (req, res, next) => {

    Item.findById(req.params.item_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/:item_id/edit', (req, res, next) => {

    Item.findByIdAndUpdate(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Create new item 
router.post('/new', (req, res, next) => {

    Item.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Delete item
router.get('/:item_id/delete', (req, res, next) => {

    Item.findByIdAndDelete(req.params.item_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
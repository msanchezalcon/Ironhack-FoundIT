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

    const { name, description, category, location, imageUrl, foundBy } = req.body
    // const name = req.body.name
    // const description = req.body.description
    // const category = req.body.category
    // const location = req.body.location
    // const imageUrl = req.body.imageUrl
    // const foundBy = req.body.foundBy
    // // no funciona
    // const tempName = name || req.user.name
    // const tempCategory = category || req.user.category
    // const tempLoc = location || req.user.location
    // const tempDescrip = description || req.user.description
    // const tempImg = imageUrl || req.user.imageUrl
    // const tempFound = foundBy || req.user.foundBy
    // { name: tempName, description: tempDescrip, category: tempCategory, location: tempLoc, imageUrl: tempImg, foundBy: tempFound }
    Item.findByIdAndUpdate(req.params.item_id, { name, description, category, location, imageUrl, foundBy })
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
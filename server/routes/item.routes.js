const express = require('express')
const router = express.Router()

const Item = require('./../models/Item.model')
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login")



//get user items
router.get('/users/:id', ensureLoggedIn(), (req, res, next) => {

    Item.find({ foundBy: req.params.id }).populate('foundBy', 'username')
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Get all items on main page
router.get('/all', ensureLoggedIn(), (req, res, next) => {

    Item.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Get detailed view of one item
router.get('/:item_id', ensureLoggedIn(), (req, res, next) => {

    Item.findById(req.params.item_id).populate('foundBy', 'username')
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Edit one item
router.get('/:item_id/edit', ensureLoggedIn(), (req, res, next) => {

    Item.findById(req.params.item_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/:item_id/edit', ensureLoggedIn(), (req, res, next) => {

    const { name, description, category, location, imageUrl, foundBy } = req.body

    const tempName = name || req.user.name
    const tempCat = category || req.user.category
    const tempLoc = location || req.user.location
    const tempDesc = description || req.user.description
    const tempImg = imageUrl || req.user.imageUrl
    const tempFound = foundBy || req.user.foundBy

    Item.findByIdAndUpdate(req.params.item_id, { name: tempName, description: tempDesc, category: tempCat, location: tempLoc, imageUrl: tempImg, foundBy: tempFound })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Create new item 
router.post('/new', ensureLoggedIn(), (req, res, next) => {

    Item.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Delete item
router.get('/:item_id/delete', ensureLoggedIn(), (req, res, next) => {

    Item.findByIdAndDelete(req.params.item_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
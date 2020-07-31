const express = require('express')
const router = express.Router()
const uploader = require('../configs/cloudinary.config')



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

    Item.find().populate('foundBy', 'username')
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

router.post('/:item_id/edit', ensureLoggedIn(), uploader.single("imageUrl"), (req, res, next) => {
    //const { name, description, category, location, imageUrl, foundBy } = req.body
    const { name, description, category, location } = req.body
    const tempName = name || req.body.name
    const tempCat = category || req.body.category
    const tempLoc = location || req.body.location
    const tempDesc = description || req.body.description
    const tempImg = req.file ? req.file.url : req.body.imageUrl
    //const tempImg = imageUrl || req.user.imageUrl
    //const tempFound = foundBy || req.body.foundBy
    //, foundBy: tempFound, location: tempLoc
    Item.findByIdAndUpdate(req.params.item_id, { name: tempName, description: tempDesc, category: tempCat, imageUrl: tempImg })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Create new item 
router.post('/new', ensureLoggedIn(), uploader.single("imageUrl"), (req, res, next) => {
    const { name, description, category, location, foundBy } = req.body
    const tempimageUrl = req.file ? req.file.url : "";
    Item.create({ name, description, category, location, foundBy, imageUrl: tempimageUrl })
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
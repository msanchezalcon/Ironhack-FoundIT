const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/User.model")


const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')
router.get('/', checkAuthenticated, (req, res) => res.render('profile', {
    user: req.user
}))

// Endpoints
router.get('/', (req, res) => {
    console.log('¿Está el usuario logeado?', req.isAuthenticated())
    res.render('index')
})

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


//Check logged in session & roles
// router.get('/users/:userId/items', checkRole(['ADMIN', 'USER']), (req, res) => res.send('ITEMS FOR USER AND ADMIN'))
// router.get('/users/:userId/all-items', checkRole(['ADMIN']), (req, res) => res.send('ALL ITEMS FOR ADMIN'))



module.exports = router
const express = require("express")
const router = express.Router()
const passport = require("passport")
const uploader = require('../configs/cloudinary.config')


const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')



router.post('/signup', (req, res, next) => {

    const username = req.body.username
    const name = req.body.name
    const password = req.body.password


    if (!username || !password) {
        res.status(400).json({ message: 'Provide username and password' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' })
        return
    }

    User.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "Username check went bad." })
            return
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' })
            return
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt)

        const aNewUser = new User({
            username: username,
            name: name,
            password: hashPass
        })

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' })
                return
            }

            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' })
                    return
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser)
            });
        });
    });
});




router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' })
            return
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails)
            return
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' })
                return
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser)
        });
    })(req, res, next)
});



router.post('/logout', ensureLoggedIn(), (req, res, next) => {
    // req.logout() is defined by passport
    req.logout()
    res.status(200).json({ message: 'Log out success!' })
});


router.get('/loggedin', ensureLoggedIn(), (req, res, next) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user)
        return
    }
    res.status(403).json({ message: 'Unauthorized' })
})



// USER ROUTES

router.get("/users", ensureLoggedIn(), (req, res, next) => {
    User.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: 'No user info in DB' }))
})


router.get("/users/:user_id", ensureLoggedIn(), (req, res, next) => {
    User.findById(req.params.user_id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: 'No user info in DB' }))
})


router.post("/users/:user_id", ensureLoggedIn(), uploader.single("avatar"), (req, res, next) => {
    const username = req.body.username
    const name = req.body.name
    //const avatar = req.body.avatar
    const messages = req.body.messages
    const tempUsername = username || req.user.username
    const tempName = name || req.user.name
    const tempAvatar = req.file ? req.file.url : req.user.avatar
    const tempMessages = messages || req.user.messages
    //const tempAvatar = avatar || req.user.avatar
    User.findByIdAndUpdate(req.params.user_id, { username: tempUsername, name: tempName, avatar: tempAvatar, messages: tempMessages }, { new: true })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not update user' }))
})


module.exports = router
const express = require('express')
const router = express()
const userControllers = require('../controllers/user-controllers')


// router.post('/signup', userControllers.signup)

// router.post('/login', userControllers.login)

router.post('/createUser', userControllers.createUser)

// router.post('/update', fileUpload.single('avatar'), userControllers.updeteUser)

module.exports = router
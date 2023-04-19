const express = require('express')
const router = express()
const aboutControllers = require('../controllers/about-controllers')


// router.post('/signup', userControllers.signup)

// router.post('/login', userControllers.login)

router.get('/getAbout', aboutControllers.getAbout)

router.post('/createAbout', aboutControllers.createAbout)

// router.post('/update', fileUpload.single('avatar'), userControllers.updeteUser)

module.exports = router
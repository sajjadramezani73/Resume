const express = require('express')
const router = express()
const projectControllers = require('../controllers/project-controllers')

router.get('/getProjects', projectControllers.getProjects)

router.post('/createProject', projectControllers.createProject)

module.exports = router
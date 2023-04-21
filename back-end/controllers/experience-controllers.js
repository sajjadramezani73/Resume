const Experience = require('../model/experience')
const HttpError = require('../model/http-error')

const getExperiences = async (req, res, next) => {

    res.json({ experience: 'experience' })
}

const createExperience = async (req, res, next) => {

    const { } = req.body

    res.json({ experience: 'experienceeeee' })
}

exports.getExperiences = getExperiences
exports.createExperience = createExperience
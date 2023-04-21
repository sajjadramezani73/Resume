const Experience = require('../model/experience')
const HttpError = require('../model/http-error')

const getExperiences = async (req, res, next) => {

    res.json({ experience: 'experience' })
}

const createExperience = async (req, res, next) => {

    const { title, company, location, jobType, jobTime, dateStart, dateEnd,
        description, companyLink, skill, images } = req.body

    const createExperience = new Experience({
        title: title,
        company: company,
        location: location,
        jobType: jobType,
        jobTime: jobTime,
        dateStart: dateStart,
        dateEnd: dateEnd,
        description: description,
        companyLink: companyLink,
        skill: skill,
        images: images
    })

    try {
        await createExperience.save()
    } catch (err) {
        const error = new HttpError('Creating experience faild', 500)
        return next(error)
    }

    res.json({ experience: createExperience })
}

exports.getExperiences = getExperiences
exports.createExperience = createExperience
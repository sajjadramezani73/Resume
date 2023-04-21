const Experience = require('../model/experience')
const HttpError = require('../model/http-error')

const getExperiences = async (req, res, next) => {

    const { location } = req.headers

    let experiences
    try {
        experiences = await Experience.find({})
    } catch (err) {
        const error = new HttpError('get experience faild', 500)
        return next(error)
    }

    const translatedExperiences = experiences.map(item => {
        const translatedExp = {}
        Object.keys(item._doc).forEach(exp => {
            console.log(exp)
            if (item._doc[exp].hasOwnProperty('fa')) {
                translatedExp[exp] = item._doc[exp][location]
            } else {
                translatedExp[exp] = item._doc[exp]
            }
        })
        return translatedExp
    })

    res.json({ experiences: translatedExperiences })
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
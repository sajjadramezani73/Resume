const Project = require('../model/project')
const HttpError = require('../model/http-error')

const getProjects = async (req, res, next) => {

    const { location } = req.headers

    // let experiences
    // try {
    //     experiences = await Experience.find({})
    // } catch (err) {
    //     const error = new HttpError('get experience faild', 500)
    //     return next(error)
    // }

    // const translatedExperiences = experiences.map(item => {
    //     const translatedExp = {}
    //     Object.keys(item._doc).forEach(exp => {
    //         if (item._doc[exp].hasOwnProperty('fa')) {
    //             translatedExp[exp] = item._doc[exp][location]
    //         } else {
    //             translatedExp[exp] = item._doc[exp]
    //         }
    //     })
    //     return translatedExp
    // })

    res.json({ projects: 'translatedExperiences' })
}

const createProject = async (req, res, next) => {

    const { title, briefDescription, description, images, links, skills } = req.body

    const createProject = new Project({
        title: title,
        briefDescription: briefDescription,
        description: description,
        links: links,
        skills: skills,
    })

    try {
        await createProject.save()
    } catch (err) {
        const error = new HttpError('Creating project faild', 500)
        return next(error)
    }

    res.json({ project: createProject })
}

exports.getProjects = getProjects
exports.createProject = createProject
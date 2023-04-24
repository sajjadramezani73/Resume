const Project = require('../model/project')
const HttpError = require('../model/http-error')

const getProjects = async (req, res, next) => {

    const { location } = req.headers

    let projects
    try {
        projects = await Project.find({})
    } catch (err) {
        const error = new HttpError('get projects faild', 500)
        return next(error)
    }

    const translatedProjects = projects.map(item => {
        const translatedPrj = {}
        Object.keys(item._doc).forEach(prj => {
            if (item._doc[prj].hasOwnProperty('fa')) {
                translatedPrj[prj] = item._doc[prj][location]
            } else {
                translatedPrj[prj] = item._doc[prj]
            }
        })
        return translatedPrj
    })

    res.json({ projects: translatedProjects })
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
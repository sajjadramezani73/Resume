const About = require("../model/about")
const HttpError = require('../model/http-error')

const getAbout = async (req, res, next) => {
    const { location } = req.headers

    let about
    try {
        about = await About.findOne({})
    } catch (err) {
        const error = new HttpError('Creating about faild', 500)
        return next(error)
    }

    const aboutMe = {
        firstName: about.firstName[location],
        lastName: about.lastName[location],
        job: about.job[location],
        address: about.address[location],
        bio: about.bio[location],
        gender: about.gender[location],
        age: about.age,
        email: about.email,
        phone: about.phone,
        socialsNetwork: about.socialsNetwork,
        avatar: about.avatar,
    }

    res.json({ aboutMe: aboutMe })
}

const createAbout = async (req, res, next) => {

    const { firstName, lastName, job, address, gender, bio,
        age, email, phone, socialsNetwork, avatar } = req.body

    const createAbout = new About({
        firstName: firstName,
        lastName: lastName,
        job: job,
        address: address,
        bio: bio,
        age: age,
        email: email,
        phone: phone,
        gender: gender,
        socialsNetwork: socialsNetwork,
        avatar: avatar
    })

    try {
        await createAbout.save()
    } catch (err) {
        const error = new HttpError('Creating about faild', 500)
        return next(error)
    }

    res.json({ about: createAbout })
}

exports.getAbout = getAbout
exports.createAbout = createAbout
const User = require("../model/user")
const HttpError = require('../model/http-error')

const getUser = async (req, res, next) => {
    const { location } = req.headers

    let user
    try {
        user = await User.findOne({})
    } catch (err) {
        const error = new HttpError('Creating user faild', 500)
        return next(error)
    }

    const aboutMe = {
        firstName: user.firstName[location],
        lastName: user.lastName[location],
        job: user.job[location],
        address: user.address[location],
        bio: user.bio[location],
        gender: user.gender[location],
        age: user.age,
        email: user.email,
        phone: user.phone,
        socialsNetwork: user.socialsNetwork,
        avatar: user.avatar,
    }

    res.json({ aboutMe: aboutMe })
}

const createUser = async (req, res, next) => {

    const { firstName, lastName, job, address, gender, bio,
        age, email, phone, socialsNetwork, avatar } = req.body

    const createUser = new User({
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
        await createUser.save()
    } catch (err) {
        const error = new HttpError('Creating user faild', 500)
        return next(error)
    }

    res.json({ user: createUser })
}

exports.getUser = getUser
exports.createUser = createUser
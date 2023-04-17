const User = require("../model/user")
const HttpError = require('../model/http-error')

const getUser = async (req, res, next) => {
    const { location } = req.headers
    console.log(location)
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
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: { fa: String, en: String }, required: true },
    lastName: { type: { fa: String, en: String }, required: true },
    job: { type: { fa: String, en: String }, required: true },
    bio: { type: { fa: String, en: String }, required: true },
    gender: { type: { fa: String, en: String }, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    socialsNetwork: {
        type: {
            github: String,
            linkedin: String,
            instagram: String
        }, required: false
    },
    avatar: { type: String },
})

module.exports = mongoose.model('User', userSchema)
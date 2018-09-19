const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true},
    email: { type: String, unique: true},
    password: String,
    img: {type: String, default: 'default.png'}
})

module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tweet: String,
    createdDate: {type: Date, default: new Date()},
    active: {type: Boolean, default: true},
    user: {type:mongoose.Schema.Types.ObjectId, unique: true, ref: 'User'}
})

module.exports = mongoose.model('Tweet', tweetSchema)
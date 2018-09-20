const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tweet: String,
    createdDate: {type: Date, default: new Date()},
    active: {type: Boolean, default: true},
    user: {type:mongoose.Schema.Types.ObjectId, required:true, ref: 'User'},
    like: {type: Number, default: 0},
    rt: {type: Number, default: 0}

})

module.exports = mongoose.model('Tweet', tweetSchema)
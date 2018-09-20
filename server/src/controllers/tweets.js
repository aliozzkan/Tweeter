const mongoose = require('mongoose')
const Tweet = require('../models/tweet')

const getTweets = (req, res) => {
    Tweet.find().select('_id tweet user date active like rt').populate('user').exec()
        .then(docs => {
            res.status(200).json(docs.reverse().map(doc => {
                return {
                    id: doc._id,
                    tweet: doc.tweet,
                    user: {
                        username: doc.user.username,
                        img: 'http://' + req.headers.host + '/uploads/' + doc.user.img
                    },
                    date: doc.date,
                    active: doc.active,
                    path: 'http://localhost:3000/tweets/' + doc._id,
                    like: doc.like,
                    rt: doc.rt
                }
            }))
        })
}

const setTweet = (req, res) => {
    const newTweet = new Tweet({
        _id: new mongoose.Types.ObjectId,
        tweet: req.body.tweet,
        user: req.body.user,
    })

    newTweet.save()
        .then(response => {
            res.status(201).json({
                message: 'The tweets successfully'
            })
        }).catch(err => {
            res.status(500).json({
                message: 'The tweets not set'
            })
        })
}

module.exports = {
    getTweets,
    setTweet
}
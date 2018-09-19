const express = require('express')
const router = express.Router()
const TweetsController = require('../controllers/tweets')

router.get('', TweetsController.getTweets)
router.post('', TweetsController.setTweet)

module.exports = router
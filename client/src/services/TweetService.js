import Api from './Api'

export default {
    getHomeTweets() {
        return Api().get('tweets')
    },

    setTweet(tweet) {
        return Api().post('tweets', tweet)
    }

}
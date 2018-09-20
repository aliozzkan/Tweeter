<template>
            <transition-group name="slide">
                <div class="mt-2" :key="tweet.id" v-for="tweet in tweets">
                        <default-tweet :tweet="tweet"></default-tweet>
                </div>
            </transition-group>
</template>

<script>
import DefaultTweet from './DefaultTweet'
export default {
    data() {
        return {
            tweets: []
        }
    },
    components: {
        DefaultTweet
    },
    mounted(){
        this.tweets = this.$store.getters.getHomeTweets
    },
    watch: {
        '$store.state.homeTweets' : function(val) {
            this.tweets = val
            console.log('Home Tweets Değişti')

        }   
    }
}
</script>

<style lang="sass" scoped>
    .slide-enter
    .slide-enter-active
        animation: slide-in .5s ease-out forwards
    
    .slide-leave
        

    .slide-leave-active
        animation: slide-out 3s ease-out forwards
        position: absolute
        width: calc(100% - 2em)
        
    
    .slide-move
        transition: transform .5s

    @keyframes slide-in
        from
            transform: translateY(-10px)
            opacity: 0
        to
            transform: translateY(0)
            opacity: 1

    @keyframes slide-out
        from
            transform: translateY(0px)
            opacity: 1
        to
            transform: translateY(-50px)
            opacity: 0
</style>

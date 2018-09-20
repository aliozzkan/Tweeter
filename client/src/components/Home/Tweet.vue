<template>
    <div id="root">
        <div class="row">
            <div class="col-md-10 col-sm-11 col-xs-12">
                <textarea :class="{'disable': isDisable}" placeholder="Neler Oluyor?" v-model="tweet" name=""></textarea>
                <div class="row">
                    <div class="col-md-9 col-sm-8 col-xs-6">
                        <div class="progress mt-2">
                            <div class="progress-bar" role="progressbar" :style="`width: ${tweetCount}%`">
                                {{tweetCount}} Karakter
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-5">
                        <button :class="{'disable': isDisable}" @click="doTweet">Tweetle</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import TweetService from '@/services/TweetService'
export default {
    data() {
        return {
            tweet: '',
            tweetCount: 0,
            isDisable: false
        }
    },
    watch: {
        tweet : function(val) {
            this.tweetCount = this.tweet.length
            if(val.length > 100) {
                this.tweet = val.slice(0, val.length-1)
            }
        },
        tweetCount: function(val) {
            if(val>=100){
                this.isDisable = true
            } else {
                this.isDisable = false
            }
        }
    },
    methods: {
        async doTweet(){
            const user = this.$store.getters.getUser.id
            
            if(this.tweet.length>0){
                const Tweet = {
                    tweet: this.tweet,
                    user
            }

            try {
                await TweetService.setTweet(Tweet)
                const response = await TweetService.getHomeTweets()
                this.$store.dispatch('setTweets', response.data)
            } catch(err) {              
                
            }


                //this.$store.dispatch('setTweet', Tweet)
                //alertify.notify('Tweet başarılı bir şekilde gönderildi!', 'success', 3);                
            } else {
               alertify.notify('Lütfen tweet girin!', 'error', 3);                
            }
            
            this.tweet = ''
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/main.sass'
    
    .progress 
        background: #ccc
    
    .progress-bar
        text-indent: 15px
        transition: .2s !important

    textarea
        border: 0
        border-bottom: 3px solid $primary-color
        padding: 1em
        resize: none
        width: 100%
        outline: 0
        border-radius: 5px 5px 0px 0px
        height: 100px
        &.disable 
            border-bottom: 3px solid $red
    
    button
        border: 0
        outline: 0
        background: $primary-color
        color: white
        line-height: 30px
        border-radius: 50px
        width: 100%
        cursor: pointer
        font-size: .8rem        
        &:hover
            background: $green
        &.disable

    

</style>

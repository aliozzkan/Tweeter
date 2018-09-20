<template>
    <div class="tweet">
        <div class="row">
            <div class="col-md-2">
                <img :src="userImg" alt="">
            </div>
            <div class="col-md-10">
                <strong>@{{user}}</strong> | <small><i class="fa fa-clock-o" aria-hidden="true"></i> {{date}} </small>
                <p>{{tweetText}}</p>
                <div class="row req">
                    <div class="col-md-2" :class="{'like': isLike}">
                        <i @click="isLike = !isLike" class="fa fa-heart" aria-hidden="true"></i> {{like}}
                    </div>
                    <div class="col-md-2" :class="{'rt': isRt}">
                        <i @click="isRt = !isRt" class="fa fa-exchange" aria-hidden="true"></i> {{rt}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tweet'],
    data() {
        return {
            tweetText: '',
            user: 'AliOzzkan',
            userImg: '', 
            date: '10g',
            isLike: false,
            like: 0,
            isRt: false,
            rt: 0
        }
    },
    mounted(){
        this.tweetText = this.tweet.tweet,
        this.user = this.tweet.user.username,
        this.userImg = this.tweet.user.img,
        this.date = this.tweet.date,
        this.like = this.tweet.like,
        this.rt = this.tweet.rt
    },
    watch: {
        tweet : function(val){
            this.tweet = val
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/assets/main.sass'
    .tweet
        display: block
        background: white
        padding: 1em
        border: 1px solid #ddd
        width: calc(100% - 2em)
    
    img
        width: 100%
        height: auto
    
    small
        color: #777
    
    .like
        color: $red
        i
            animation: anim .5s

    .rt 
        color: $green
        i
            animation: anim .5s
    
    .req
        color: #888
        cursor: default
    
    i
        cursor: pointer

    
    @keyframes anim
        from
            transform: rotate(0deg)
        to
            transform: rotate(360deg)

</style>

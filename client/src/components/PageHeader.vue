<template>
    <nav class="navbar navbar-expand-lg navbar-dark _bg-tweeter">
    <div class="container">
        <a class="navbar-brand" href="#">Tweeter</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form v-if="isLogged" class="form-inline my-2 my-lg-0 mx-auto">
            <input type="search" class="search" placeholder="Search" v-model="search" @keypress.enter="show">
        </form>

        <ul class="navbar-nav" v-if="isLogged">
            <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-home" aria-hidden="true"></i> <span class="ml-3">Ana Sayfa</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-bell" aria-hidden="true"></i> <span class="ml-3">Bildirimler</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link _nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img :src="userImg" class="_user-img" alt="">
                <span class="ml-special">{{username}}</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Username</a>
                    <a class="dropdown-item" href="#"> <i class="fa fa-heart" aria-hidden="true"></i> My Likes</a>
                    <a class="dropdown-item" href="#"> <i class="fa fa-exchange" aria-hidden="true"></i> My ReTweets</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Ayarlar</a>                    
                    <a class="dropdown-item" @click="logout">Çıkış Yap</a>
                </div>
            </li>
        </ul>
    </div>
    </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            userImg:  '',
            username: '',
            isLogged: false
        }
    },
    methods : {
        show(){
            alert(this.search)
        },
        logout(){
            this.$store.dispatch('doLogin', null)
            this.isLogged = false
        }
    },
    created() {
        this.isLogged = this.$store.getters.isLogged
    },
    mounted(){
        if(this.isLogged) {
            const user = this.$store.getters.getUser
            this.userImg = this.$store.getters.getUser.img
            this.username = this.$store.getters.getUser.username
        } 
    },
    watch: {
        '$store.state.isLogged': function(val) {
            const user = this.$store.getters.getUser
            this.userImg = this.$store.getters.getUser.img
            this.username = this.$store.getters.getUser.username
            this.isLogged = val
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../assets/main.sass'
    
    .dropdown-item
        color: #555 !important

    .ml-special
        margin-left: 2.8em
    .ml-3
        margin-left: 1.3em !important
        @media screen and (max-width: 992px)
            margin-left: 2em !important

    
    .search
        border: 2px solid $primary-color
        background-color: $grey
        padding: .3em
        border-radius: 50px
        text-indent: 10px
        outline: 0
        color: #666
        &:focus
            border-color: #00a8ff


    ._bg-tweeter
        background-color: $primary-color
    
    .nav-item
        margin-left: 1em !important

    .nav-link
        color: rgba(255,255,255,.8) !important
        position: relative
        font-size: .9rem
        &:hover
            color: rgba(255,255,255,1) !important 
        i
            font-size: 1.5rem
            position: absolute
            left: 0
        ._user-img
            height: 35px
            width: 35px
            border-radius: 100%
            box-shadow: 0 0 3px white
            position: absolute
            top: 0px
            
</style>

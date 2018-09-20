<template>
    <div id="root">
        <div class="row mt-3">
            <div class="col-md-4">
            <side-user user="ali"></side-user>
            <br>
            <side-menu/>
        </div>
        <div class="col-md-8">
            <div class="row">
            <div class="col-md-12">
                <tweet/>
            </div>
            <div class="col-md-12 mt-3">
                <tweets/>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import Tweets from "./Home/Tweets";
import Tweet from "./Home/Tweet";
import SideMenu from "@/components/SideMenu";
import SideUser from "@/components/SideUser";
import TweetService from "@/services/TweetService";

export default {
  components: {
    Tweets,
    Tweet,
    SideMenu,
    SideUser
  },
  async created() {
    const isLogin = this.$store.getters.isLogged;
    if (!isLogin) {
      this.$router.push({ name: "Login" });
    }

    const response = await TweetService.getHomeTweets();
    this.$store.dispatch('setTweets', response.data)
  },
  watch: {
    "$store.state.isLogged": function(val) {
      if (!val) {
        this.$router.push({ name: "Login" });
      }
    }
  }
};
</script>

<style lang="sass" scoped>
    h1
        color: white
    
</style>


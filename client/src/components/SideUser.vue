<template>
    <div id="root">
        <div class="row">
            <div class="col-md-12">
                <div class="card mt-3">
                    <img class="card-img-top" :src="userImg" :alt="username">
                    <div class="card-body">
                        <h5 class="card-title text-center">@{{username}}</h5>
                        <hr>
                        <div class="row text-center">
                            <div class="col">
                                <b>Tweet</b><br>150
                            </div>
                            <div class="col">
                                <b>Takipçi</b>
                                <br>
                                2500
                            </div>
                            <div class="col">
                                <b>Takip</b> 
                                <br>
                                1500
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          userImg: '',
          username: ''
      }
  },
  mounted(){
      this.userImg = this.$store.getters.getUser.img
      this.username = this.$store.getters.getUser.username
  }
};
</script>

<style lang="sass" scoped>
    #root
        background: white
        border: 1px solid #ddd
    
    .card
        border: 0 !important

    img
        width: 100px
        margin-left: calc(50% - 50px)
        border-radius: 10px 
</style>

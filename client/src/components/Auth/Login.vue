<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-4 box">
            <h3>Giriş Yap</h3>
            <hr>
            <div class="form-group">
                <label for="exampleInputEmail1">E-Posta</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Posta girin...">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Parola</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Parola">
            </div>
            <div class="form-group form-check">
                <input v-model="rememberMe" type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Beni Hatırla</label>
            </div>
            <button class="btn btn-outline-primary" @click="login">Giriş Yap</button>
            <div class="alert alert-danger mt-3" v-if="message==null?false:true">
                {{message}}
            </div>
        </div>
    </div>
</template>


<script>
import AuthService from "@/services/AuthService";
export default {
  data() {
    return {
      email: "",
      password: null,
      rememberMe: false,
      message: null
    };
  },
  methods: {
    async login() {
      const User = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await AuthService.login(User)
        this.$store.dispatch('doLogin', response.data)
        this.$router.push({name: 'Home'})
      } catch (err) {
        this.message =err.response.data.message;
      }

    }
  },
  
};
</script>


<style lang="sass" scoped>
    .box
        background-color: #fff
        border: 1px solid #ddd
        padding: 1em
</style>

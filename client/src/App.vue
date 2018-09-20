<template>
  <div id="app">
    <page-header/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import SideMenu from '@/components/SideMenu'
import SideUser from '@/components/SideUser'


export default {
  name: 'App',
  components: {
    PageHeader,
    SideMenu,
    SideUser
  }
}
</script>

<style lang="sass">
  @import 'assets/main.sass'
  body
    background-color: $grey
    font-family: 'Open Sans', sans-serif !important

  .container
    @media screen and (max-width: 992px)
      max-width: 100% !important
    
</style>


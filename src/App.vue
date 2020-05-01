<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/HeaderClick/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app
    background-color #10aeb5
    width 100%
    height 100%
    overflow auto
</style>

<template>
    <div class="header">
      <div class="icon"></div>
      <span class="title">疫情可视化</span>

    </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    height 45px
    width 100%
    background-color white
    text-align center
    z-index 9999
  .icon
    position: absolute
    width 5%
    height 100%
    margin-left 5%
    background-image url("../../../static/image/icon.jpg")
    background-repeat no-repeat
    background-size 50% 100%
  .title
    font-size 1.5rem
    letter-spacing 15px
    line-height 45px
    font-weight bold
    animation move-font linear 2s infinite
    -webkit-background-clip text
    background-repear no-repeat
    color: transparent;
    background-image linear-gradient(
      left,
      rgb(143,196,0) 0%,rgb(89,106,114) 100%
    )
  @keyframes move-font
    from
      background-position 0 0
    to
      background-position 200px 0
</style>

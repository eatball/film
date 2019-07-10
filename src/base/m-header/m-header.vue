<template>
  <div>

    <h1 class="logo"><slot></slot>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: "m-header",
    props: {
      title:{
        type:String,
        default:'喵喵电影'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .logo
    height: 50px
    width: 100%
    color: #fff
    font-size: 18px
    line-height 50px
    text-align center
    background #F35747
    i
      float left
      font-size:20px
      transform translateX(10px)
      cursor pointer
</style>

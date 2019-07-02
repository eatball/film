<template>
    <div class="footer">
      <router-link tag="div" to="/Movie" class="f-item">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link tag="div" to="/Cinema" class="f-item">
        <i class="iconfont icon-dianyingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link tag="div" to="/My" class="f-item">
        <i class="iconfont icon-wodedangxuan"></i>
        <p>我的</p>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "m-footer",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .footer
    position  fixed
    bottom 0
    left 0
    width:100%
    display flex
    height:45px
    border-top:1px solid #ccc
    padding-top:5px
    background #fff
    .f-item
      flex 1
      text-align center
      font-size 16px;
      color #666
      cursor: pointer
      &.on
        color:#F35747
      &.router-link-active
        color:#F35747
      i
        font-size 20px
      p
        font-size 14px
        margin-top:5px
        padding:0
</style>

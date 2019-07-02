<template>
    <div>
      <m-header></m-header>
      <div class="content">
        <div class="c-main">
          <router-link tag="div" to="/Movie/city" class="c-item city">
            <span>大连</span>
            <i class="iconfont icon-location"></i>
          </router-link>
          <div class="c-item playing">
            <router-link tag="span" to="/Movie/nowPlaying" class="play">正在热映</router-link>
            <router-link tag="span" to="/Movie/comingSoon" class="play">即将上映</router-link>
          </div>
          <router-link tag="div" to="/Movie/search" class="c-item search">
            <i class="iconfont icon-search-active"></i>
          </router-link>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>

      </div>
    </div>
</template>

<script>
    import MHeader from "../../base/m-header/m-header";
    export default {
      name: "movie",
      components: {
        MHeader
      },
      data() {
          return {}
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .c-main
    display flex
    height:50px
    line-height 50px
    font-size 16px
    border-bottom 1px solid #ccc
    .city
      flex 0 0 80px
      width:80px
      font-size 14px
      &.router-link-active
        color:#F35747
        border-bottom:2px solid #F35747
    .c-item
      text-align center
    .playing
      flex 1
      display flex
      justify-content space-around
      font-size:14px
      .play
        display inline-block
        height:98%
        padding:0 5px
        color:#333
        &.router-link-active
          color:#F35747
          border-bottom:2px solid #F35747
    .search
      flex 0 0 80px
      width:80px
      color:#333
      &.router-link-active
        color:#F35747
        border-bottom:2px solid #F35747
      i
        font-size:28px
</style>

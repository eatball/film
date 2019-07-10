<template>
    <div>
      <m-header></m-header>
      <div class="content">
        <div class="c-main">
          <router-link tag="div" to="/movie/city" class="c-item city">
            <span>{{$store.state.city.nm}}</span>
            <i class="iconfont icon-location"></i>
          </router-link>
          <div class="c-item playing">
            <router-link tag="span" to="/movie/nowPlaying" class="play">正在热映</router-link>
            <router-link tag="span" to="/movie/comingSoon" class="play">即将上映</router-link>
          </div>
          <router-link tag="div" to="/movie/search" class="c-item search">
            <i class="iconfont icon-search-active"></i>
          </router-link>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <router-view name="detail"></router-view>
      <open-box :cityInfo="cityInfo" v-if="isShow"></open-box>
    </div>
</template>

<script>
    import MHeader from "../../base/m-header/m-header";
    import OpenBox from "../../base/openBox/open-box";
    export default {
      name: "movie",
      components: {
        OpenBox,
        MHeader
      },
      data() {
          return {
            cityInfo:{},
            isShow:false
          }
      },
      methods:{
        getCity(){
          this.axios.get('api/getLocation').then((res)=>{
            if( res.data.msg === 'ok' ){
              let data = res.data.data;
              setTimeout(()=>{
                if( this.$store.state.city.id == data.id )return
                this.isShow = true
              },3000)
              this.cityInfo = data
            }
            console.log(res);
          })
        }
      },
      mounted() {
        this.getCity()
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

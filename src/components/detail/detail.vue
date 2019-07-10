<template>
  <div class="detail-box animate" >
    <m-header title="影片详情" class="fixed">
      <i class="iconfont icon-fanhui" @click="back"></i>
    </m-header>
    <loading v-if="isLoading"></loading>
    <div class="detail">
      <div class="d-top">
        <img :src="detail.albumImg" class="blur" alt="">
        <div class="d-info">
          <img :src="detail.img | setWH('100.140')" alt="">
          <div class="i-right">
            <h2>{{detail.nm}}</h2>
            <p>{{detail.star}}</p>
            <p>{{detail.sc}}</p>
            <p>{{detail.cat}}</p>
            <p>{{detail.src}} / {{detail.dur}}分钟</p>
            <p>{{detail.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="d-desc">
        {{detail.dra}}
      </div>
      <div class="banner-warpper" ref="banner">
        <div class="banner-group" ref="bannerGroup" >
          <div class="banner-item" v-for="item in detail.photos"><img :src="item | setWH('300.200')" ></div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
    import MHeader from "../../base/m-header/m-header";
    import Loading from "../../loading";
  export default {
    name: "detail",
    components: {Loading, MHeader},
    props:{
      id:null
    },
    data() {
      return {
        detail:{},
        isLoading:true
      }
    },
    methods:{
      back(){
        this.$router.back()
      }
    },
    mounted() {
      console.log(this.id)
      if( this.id == null ){
        this.$router.back()
        return
      }
      this.axios.get('api/detailmovie?movieId='+this.id).then((res)=>{
        if( res.data.msg === 'ok' ){
          var detail = res.data.data.detailMovie
          console.log(detail);
          this.detail = detail
          this.isLoading = false
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
.banner-warpper
  padding:20px
.fixed
  position: fixed
  width:100%
  z-index:99
.animate
  animation: .3s sliderMove
@keyframes sliderMove{
  0%{transform:translateX(100%);}
  100%{transform:translateX(0);}
}
.banner
  text-align center
.detail-box
  position: absolute
  top: 0
  left: 0
  width 100%
  min-height:100%
  z-index 100
  background #fff
  overflow hidden
  .d-top
    width:calc(100% - 30px)
    height:140px
    position: relative
    padding:15px
    .blur
      position: absolute
      top: 0
      left: 0
      width:100%
      height:100%
      filter: blur(30px)
      z-index -1
    .d-info
      display flex
      align-items center
      img
        flex 0 0 100px
        width:100px
        margin-right:10px
      .i-right
        flex 1
        color:#1296DB
        h2
          color:#F35747
          font-size:20px
          font-weight 500
          margin-bottom:8px
          ellipsis(1)
        p
          margin-bottom:7px
          font-size:14px
          ellipsis(1)
  .d-desc
    padding:15px
    color:#666
    font-size:14px
    line-height 20px
.detail
  position: relative
  top:50px
</style>

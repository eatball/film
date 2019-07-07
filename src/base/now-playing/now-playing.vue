<template>
  <div class="now-box">
    <scroll :data="nowPlay" class="nowPlay" :pulldown="pulldown" @pulldown="loadData">
        <ul class="now-playing">
          <loading v-if="!nowPlay.length>0"></loading>
          <li class="item" v-for="(item,index) in nowPlay" @tap="handleToDetail">
            <img :src="item.img | setWH('100.140')" alt="">
            <div class="item-info">
              <h2 class="name"><span>{{item.nm}}</span> <i v-if="item.version" class="iconfont icon-3DIMAX"></i></h2>
              <p>观众评<span class="info-score"> {{item.sc}}</span></p>
              <p>主演：{{item.star}}</p>
              <p>{{item.showInfo}}</p>
            </div>
            <p class="pay">
              <span>购票</span>
            </p>
          </li>
        </ul>
    </scroll>

  </div>


</template>

<script>
  import Scroll from "../scroll/scroll";
  import Loading from "../../loading";
  const ERR_OK = 'ok'
    export default {
      name: "now-playing",
      components: {Loading, Scroll},
      data() {
        return {
          nowPlay:[],
          pulldown:true,
          prevCityId:-1
        }
      },
      activated() {

        let cityId = this.$store.state.city.id

        if( this.prevCityId === cityId )return
        this.nowPlay = []
        this.axios.get('api/movieOnInfoList?cityId='+cityId).then((res)=>{
          if( res.data.msg === ERR_OK ){
            this.nowPlay = res.data.data.movieList
            this.prevCityId = cityId
          }

        })
      },
      methods:{
        handleToDetail(){
          console.log(1)
        },
        loadData(){
          console.log(111)
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
.now-box
  position: fixed;
  top: 100px;
  width: 100%;
  bottom: 46px;
.nowPlay
  height: 100%
  overflow hidden
  position: relative
.now-playing
  padding:10px
  .item
    display flex
    align-items center
    height:120px
    margin:10px 0
    border-bottom:1px solid #eee
    padding:5px 0 15px
    img
      flex 0 0 100px
      width:100px
      height:120px
    .item-info
      flex 1
      color:#666
      font-size 14px;
      margin:0 5px 0 10px
      .name
        color:#333
        font-size 16px
        ellipsis(1)
        span
          vertical-align middle
        i
          color:#1296db
          font-size 26px
          vertical-align middle
      .info-score
        color:#F35747
      p
        margin-top:15px
        ellipsis(1)
    .pay
      flex 0 0 50px
      width:50px
      color:#fff;
      text-align center
      span
        padding:5px 10px
        background #F35747
        border-radius 5px
        font-size:12px
</style>

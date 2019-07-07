<template>
  <div class="now-box">
    <loading v-if="!comList.length>0"></loading>
    <scroll :data="comList" class="nowPlay">
        <ul class="coming">
          <li class="item" v-for="(item, index) in comList">
            <img :src="item.img | setWH('100.140')" alt="">
            <div class="item-info">
              <h2 class="name"><span>{{item.nm}}</span> <i v-if="item.version" class="iconfont icon-3DIMAX"></i></h2>
              <p>{{item.wish}}人想看</p>
              <p>主演：{{item.star}}</p>
              <p>{{item.comingTitle}}上映</p>
            </div>
            <p class="pay">
              <span>预售</span>
            </p>
          </li>
        </ul>
    </scroll>

  </div>
</template>

<script>
  import Loading from "../../loading";
  const ERR_OK = 'ok'
    import Scroll from "../scroll/scroll";
    export default {
      name: "coming-soon",
      components: {Loading, Scroll},
      data() {
        return {
          comList:[],
          prevCityId:-1
        }
      },
      activated() {
        let cityId = this.$store.state.city.id

        if( this.prevCityId === cityId )return
        this.comList = []
        this.axios.get('api/movieComingList?cityId='+cityId).then((res)=>{
          if( res.data.msg === ERR_OK ){
            console.log(res.data);
            this.prevCityId = cityId
            this.comList = res.data.data.comingList
            console.log(this.comList)
          }

        })
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
  .coming
    padding:10px
    .item
      display flex
      align-items center
      height:120px
      margin:10px 0 15px
      border-bottom:1px solid #eee
      padding:10px 0 20px
      img
        flex 0 0 100px
        width:100px
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
          background #3798E4
          border-radius 5px
          font-size:12px
</style>

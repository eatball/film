<template>
    <div class="open-box" ref="openBox">
      <div class="open">
        <div class="title">是否切换定位</div>
        <div class="city">{{cityInfo.nm}}</div>
        <div class="btn">
          <span class="btn1" @click="cancel()">取消</span>
          <span class="btn2" @click="ok()">确定</span>
        </div>
      </div>
    </div>
</template>

<script>
  const body = document.getElementsByTagName('body')[0];
  export default {
    name: "open-box",
    props:{
      cityInfo:{
        type:Object,
        default:{}
      }
    },
    data() {
        return {}
    },
    methods:{
      cancel(){
        this.$refs.openBox.parentNode.removeChild(this.$refs.openBox)
      },
      ok(){
        window.localStorage.setItem('cityName',this.cityInfo.nm)
        window.localStorage.setItem('cityId',this.cityInfo.id)
        this.$refs.openBox.parentNode.removeChild(this.$refs.openBox)
        window.location.reload()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .open-box
    position: fixed
    top:0
    left:0
    width: 100%
    height: 100%
    background rgba(0,0,0,.5)
    .open
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
      margin:auto;
      width: 50%
      max-width 500px
      border-radius 10px
      background #fff
      height:138px
      overflow hidden
      .title
        height:40px
        line-height 40px;
        color:#666;
        text-align center
        font-size 14px
        border-bottom:1px solid #eee;
      .city
        height:60px;
        line-height 60px
        color:#333;
        font-size:14px;
        text-align center
        border-bottom:1px solid #eee
      .btn
        height:35px;
        line-height 35px
        font-size:14px
        display flex
        border-bottom:1px solid #eee
        span
          flex 1
          text-align center
          &.btn1
            color: #999999
            border-right:1px solid #eee
          &.btn2
            color: #186eff
</style>

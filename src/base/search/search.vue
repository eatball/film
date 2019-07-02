<template>
    <div class="search">
      <div class="s-box">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="请输入影片名进行搜索">
      </div>
      <ul class="list">
        <li class="item">
          <img src="" alt="">
          <div class="item-info">
            <h2 class="name">无名鼠辈</h2>
            <p>观众评<span class="info-score">9.2</span></p>
            <p>主演：黄渤、成龙</p>
            <p>今天55家影院放映100场</p>
          </div>
          <p class="pay">
            <span>9.3分</span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
  .search
    padding:20px
  .s-box
    width: 100%
    height:32px
    line-height 32px
    color:#333
    font-size:14px
    border 1px solid #eee
    border-radius 32px
    .icon-search
      position: absolute
      right: 30px
      font-size 20px
    input
      border none
      outline none
      display inline-block
      width: calc(100%-15px)
      height: 100%
      background transparent
      padding-left:15px
  .item
    display flex
    align-items center
    height:120px
    margin-bottom:5px
    border-bottom:1px solid #eee
    img
      flex 0 0 100px
      width:100px
    .item-info
      flex 1
      color:#666
      font-size 14px;
      margin:0 5px
      .name
        color:#333
        font-size 16px
        ellipsis(1)
      p
        margin-top:10px
        ellipsis(1)
    .pay
      flex 0 0 50px
      width:50px
      color:#F35747;
      text-align center
      span
        font-size:14px
</style>

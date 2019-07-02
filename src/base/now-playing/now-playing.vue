<template>
    <div class="now-playing">
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
            <span>购票</span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "now-playing",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
.now-playing
  padding:10px
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
      color:#fff;
      text-align center
      span
        padding:5px 10px
        background #F35747
        border-radius 5px
        font-size:12px
</style>

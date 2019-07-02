<template>
    <div class="c-list">
      <ul class="list">
        <li class="item">
          <div class="i-left">
            <p class="title">大地影院（奥东实际店）</p>
            <p class="add">金州区大连经济技术开发区金州区大连经济技术开发区</p>
            <p class="tag">
              <span>小吃</span>
              <span>折购卡</span>
              <i>29元起</i>
            </p>
          </div>
          <div class="i-right">
            143km
          </div>
        </li>
        <li class="item">
          <div class="i-left">
            <p class="title">大地影院（奥东实际店）</p>
            <p class="add">金州区大连经济技术开发区金州区大连经济技术开发区</p>
            <p class="tag">
              <span>小吃</span>
              <span>折购卡</span>
              <i>29元起</i>
            </p>
          </div>
          <div class="i-right">
            143km
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "c-list",
      data() {
        return {

        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
  .list
    padding:10px
    .item
      display flex
      align-items center
      padding:15px 10px
      border-bottom 1px solid #eee
      .i-left
        flex 1
        .title
          font-weight bold
          ellipsis(1)
        .add
          color: #666
          margin:10px 0
          ellipsis(1)
        .tag
          span
            padding:2px
            border 1px solid #FDD383
            color:#FDD383
            margin-right:5px
            font-size 10px
            border-radius 5px
          i
            font-style normal
            color:#F35747
            font-size 10px
      .i-right
        flex 0 0 80px
        width:80px
        text-align center

</style>

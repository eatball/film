<template>
    <div class="city">
      <div class="c-box">
        <div class="hot">
          <h2 class="c-title">热门城市</h2>
          <ul class="hot-city">
            <li class="hot-item">北京</li>
            <li class="hot-item">上海</li>
            <li class="hot-item">杭州</li>
            <li class="hot-item">南京</li>
            <li class="hot-item">无锡</li>
            <li class="hot-item">无锡</li>
          </ul>
        </div>
        <div class="all">
          <h2 class="c-title">A</h2>
          <ul class="all-city">
            <li class="all-item">安阳市</li>
            <li class="all-item">阿克苏市</li>
            <li class="all-item">阿拉尔县</li>
            <li class="all-item">阿克苏地区</li>
          </ul>
        </div>
        <div class="all">
          <h2 class="c-title">B</h2>
          <ul class="all-city">
            <li class="all-item">安阳市</li>
            <li class="all-item">阿克苏市</li>
            <li class="all-item">阿拉尔县</li>
            <li class="all-item">阿克苏地区</li>
          </ul>
        </div>
        <div class="all">
          <h2 class="c-title">C</h2>
          <ul class="all-city">
            <li class="all-item">安阳市</li>
            <li class="all-item">阿克苏市</li>
            <li class="all-item">阿拉尔县</li>
            <li class="all-item">阿克苏地区</li>
          </ul>
        </div>
      </div>
      <div class="city-fixed">
        <ul>
          <li class="f-item">A</li>
          <li class="f-item">B</li>
          <li class="f-item">C</li>
          <li class="f-item">D</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "city",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .city
    overflow auto
    .city-fixed
      position: fixed
      right 5px
      top:0
      height:100%
      display flex
      align-items center
      ul
        display flex
        width:20px;
        flex-wrap wrap
        justify-content center
        align-items center
        .f-item
          width:20px
          height:20px;
          text-align center
          line-height 20px
          color:#666
          font-size 12px
          cursor: pointer
  .c-title
    line-height 30px
    background: #f5f5f5;
    color: #666;
    padding:0 10px
    font-size 14px
  .hot-city
    padding: 10px
    display flex
    flex-wrap wrap
    justify-content space-around
    .hot-item
      text-align center
      width :25%
      margin:5px
      padding:5px 10px
      background #ddd;
      font-size:14px
      color:#333;
      border-radius 5px
      border 1px solid #eee
      cursor: pointer
  .all-city
    padding:0 10px
    .all-item
      line-height 40px
      border-bottom: 1px solid #eee;
      color:#333
      font-size 14px
</style>

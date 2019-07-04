<template>
    <div class="c-list">
      <scroll :data="cinemaList" class="s-list">
        <ul class="list">
          <li class="item" v-for="(item,index) in cinemaList">
            <div class="i-left">
              <p class="title">{{item.nm}}</p>
              <p class="add">{{item.addr}}</p>
              <p class="tag">
                <span v-if="card===1" v-for="(card,key) in item.tag" :class="key | formatClass">{{key | formatCrad}}</span>
                <i>{{item.sellPrice}}元起</i>
              </p>
            </div>
            <div class="i-right">
              {{item.distance}}
            </div>
          </li>
        </ul>
      </scroll>
    </div>
</template>

<script>
  import Scroll from "../scroll/scroll";
  const ERR_OK = 'ok'
  export default {
    name: "c-list",
    components: {Scroll},
    data() {
      return {
        cinemaList:[]
      }
    },
    mounted() {
      this.axios.get('api/cinemaList?cityId=10').then((res)=>{
        console.log(res);
        if( res.data.msg === ERR_OK ){
          this.cinemaList = res.data.data.cinemas
        }
      })
    },
    filters:{
      formatCrad(key){
        let data = [
          {key:'allowRefund',value:'退'},
          {key:'buyout',value:'买'},
          {key:'deal',value:'签'},
          {key:'sell',value:'咖啡'},
          {key:'snack',value:'小吃'},
          {key:'endorse',value:'折扣'},
        ]
        for (let i = 0; i < data.length ; i++) {
          if( data[i].key === key ){
            return data[i].value
          }
        }
      },
      formatClass(key){
        let data = [
          {key:'allowRefund',value:'bl'},
          {key:'buyout',value:'bl'},
          {key:'deal',value:'bl'},
          {key:'sell',value:'or'},
          {key:'snack',value:'or'},
          {key:'endorse',value:'or'}
        ]
        for (let i = 0; i < data.length ; i++) {
          if( data[i].key === key ){
            return data[i].value
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
  .c-list
    position: fixed
    top: 51px;
    width: 100%;
    bottom: 46px;
    .s-list
      position: relative
      height: 100%
      overflow hidden
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
            &.bl
              color:#f60
              border 1px solid #f60
            &.or
              color:#7283da
              border 1px solid #7283da
          i
            font-style normal
            color:#F35747
            font-size 10px
      .i-right
        flex 0 0 80px
        width:80px
        text-align center

</style>

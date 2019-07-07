<template>
    <div class="search">
      <div class="s-box">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="请输入影片名进行搜索" v-model="query">
      </div>
      <scroll :data="queryList" class="queryList">
        <ul class="list">
          <li class="item" v-for="(item,index) in queryList">
            <img :src="item.img | setWH('100.120')" alt="">
            <div class="item-info">
              <h2 class="name">{{item.nm}}</h2>
              <p>{{item.enm}}</p>
              <p>{{item.cat}}</p>
              <p>{{item.rt}}</p>
            </div>
            <p class="pay">
              <span>{{item.sc}}分</span>
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
    name: "search",
    components: {Loading, Scroll},
    data() {
      return {
        query:'',
        queryList:[],
        cityId:this.$store.state.city.id
      }
    },
    methods:{
      cancelRequest(){
        if(typeof this.source ==='function'){
          this.source('终止请求')
        }
      },
    },
    watch:{
      query(newVal){
        console.log(newVal)
        // 取消上一次请求
        this.cancelRequest();
        this.axios.get('api/searchList?cityId='+this.cityId+'&kw='+newVal,{
          cancelToken: new this.axios.CancelToken( (c) => {
            this.source = c;
          })
        }).then((res)=>{
            if( res.data.msg===ERR_OK && res.data.data.movies ){
              this.queryList = res.data.data.movies.list
            }
        }).catch((err) => {
          if (this.axios.isCancel(err)) {
            console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
  .search
    padding:20px
    position: fixed;
    top: 100px;
    width: calc(100% - 40px);
    bottom: 66px;
    .queryList
      position: relative
      height: 100%
      overflow hidden
      margin-top:10px
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
    margin:10px 0 15px
    border-bottom:1px solid #eee
    padding:10px 0 20px
    img
      flex 0 0 100px
      width:100px
      height:130px
    .item-info
      flex 1
      color:#666
      font-size 14px;
      margin:0 10px
      .name
        color:#333
        font-size 16px
        ellipsis(1)
      p
        margin-top:15px
        ellipsis(1)
    .pay
      flex 0 0 50px
      width:50px
      color:#F35747;
      text-align center
      span
        font-size:14px
</style>

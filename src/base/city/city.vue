<template>
  <div class="city-wrap">
    <loading v-if="!cityList.length>0 && !hotList.length>0"></loading>
    <scroll v-else="cityList.length>0" :data="cityList" class="city-box" ref="listview">
        <div class="c-box" ref="city_sort">
          <div class="hot">
            <h2 class="c-title">热门城市</h2>
            <ul class="hot-city">
              <li class="hot-item" v-if="index<6" v-for="(item,index) in hotList" @tap="setCity(item.nm,item.id)">{{item.nm}}</li>
            </ul>
          </div>
          <div class="all" v-for="(item,index) in cityList">
            <h2 class="c-title" ref="listGroup">{{item.index}}</h2>
            <ul class="all-city">
              <li class="all-item" @tap="setCity(city.nm,city.id)"  v-for="(city,cindex) in item.list">{{city.nm}}</li>
            </ul>
          </div>
        </div>
        <div class="city-fixed">
          <ul>
            <li class="f-item" :class="{'on':currentIndex===index}" v-for="(item,index) in cityList" @touchstart="tocity(index)">{{item.index}}</li>
          </ul>
        </div>

    </scroll>
  </div>


</template>

<script>
  import Scroll from "../scroll/scroll";
  import Loading from "../../loading";
  const ERR_OK = 'ok';
  export default {
    name: "city",
    components: {Loading, Scroll},
    data() {
      return {
        hotList:[],
        cityList:[],
        currentIndex:0
      }
    },
    mounted() {

      let cityList = window.localStorage.getItem('cityList');
      let hotList = window.localStorage.getItem('hotList');

      if( cityList && hotList ){
        this.hotList = JSON.parse(hotList)
        this.cityList = JSON.parse(cityList)
      }else {
        this.axios.get('api/cityList').then((res)=>{
          if( res.data.msg === ERR_OK ){
            let data = res.data.data.cities
            this.formatCityList(data)
          }
        })
      }


    },
    methods:{
      formatCityList(citys){
        let cityList = []
        let hotList = []
        //检索热门城市
        citys.forEach((item,index)=>{
          if( item.isHot === 1 ){
            hotList.push(item)
          }
        })
        console.log(hotList);
        //城市数据打包
        for (let i = 0;  i<citys.length ; i++) {
          var firstLetter = citys[i].py.substring(0,1).toUpperCase()
          if( toCom(firstLetter) ){ //新添加index
            cityList.push({index:firstLetter,list:[{nm:citys[i].nm,id:citys[i].id}]})
          }else{ //累加到已有index中
            cityList.forEach((item)=>{
              if( item.index === firstLetter ){
                item.list.push({nm:citys[i].nm,id:citys[i].id})
              }
            })
          }
        }
        function toCom(firstLetter) {
          for (let i = 0; i <cityList.length ; i++) {
            if( cityList[i].index === firstLetter ){
              return false
            }
          }
          return true
        }

        cityList.sort((a,b)=>{
          if( a.index > b.index ){
            return 1
          }else if( a.index < b.index ){
            return -1
          }else {
            return 0
          }
        })
        console.log(cityList)
        this.cityList = cityList
        this.hotList = hotList
        window.localStorage.setItem('cityList',JSON.stringify(cityList))
        window.localStorage.setItem('hotList',JSON.stringify(hotList))
      },
      tocity(index){
        var h2 = this.$refs.city_sort.getElementsByTagName('h2')
        window.scrollTop = h2[index].offsetTop
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
        this.currentIndex = index
      },
      setCity(nm,id){
        this.$store.commit('CITY_INFO',{nm,id})
        this.$router.push('/Movie/nowPlaying')
        window.localStorage.setItem('cityName',nm)
        window.localStorage.setItem('cityId',id)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .city-wrap
    position: fixed
    top:100px
    width: 100%
    bottom: 46px
  .city-box
    height: 100%
    overflow: hidden
    position: relative

    .city-fixed
      position: absolute
      right 5px
      top:50%
      display flex
      align-items center
      transform: translateY(-50%);
      z-index 99
      font-family: Helvetica;
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
          &.on
            color:#F35747
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

<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from "./base/m-footer/m-footer";
export default {
  name: 'App',
  components:{
    MFooter
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "common/css/index.styl"



</style>

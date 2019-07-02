<template>
  <div>
    <m-header title="喵喵影院"></m-header>
    <c-list></c-list>
  </div>
</template>

<script>

  import MHeader from "../../base/m-header/m-header";
  import CList from "../../base/c-list/c-list";

  export default {
    name: "cinema",
    components: {CList, MHeader},
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

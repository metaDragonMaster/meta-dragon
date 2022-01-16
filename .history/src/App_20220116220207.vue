<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
  mounted() {
    // let u = navigator.userAgent;
    // let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
    // let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    // if (isAndroid || isIOS) {
    //   this.setIsPc(false);
    // }
    // console.log(isAndroid || isIOS)
    this.watchPcOrPh();
  },
  methods: {
    ...mapActions({ setIsPc: 'setIsPc' }),
  },
  methods: {
    watchPcOrPh() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isAndroid || isIOS) {
        this.setIsPc(false);
      }
    }
  }

}
</script>
<style lang="scss">
@import "@/styles/index.scss";
</style>
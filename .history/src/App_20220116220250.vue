<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
  mounted() {
    this.watchPcOrPh()
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
        this.$nextTick(()=>this.setIsPc(false))
      }
    }
  }

}
</script>
<style lang="scss">
@import "@/styles/index.scss";
</style>
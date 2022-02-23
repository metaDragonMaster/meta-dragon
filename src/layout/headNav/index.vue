<template>
  <div class="head-nav" :class="[theme]">
    <img class="head-nav-icon" src="@/assets/head-nav/head-nav-icon.png" alt />
    <nav>
      <ul>
        <li
          v-for="item in filterNavList"
          :key="item.path"
          :class="{ active: activeRoute(item.path) }"
          @click="toRoute(item)"
        >
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <!-- <div class="link-wallet font-hide" @click="$emit('btnClick')">
        {{ ethAddress }}
      </div>-->
      <linkWallet :options="filterNavListToLinkWallet"></linkWallet>
      <!-- <div class="link-wallet font-hide" @click="setI18nType">{{i18nType}}</div> -->
      <i18nChange></i18nChange>
    </nav>
  </div>
</template>

<script>
import Hbg from "@/assets/head-nav/hbg.png";
import HbgWhite from "@/assets/head-nav/hbg-white.png";
import { mapGetters } from "vuex";

import i18nChange from "@/components/i18nChange.vue";
import linkWallet from "@/components/linkWallet.vue";
export default {
  data() {
    return {
      openNav: false,
    };
  },
  components: {
    i18nChange,
    linkWallet,
  },
  props: {
    navList: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    ...mapGetters({
      theme: "theme",
      web3Provider: "web3Provider",
      i18nType: "i18nType",
      currentRoutePath:'currentRoutePath'
    }),
    hbgIcon() {
      return this.$route.path == "/homepage" ? Hbg : HbgWhite;
    },
    activeRoute() {
      return (path) => this.currentRoutePath.indexOf(path) > -1
    },
    filterboundary() {
      return 4
    },
    filterNavList() {
      // console.log(filter)
      return this.navList.filter((item, index) => index < this.filterboundary);
    },
    filterNavListToLinkWallet() {
      // console.log(filter)
      return this.navList.filter((item, index) => index >= this.filterboundary);
    },
  },
  methods: {
    changeOpenNav() {
      if (!this.web3Provider) return;
      this.openNav = !this.openNav;
    },
    toRoute({ path }) {
      if (!this.web3Provider) return;
      this.$routerUtil.toPath(path);
    },
    // activeRoute(path) {
    //   console.log(this.currentRoutePath,path);
    //   let active = this.currentRoutePath.indexOf(path) > -1;
    //   console.log(active)
    //   return active;
    // },
  },
};
</script>

<style lang="scss" scoped="scoped">
@import "@/styles/theme.scss";
.head-nav {
  display: flex;
  height: 100px;
  z-index: 999;
  padding: 0 calc((100% - 1660px) / 2);
  &.transparent {
    background-color: rgba($color: #ffffff, $alpha: 0.2);
  }
  &.dark {
    background-color: rgba($color: #000000, $alpha: 0.2);
    color: #ffffff;
  }
  .head-nav-icon {
    padding: 18px 0 0 0;
  }
  nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    position: relative;
    ul {
      display: flex;
      li {
        font-weight: 900;

        line-height: 100px;
        font-size: 14px;
        position: relative;
        padding: 0 30px;
        cursor: pointer;
      }
      li.active:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        @include GradualBoxShadow;
        @include GradualBGColor;
      }
    }
    @media screen and (max-width: 1344px) {
      ul {
        li {
          font-size: 14px;
          padding: 0 10px;
        }
      }
    }
  }
  // .link-wallet {
  //   height: 65px;
  //   line-height: 65px;
  //   width: 214px;
  //   border-radius: 12px;
  //   padding: 0 10px 0;
  //   color: #ffffff;
  //   margin-right: 20px;
  //   margin-left: 40px;
  //   text-align: center;
  //   @include GradualBGColor;
  //   @media screen and (max-width: 1344px) {
  //     height: 48px;
  //     line-height: 48px;
  //     width: 168px;
  //     margin-left: 20px;
  //   }
  // }
}
</style>

<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar";

export default {
  components: { MainTabBar },
  name: "App",
};
</script>

<style>
@import "assets/css/base.css";
/* @import "assets/iconfont/iconfont.css"; */
/* 在线iconfont图标 */
@import "//at.alicdn.com/t/font_2291772_4ag9jfhj6jd.css";
</style>

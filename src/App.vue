<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'

export default {
  components: { MainTabBar },
  name: 'App'  
}
</script>

<style>
  @import 'assets/css/base.css';
  @import "assets/iconfont/iconfont.css";
</style>

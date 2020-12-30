<template>
  <div class="tabBar-wrapper">
    <div class="wrapper">
      <tab-bar-item
        v-for="item in barItems"
        :key="item.text"
        :text="item.text"
        :path="item.path"
        :itemStyle="itemStyle"
      >
        <!-- 普通未点击的图标 -->
        <template v-slot:item-icon>
          <i :class="item.normalIconClass"></i>
        </template>

        <!-- 点击状态的图标 -->
        <template v-slot:item-icon-active>
          <i :class="item.activeIconClass"></i>
        </template>
      </tab-bar-item>
    </div>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "TabBar",
  props: {
    barItems: {
      type: Array,
    },
    itemStyle: {
      type: Object,
    },
  },
  components: {
    TabBarItem,
  },
};
</script>

<style>
.tabBar-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  padding-bottom: 5px;
  background: #fff;
  box-shadow: 0 -1px 18px rgba(97, 91, 91, 0.1);
}

.wrapper {
  width: 100%;
  height: 100%;
  border-top: 1px solid #eee;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* font-size: 0; */
}
</style>

<template>
  <div>
    <tab-bar :barItems="barItems"></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
  },
  data() {
    return {
      barItems: [
        {
          text: "首页",
          path: "/home",
          normalIconClass: "iconfont icon-tabbarhome",
          activeIconClass: "iconfont icon-tabbarhomeselect",
        },
        {
          text: "分类",
          path: "/category",
          normalIconClass: "iconfont icon-tabbar-icon-chanpin-default",
          activeIconClass: "iconfont icon-tabbar-icon-chanpin-selected",
        },
        {
          text: "购物车",
          path: "/shopcart",
          normalIconClass: "iconfont icon-TABbar",
          activeIconClass: "iconfont icon-TABbar-fill1",
        },
        {
          text: "我的",
          path: "/profile",
          normalIconClass: "iconfont icon-TABbar1",
          activeIconClass: "iconfont icon-TABbar-fill",
        },
      ],
      // itemStyle: {
      //   normalIconColor: "cyan",
      //   activeIconColor: "red",
      //   textColor: "green",
      // },
    };
  },
};
</script>

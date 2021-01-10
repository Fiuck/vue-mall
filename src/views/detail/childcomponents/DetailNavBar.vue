<template>
  <div class="detail-navbar-wrapper">
    <nav-bar>
      <template #nav-bar-left>
        <div @click="backHome">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template #nav-bar-center>
        <div class="detail-title-wrapper">
          <div
            v-for="(item, index) in titles"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    // 标题点击切换
    titleClick(index) {
      this.currentIndex = index;
    },
    // 后退
    backHome() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail-navbar-wrapper .nav-bar-left img {
  padding-top: 18px;
  width: 16px;
}
.detail-title-wrapper {
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
</style>

<template>
  <div class="recommend-wrapper">
    <div class="recommend-item" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
        <!-- <div>{{ item.title }}</div> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  /* flex: 1; */
  text-align: center;
}
.recommend-item img {
  width: 70px;
  margin-top: 10px;
}
.recommend-item span {
  display: block;
}
</style>

<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <!-- <grid-view> -->
    <div class="recommend-goods-wrapper">
      <goods-item
        v-for="(item, index) in recommendList"
        :key="index"
        :goodsItem="item"
      ></goods-item>
    </div>
    <!-- </grid-view> -->
  </div>
</template>

<script>
// import GridView from "common/gridView/GridView";
import GoodsItem from "components/content/goods/GoodsItem";

export default {
  name: "DetailRecommendInfo",
  components: {
    // GridView,
    GoodsItem,
  },
  props: {
    recommendList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.recommend-info {
  padding: 5px;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
.recommend-goods-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>

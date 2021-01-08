<template>
  <div class="goods-wrap">
    <goods-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goodsItem="item"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "components/content/goods/GoodsItem";
export default {
  name: "GoodsWrapper",
  components: {
    GoodsItem,
  },
  props: {
    goodsList: {
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
.goods-wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>

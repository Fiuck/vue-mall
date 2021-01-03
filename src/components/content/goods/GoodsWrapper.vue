<template>
  <div>
    <goods-item
      v-for="item in goodsList"
      :key="item.link"
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

<style scoped></style>

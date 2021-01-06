<template>
  <div class="goods-item-wrapper">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-price">{{ goodsItem.price }}</span>
      <span class="goods-collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.goods-item-wrapper {
  padding-left: 10px;
  padding-bottom: 40px;
  position: relative;
  width: 50%;
}
.goods-item-wrapper img {
  width: 100%;
}
.goods-info {
  overflow: hidden;
  text-align: center;
  /* position: absolute; */
  /* bottom: 5px; */
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-bottom: 5px;
  display: block;
  height: 40px;
}
</style>

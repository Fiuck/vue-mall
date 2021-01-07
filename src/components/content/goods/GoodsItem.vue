<template>
  <div class="goods-item-wrapper">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <div class="goods-title">
        <p>{{ goodsItem.title }}</p>
      </div>
      <span class="goods-price">{{ goodsItem.price }}</span>
      <span class="goods-collect">{{ fav }}</span>
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
  computed: {
    fav() {
      return this.goodsItem.cfav + "人收藏";
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.goods-item-wrapper {
  width: 45%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(97, 91, 91, 0.2);
  margin-bottom: 15px;
}
.goods-item-wrapper img {
  width: 100%;
}
.goods-info {
  padding-top: 5px;
}
.goods-title {
  padding-left: 10px;
  padding-right: 10px;
}
.goods-title p {
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-price {
  position: relative;
  padding-left: 22px;
  color: red;
  font-size: 20px;
  line-height: 3;
}
.goods-price::after {
  content: "￥";
  position: absolute;
  top: -9px;
  left: 9px;
  font-size: 14px;
}
.goods-collect {
  font-size: 12px;
  color: grey;
  padding-left: 20px;
}
</style>

<template>
  <div class="detail-base-info-wrapper" v-if="Object.keys(goods).length">
    <div class="detail-base-info-title">{{ goods.title }}</div>
    <div class="detail-base-info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="detail-base-info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
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
.detail-base-info-wrapper {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.detail-base-info-title {
  color: #222;
}
.detail-base-info-price {
  margin-top: 10px;
}
.detail-base-info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.detail-base-info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.detail-base-info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  margin-left: 5px;
  /* border-radius: 8px; */
  position: relative;
  top: -2px;
}
.detail-base-info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
</style>

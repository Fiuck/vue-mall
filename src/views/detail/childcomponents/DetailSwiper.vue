<template>
  <div>
    <swiper class="detail-swiper" v-if="topImages.length">
      <swiper-item
        v-for="(item, index) in topImages"
        class="detail-swiper-item"
        :key="index"
      >
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* .detail-swiper {
  height: 300px;
} */
.detail-swiper-item {
  height: 300px;
}
</style>

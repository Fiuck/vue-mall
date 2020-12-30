<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    isShow() {
      return this.selected === this.name;
    },
  },
};
</script>

<style scoped></style>

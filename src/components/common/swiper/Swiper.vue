<template>
  <div class="swiper-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      names: [],
      itemLen: 0,
      curSelected: "",
    };
  },
  mounted() {
    // this.names = this.$children.map((children) => children.name);
    // this.names = this.$refs.swiper
    this.itemLen = this.names.length;
    this.showChildren();
  },
  methods: {
    showChildren() {
      this.curSelected = this.value || this.names[0];
      this.$children.forEach((res) => {
        res.selected = this.curSelected;
      });
    },
  },
};
</script>

<style scoped>
.swiper-wrapper {
  position: relative;
  overflow: hidden;
  height: 145px;
  width: 100%;
}
</style>

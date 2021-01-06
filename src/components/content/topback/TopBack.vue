<template>
  <div class="top-back" @click="toTop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "TopBack",
  methods: {
    toTop() {
      this.$emit("backTop");
    },
  },
};
</script>

<style scoped>
.top-back {
  position: absolute;
  bottom: 57px;
  right: 8px;
}
.top-back img {
  width: 48px;
}
</style>

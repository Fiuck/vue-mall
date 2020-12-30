<template>
  <div class="item-wrapper" @click="btnClick">
    <span v-if="!isActive" :style="normalColor">
      <slot name="item-icon"></slot>
    </span>
    <span v-else :style="activeColor">
      <slot name="item-icon-active"></slot>
    </span>
    <span :style="textColor">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    text: {
      type: String,
    },
    path: {
      type: String,
    },
    itemStyle: {
      type: Object,
      default() {
        return {
          textColor: "#000",
          normalIconColor: "#000",
          activeIconColor: "tomato",
        };
      },
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    normalColor() {
      return { color: this.itemStyle.normalIconColor };
    },
    activeColor() {
      return { color: this.itemStyle.activeIconColor };
    },
    textColor() {
      return { color: this.itemStyle.textColor };
    },
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.item-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
.item-wrapper span {
  font-size: 13px;
}
.item-wrapper span i {
  font-size: 22px;
}
</style>

<template>
  <div class="tab-wrapper">
    <div
      class="tab-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.tab-wrapper {
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
}
.tab-item span {
  padding-bottom: 5px;
}

.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>

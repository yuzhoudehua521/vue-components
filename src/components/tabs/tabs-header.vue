<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TTabsHeader",
  //注入（订阅）事件中心, 所有后代都可以订阅
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("updateSelected", (item, vm) => {});
  },
  mounted() {
    this.eventBus.$on("updateSelected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - 21}px`;
    });
  },
};
</script>

<style lang='scss' scoped>
$tab-height: 40px;
.tabs-header {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border: 1px solid red;
  position: relative;
  border-bottom: 1px solid #ddd;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    transition: all 0.3s;
  }
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>
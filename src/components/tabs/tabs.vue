<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "TTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "row",
      validator(value) {
        return ["row", "col"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  //创造事件中心
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "TTabsHeader") {
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "TTabsItem" &&
            childVm.name === this.selected
          ) {
            // console.log(childVm);
            this.eventBus.$emit("updateSelected", this.selected, childVm);
          }
        });
      }
    });
  },
};
</script>

<style lang='scss' scoped>
.tabs {
}
</style>
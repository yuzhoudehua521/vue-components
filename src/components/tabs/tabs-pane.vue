<template>
  <div class="tabs-pane" :class="paneClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TTabsPane",
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: String | Number,
      default: false,
    },
  },
  inject: ["eventBus"],
  computed: {
    paneClass() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on("updateSelected", (name, vm) => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
};
</script>

<style lang='scss' scoped>
.tabs-pane {
}
.active {
  background: #ccc;
}
</style>
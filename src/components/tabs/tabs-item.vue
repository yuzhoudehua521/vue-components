<template>
  <div class="tabs-item" @click="onClick" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TTabsItem",
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      default: false,
    },
  },
  inject: ["eventBus"],
  computed: {
    itemClass() {
      return {
        active: this.active,
        disabled: this.disabled,
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
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("updateSelected", this.name, this);
    },
  },
};
</script>

<style lang='scss' scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
.active {
  font-weight: bold;
  color: blue;
}
.disabled {
  color: grey;
  cursor: not-allowed;
}
</style>
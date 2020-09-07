<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "center", "right"].includes(value);
      },
    },
  },
  computed: {
    rowStyle() {
      marginLeft: -this.gutter / 2 + "px";
      marginRight: -this.gutter / 2 + "px";
    },
    rowClass() {
      let align = this.align;
      if (align) {
        return `row-${align}`;
      }
    },
  },
  created() {
    //没有儿子, var div = document.createElement('div')
    //父子组件，先创建父组件，然后子组件创建，子组件挂载父组件，父组件最后挂载
    console.log(this.$children);
  },
  mounted() {
    //有儿子, document.appendChild(div)
    console.log(this.$children);
    this.$children.forEach((vm) => {
      //父组件直接传值给每一个子组件
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style lang='scss' scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &-left {
    justify-content: flex-start;
  }
  &-center {
    justify-content: center;
  }
  &-right {
    justify-content: flex-end;
  }
}
</style>
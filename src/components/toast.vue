<template>
  <div class="toast" ref="toast" :class="toastClass">
    <slot></slot>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
//export default是构造组件的各种属性和方法，其中对象属性（data，{}等）必须return（深拷贝），保证各个组件之间的对象相互不影响
export default {
  name: "TToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 10000,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    position: {
      type: String,
      default: "top",
      //验证才通过
      validator(value) {
        return ["top", "buttom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    toastClass() {
      let a = `position-${this.position}`;
      return a;
    },
  },
  mounted() {
    this.updateStyle();
    this.AuClose();
  },
  methods: {
    close() {
      this.$el.remove();
      // $emit(eventName) 触发事件 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    },
    AuClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay);
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        //线的高度等于行的高度
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: $toast-min-height;
  position: fixed;
  display: flex;
  left: 50%;

  background: $toast-bg;
  color: white;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .close {
    padding-left: 16px;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1px;
  }
  &.position-buttom {
    bottom: 0;
    transform: translateX(-50%);
    border-bottom-left-radius: 1px;
    border-bottom-left-radius: 1px;
  }
}
</style> 
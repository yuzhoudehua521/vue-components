<template>
  <!-- 动画 -->
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TSider",
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.sider {
  background: #333;
  width: 200px;
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -200px;
}
</style>
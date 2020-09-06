<template>
  <div id="app">
    <button @click="clickTo">点击</button>
    <t-button iconname="icon-xia" v-show="show" @click="show = !show">设置</t-button>
    <t-button iconname="icon-dianzan" icon-position ref="child">点赞</t-button>
    <t-button iconname="icon-shezhi" icon-position></t-button>
    <t-button iconname="icon-zuo" icon-position></t-button>

    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-dianzan" />
    </svg>

    <t-button-group>
      <t-button iconname="icon-zuo">上一页</t-button>
      <t-button>更多</t-button>
      <t-button iconname="icon-you" icon-position="right">下一页</t-button>
    </t-button-group>

    <t-input value="李四" @change="inputChange"></t-input>
    <t-input value="张三" disabled></t-input>
    <t-input value="李四"></t-input>
    <t-input value="李四" error="至少2个字符"></t-input>
    <t-input v-model="msg"></t-input>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true,
      msg: "数据双向绑定",
    };
  },
  methods: {
    clickTo() {
      this.$refs.child.clickChildren();
    },
    inputChange(e) {
      console.log(e.target.value);
    },
  },
};
</script>

<style lang="scss"></style>

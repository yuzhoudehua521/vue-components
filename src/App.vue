<template>
  <div id="app">
    <!-- button -->
    <!-- <button @click="clickTo">点击</button>
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
    </t-button-group>-->

    <!-- input -->
    <!-- <t-input value="李四" @change="inputChange"></t-input>
    <t-input value="张三" disabled></t-input>
    <t-input value="李四"></t-input>
    <t-input value="李四" error="至少2个字符"></t-input>
    <t-input v-model="msg"></t-input>
    <p>{{msg}}</p>-->

    <!-- <t-row>
      <t-col span="22">1</t-col>
      <t-col span="2">2</t-col>
    </t-row>
    <t-row>
      <t-col span="5" offset="1">1</t-col>
      <t-col span="10">2</t-col>
      <t-col span="5">3</t-col>
    </t-row>
    <t-row gutter="40">
      <t-col>1</t-col>
      <t-col span="15">2</t-col>
    </t-row>

    <t-row class="topbar">
      <t-col span="9">
        <t-row align="center">
          <t-col>1</t-col>
          <t-col>2</t-col>
          <t-col>3</t-col>
          <t-col>4</t-col>
        </t-row>
      </t-col>
      <t-col span="15"></t-col>
    </t-row>

    <t-row>
      <t-col span="10" :phone="{span:8}" :ipad="{span:4}">1</t-col>
      <t-col span="10" :phone="{span:8}" :ipad="{span:10}">2</t-col>
      <t-col span="4" :phone="{span:8}" :ipad="{span:10}">3</t-col>
    </t-row>-->

    <!-- layout -->
    <!-- <t-layout>
      <t-header>header</t-header>
      <t-content>content</t-content>
      <t-footer>footer</t-footer>
    </t-layout>

    <t-layout>
      <t-header>header</t-header>
      <t-layout>
        <t-sider>sider</t-sider>
        <t-content>content</t-content>
      </t-layout>
      <t-footer>footer</t-footer>
    </t-layout>

    <t-layout>
      <t-sider>sider</t-sider>
      <t-layout>
        <t-header>header</t-header>
        <t-content>content</t-content>
        <t-footer>footer</t-footer>
      </t-layout>
    </t-layout>-->

    <button @click="showToast">点我</button>

    <t-tabs :selected.sync="selectedTab">
      <t-tabs-header>
        <t-tabs-item name="woman" disabled>美女</t-tabs-item>
        <t-tabs-item name="finance">财经</t-tabs-item>
        <t-tabs-item name="sports">体育</t-tabs-item>
      </t-tabs-header>
      <t-tabs-body>
        <t-tabs-pane name="woman">美女美女美女</t-tabs-pane>
        <t-tabs-pane name="finance">财经财经财经</t-tabs-pane>
        <t-tabs-pane name="sports">体育体育体育</t-tabs-pane>
      </t-tabs-body>
    </t-tabs>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true,
      msg: "数据双向绑定",
      selectedTab: "sports",
    };
  },
  methods: {
    clickTo() {
      this.$refs.child.clickChildren();
    },
    inputChange(e) {
      console.log(e.target.value);
    },
    //使用toast组件
    showToast() {
      this.$toast("toast插件被调用了toast插件被调用了toast插件被调用了", {
        position: "middle",
      });
    },
  },
};
</script>

<style lang="scss"></style>

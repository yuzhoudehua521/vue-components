import Vue from "vue";
import App from "./App.vue";

//全局使用组件
import Icon from "./assets/fonts/fonts";
import Button from "./components/button.vue";
import ButtonGroup from "./components/button-group.vue";
import Input from "./components/input.vue";
import Col from "./components/col.vue";
import Row from "./components/row.vue";
import Layout from "./components/layout/layout.vue";
import Header from "./components/layout/header.vue";
import Content from "./components/layout/content.vue";
import Sider from "./components/layout/sider.vue";
import Footer from "./components/layout/footer.vue";
import Toast from "./components/toast.vue";
import Tabs from "./components/tabs/tabs.vue";
import TabsHeader from "./components/tabs/tabs-header.vue";
import TabsBody from "./components/tabs/tabs-body.vue";
import TabsPane from "./components/tabs/tabs-pane.vue";
import TabsItem from "./components/tabs/tabs-item.vue";

Vue.component("t-icon", Icon);
Vue.component("t-button", Button);
Vue.component("t-button-group", ButtonGroup);
Vue.component("t-input", Input);
Vue.component("t-col", Col);
Vue.component("t-row", Row);
Vue.component("t-layout", Layout);
Vue.component("t-header", Header);
Vue.component("t-content", Content);
Vue.component("t-sider", Sider);
Vue.component("t-footer", Footer);
Vue.component("t-toast", Toast);
Vue.component("t-tabs", Tabs);
Vue.component("t-tabs-header", TabsHeader);
Vue.component("t-tabs-body", TabsBody);
Vue.component("t-tabs-pane", TabsPane);
Vue.component("t-tabs-item", TabsItem);

// 插件使用
import plugin from "./plug/plug";
Vue.use(plugin);

import "./assets/fonts/fonts.css";
import "./assets/styles/style.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

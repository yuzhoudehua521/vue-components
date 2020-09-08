import Toast from "../components/toast.vue";

let currentToast;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }

      currentToast = createToast({
        Vue,
        message,
        toastOptions,
        onClose: () => {
          currentToast = null;
        },
      });
    };
  },
};

function createToast({ Vue, message, toastOptions, onClose }) {
  //生产toast组件放到body里面
  let Constructor = Vue.extend(Toast);
  //构造toast默认内容和回调函数
  let toast = new Constructor({
    // propsData 主要用于传值，在扩展里需要接收，需用 props接收
    propsData: toastOptions,
  });

  toast.$slots.default = [message];
  toast.$mount();
  // $on(eventName) 监听事件
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}

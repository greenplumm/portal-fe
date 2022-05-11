import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';
import create from './utils/create';
import './icons';
import './index.less';
import { SCAFFOLDING_NAME, FLOW_DESIGN_NAME } from './utils/constants';

Vue.config.productionTip = false;

// 事件总线
Vue.prototype.$bus = new Vue();
// Vue.prototype.$create = create
Vue.use(create);

function vueRender({ loading, isIFrame, apps }) {
  const props = { loading, isIFrame, apps };
  return new Vue({
    router,
    store,
    render: (h) => h(App, { props }),
    el: '#app',
    data() {
      return {
        loading
      };
    }
  });
}

let app = null;

function render({ loading, isIFrame, apps }) {
  if (!app) {
    app = vueRender({ loading, isIFrame, apps });
  } else {
    app.loading = loading;
  }
}
// 列表应用 一期硬编码
const apps = [
  {
    name: FLOW_DESIGN_NAME,
    entry: '//localhost:8081',
    container: `#${FLOW_DESIGN_NAME}`,
    // 给子项目传递参数
    props: {
      permissions: [],
      userName: 'root'
    }
  },
  {
    name: SCAFFOLDING_NAME,
    entry: '//localhost:7101',
    container: `#${SCAFFOLDING_NAME}`
  }
];

render({ loading: true, isIFrame: true, apps });

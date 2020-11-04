import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/common.css'
import router from './router'
import store from './store'
Vue.use(Antd);
Vue.config.productionTip = false
Object.assign(Vue.prototype, {
    goBack: () => {
        router.go(-1);
    },
    closePage: (index) => {
        router.go(-index);
    },
    pushPath: (path) => {
        router.push(path);
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
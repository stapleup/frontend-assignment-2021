import Vue from 'vue'
import App from './App.vue'
import Api from './Api'

Vue.config.productionTip = false

Vue.mixin({
    data: function () {
        return {
            api: new Api(),
        }
    },
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')

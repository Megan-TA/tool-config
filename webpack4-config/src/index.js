import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/about',
        component: About
    }]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
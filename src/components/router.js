import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import About from './about'
import Articles from './articles'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/articles', component: Articles},
        {path: '/about', component: About}
        
    ]
})

export default router
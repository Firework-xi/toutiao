import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import My from '@/components/my/my.vue'
import shouye from '@/components/shouye/shouye.vue'
import wenda from '@/components/wenda/wenda.vue'
import shipin from '@/components/shipin/shipin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/shouye',
    children: [
      { path: '/shouye', name: 'shouye', component: shouye },
      { path: '/my', name: 'my', component: My },
      { path: '/wenda', name: 'wenda', component: wenda },
      { path: '/shipin', name: 'shipin', component: shipin }
    ]
  },
  { path: '/login', component: Login } // children: [{ path: '/login', component: Login }]
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

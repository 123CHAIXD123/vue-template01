import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

/* ———————————————————————————————————————————————————————————————————————————— */
// 写法1
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.`
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/users',
//     name: 'user-list',
//     component: () => import('@/views/user/list')
//   }
// ]
// const router = new VueRouter({
//   // 写法1
//   routes
// }
// )

/* ———————————————————————————————————————————————————————————————————————————— */
// 写法2
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.`
//       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     },
//     {
//       path: '/users',
//       name: 'user-list',
//       component: () => import('@/views/user/list')
//     }
//   ]
// })

/* ———————————————————————————————————————————————————————————————————————————— */
// 写法3模块化加载路由

let routes = []

const requireContext = require.context(
  './',
  true,
  /\.js$/
)
requireContext.keys().forEach(filename => {
  // console.log(filename)
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  routes = [...routes, ...(routerModule.default || routerModule)]
})
// console.log(routes)

const router = new VueRouter({
  routes
})
// 动态路由
router.addRoutes([
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
])

/* ———————————————————————————————————————————————————————————————————————————— */
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})
export default router

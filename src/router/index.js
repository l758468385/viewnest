// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import VideoDetail from '@/views/videoDetail/index.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'VideoDetail',
    component: VideoDetail
  },

  // {
  //   path: '/404',
  //   component: () =>
  //     import('@/components/404/index.vue'),
  //   name: '404',
  //   meta: {
  //     keepAlive: true,
  //     isTab: false,
  //     isAuth: true
  //   }

  // },

  // {
  //   path: '*',
  //   redirect: '/404'
  // },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
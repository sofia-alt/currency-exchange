import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'AppLayout',
    redirect: '/course',
    component: () => import('@/layouts/AppLayout'),
    children: [
      {
        name: 'course',
        path: '/course',
        component: () => import('../views/CourseView.vue')
      },
      {
        name: 'converter',
        path: '/converter',
        component: () => import('../views/ConverterView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

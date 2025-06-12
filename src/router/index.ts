/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layouts/MainFrame.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/components/views/Login.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/components/views/About.vue'),
      },
      {
        path: 'samplePage1',
        name: 'SamplePage1',
        component: () => import('@/components/views/SamplePage1.vue'),
      },
      {
        path: 'samplePage2',
        name: 'SamplePage2',
        component: () => import('@/components/views/SamplePage2.vue'),
      },
      {
        path: 'List',
        name: 'List',
        component: () => import('@/components/views/List.vue'),
      },
      {
        path: 'reportinput',
        name: 'ReportInput',
        component: () => import('@/components/views/ReportInput.vue'),
      },
      {
        path: 'samplePage3',
        name: 'SamplePage3',
        component: () => import('@/components/views/SamplePage3.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/components/views/Login.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

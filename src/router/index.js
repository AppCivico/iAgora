import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { hasHeader: true, hasFooter: true },
    },
    {
      path: '/about',
      name: 'about',
      meta: { hasHeader: true },
      component: () => import('@views/AboutView.vue')
    },
    {
      path: '/how-to-play',
      name: 'how-to-play',
      component: () => import('@views/HowToPlayView.vue'),
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@views/QuizView.vue')
    },
    {
      path: '/milestone/:name',
      name: 'milestone',
      component: () => import('@views/MilestoneView.vue'),
    },
    {
      path: '/congratulations',
      name: 'congratulations',
      component: () => import('@views/CongratulationsView.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      meta: { hasHeader: true },
      component: () => import('@views/PrivacyView.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router;

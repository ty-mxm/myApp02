import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/AppVersion.vue'
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Trajets.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/AjouterTrajet.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Parametres.vue')
      }
    ]
  },
  {
    path: '/login', // Chemin pour la page de connexion
    name: 'Login',
    component: Login
  },
  {
    path: '/signup', // Chemin pour la page d'inscription
    name: 'Signup',
    component: Signup
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

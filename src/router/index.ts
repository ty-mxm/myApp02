import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import App from '@/App.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login' // Redirige vers la page de connexion par défaut
  },
  {
    path: '/tabs/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/tabs/Trajets' // Redirige vers la première sous-route par défaut
      },
      {
        path: 'Trajets',
        component: () => import('@/views/Trajets.vue')
      },
      {
        path: 'AjouterTrajet',
        component: () => import('@/views/AjouterTrajet.vue')
      },
      {
        path: 'Parametres',
        component: () => import('@/views/Parametres.vue')
      },
      {
        path: 'AppVersion',
        component: () => import('@/views/AppVersion.vue')
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

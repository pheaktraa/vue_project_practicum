import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../src/pages/LandingPage.vue';
import HomePage from '../src/pages/HomePage.vue';
import Index from './pages/lip/index.vue';
import LipButter from './pages/lip/Lipbutter.vue'; // 👈 Example component
import Carddetail from './components/cardfordetail.vue';
import Lipoils from './pages/lip/Lipoils.vue';
import Lipcare from './pages/lip/lipcare.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/home', component: HomePage },
  {
    path: '/lipbutter',
    component: Index,
    children: [
      { path: '', component: LipButter },
      { path: '/lipoil', component: Lipoils},
      { path: '/lipcare', component: Lipcare},
      { path: ':id', component: Carddetail }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

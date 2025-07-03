   // src/Router.js
   import { createRouter, createWebHistory } from 'vue-router';
   import LandingPage from '../src/pages/LandingPage.vue';
   import HomePage from '../src/pages/HomePage.vue';

   const routes = [
     { path: '/', component: LandingPage },
     // Add more routes here
     { path: '/home', component: HomePage },
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

   export default router;
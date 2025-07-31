   // src/Router.js
   import { createRouter, createWebHistory } from 'vue-router';
   import LandingPage from '../src/pages/LandingPage.vue';
   import HomePage from '../src/pages/HomePage.vue';
   import LogInPage from '../src/pages/LogIn.vue';
   import SignUpPage from '../src/pages/SignUp.vue';

   const routes = [
     { path: '/', component: LandingPage },
     // Add more routes here
     { path: '/home', component: HomePage },
     { path: '/login', component: LogInPage},
     { path: '/signup', component: SignUpPage},
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

   export default router;
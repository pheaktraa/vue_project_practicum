<template>
    <div class="min-h-screen">
      <Hero />
      <ProductTypes />
      <ProductShowcase />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Hero from '../components/Hero.vue';
  import Footer from '../components/Footer.vue';
  import ProductTypes from '../components/ProductTypes.vue';
  import ProductShowcase from '../components/ProductShowcase.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Header,
      Hero,
      ProductTypes,
      ProductShowcase,
      Footer,
    },
  };
  </script>
  
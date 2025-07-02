
<template>

  <Header />
  <Hero />
  <Footer />
</template>

<script>
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';

  export default
  {
    components: {
      Header,
      Hero,
      Footer,
    },
  }
</script>
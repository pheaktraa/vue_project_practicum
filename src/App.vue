<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


export default{
  components:{
    Header,
    Footer
  },
  mounted() {
    setTimeout(() => window.HSStaticMethods.autoInit(), 100);
  },
}

</script>

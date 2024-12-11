<template>
    <router-view />
    <FooterSection />
</template>

<script>
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    FooterSection
  }
};
</script>

<style>
/* Global styles can go here if needed */
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

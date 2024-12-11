<template>
  
    <nav class="navbar px-10 p-5">
      <ul>
        <li><router-link to="/#home">Home</router-link></li>
        <li><router-link to="/#projects">Projects</router-link></li>
        <li><router-link to="/#about">About</router-link></li>
        <li><router-link to="/#contact">Contact</router-link></li>
      </ul>
    </nav>

    <div class="container mx-auto p-5">
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  
</template>

<script>
import HomeSection from '../components/HomeSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';

export default {
  name: 'MainPage',
  components: {
    HomeSection,
    ProjectsSection,
    AboutSection,
    ContactSection
  }
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: #333;
  z-index: 1000;  /* Ensure it sits above other content */
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.navbar ul li {
  display: inline;
}

.navbar a {
  color: white;
  text-decoration: none;
}

section {
  min-height: 85vh;
  padding: 2rem;
  scroll-margin-top: 100px; /* Adjust for fixed header */
}
</style>

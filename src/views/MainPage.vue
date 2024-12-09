<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/#home">Home</router-link></li>
        <li><router-link to="/#projects">Projects</router-link></li>
        <li><router-link to="/#about">About</router-link></li>
        <li><router-link to="/#contact">Contact</router-link></li>
      </ul>
    </nav>

    <div class="container mx-auto px-10 p-5">
    <HomeSection />

    <section id="projects">
      <h1>Projects</h1>
      <p>Here are my web development projects.</p>
    </section>

    <section id="about">
      <h1>About Me</h1>
      <p>Learn about my background, skills, and experience.</p>
    </section>

    <section id="contact">
      <h1>Contact Me</h1>
      <p>Get in touch via this form.</p>
    </section>
    </div>
  </div>
</template>

<script>
import HomeSection from '../components/HomeSection.vue';

export default {
  name: 'MainPage',
  components: {
    HomeSection
  }
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: #333;
  z-index: 1000;  /* Ensure it sits above other content */
  padding: 10px;
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
  min-height: 100vh;
  padding: 2rem;
  scroll-margin-top: 100px; /* Adjust for fixed header */
}
</style>

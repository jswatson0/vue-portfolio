<template>
  <section id="home">
  <h1>Jason Watson | Web Developer</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="home-copy">
        <p>
          I'm a seasoned web developer with 10 years of experience in higher education, specializing in WordPress and Drupal development. My expertise lies in creating scalable, maintainable solutions for content management systems, from large WordPress multisites with custom themes and plugins to bespoke Drupal 10 projects hosted on platforms like Pantheon.
        </p>
        <p>
          Over the years, I've built a reputation as a reliable, communicative developer who bridges the gap between technical possibilities and business needs. Whether it's developing a custom theme, maintaining robust hosting workflows, or consulting to turn an idea into a functional web solution, I bring technical skills and clear, actionable advice to the table.
        </p>
        
        <strong>How I Can Help</strong>
        <ul>
          <li>Drupal Development: Custom themes, module development, and maintenance.</li>
          <li>JavaScript Frameworks: Experience with Vue, React, and Angular for modern web applications.</li>
          <li>Consulting: Guidance on web strategy, technical architecture, and CMS best practices.</li>
        </ul>
      
        <p>
          If you're looking for a developer to support your project, streamline your workflows, or bring a new idea to life, let's connect!
        </p>
        
      </div>
      <div class="profile-container">
        <img src="@/assets/images/new-profile.png" alt="Jason Watson Profile Picture" class="profile-picture" />
        <div class="logo-orbit">
          <img src="@/assets/images/drupal-stacked.svg" alt="Drupal" class="logo" />
          <img src="@/assets/images/php-logo.png" alt="PHP" class="logo" />
          <img src="@/assets/images/javascript-logo.png" alt="JavaScript" class="logo" />
          <img src="@/assets/images/pantheon-logo.png" alt="Pantheon" class="logo" />
          <img src="@/assets/images/vue-logo.png" alt="Vue.js" class="logo" />
          <!-- Add more logos as needed -->
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
};
</script>

<style scoped>
/* Add your section-specific styles here */
.profile-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 80px auto;
}

.profile-picture {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 2;
  position: relative;
}

.logo-orbit {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: orbit 20s linear infinite;
  z-index: 1;
}

.logo {
  position: absolute;
  width: 80px; /* Adjust as needed */
  height: 80px;
  object-fit: contain;
}

.logo:nth-child(1) { top: -100px; left: 50%; transform: translateX(-50%); height: 100px; }
.logo:nth-child(2) { top: 50%; left: -100px; transform: translateY(-50%); }
.logo:nth-child(3) { bottom: -100px; left: 50%; transform: translateX(-50%); }
.logo:nth-child(4) { top: 50%; right: -120px; transform: translateY(-50%); width: 100px; height: 150px; }

@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

</style>
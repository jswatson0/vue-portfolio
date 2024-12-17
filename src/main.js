import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/styles/global.scss'; // Import the SCSS file
import FooterSection from './components/FooterSection.vue';

// Import the components
import MainPage from './views/MainPage.vue';

// Set up the router
const routes = [
  {
    path: '/',
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const yOffset = -55; // Adjust this value to fit your navbar height
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        return window.scrollTo({
          top: yPosition,
          behavior: 'smooth',
        });
      }

    }
    return { top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.component('FooterSection', FooterSection)

app.mount('#app');

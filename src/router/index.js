import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import BranchesPage from "../pages/BranchesPage.vue";
import BranchPage from "../pages/BranchPage.vue";
import CoursesPage from "../pages/CoursesPage.vue";
import NewsPage from "../pages/NewsPage.vue";
import StudentsPage from "../pages/StudentsPage.vue";
import AchievementsPage from "../pages/AchievementsPage.vue";
import ContactPage from "../pages/ContactPage.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/branches", component: BranchesPage },
    { path: "/branches/:branchId", component: BranchPage },
    { path: "/courses", component: CoursesPage },
    { path: "/news", component: NewsPage },
    { path: "/students", component: StudentsPage },
    { path: "/achievements", component: AchievementsPage },
    { path: "/contact", component: ContactPage },
  ],
});

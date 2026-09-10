import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import BranchesPage from "../pages/BranchesPage.vue";
import CoursesPage from "../pages/CoursesPage.vue";
import NewsPage from "../pages/NewsPage.vue";
import StudentsPage from "../pages/StudentsPage.vue";
import AchievementsPage from "../pages/AchievementsPage.vue";
import ContactPage from "../pages/ContactPage.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/branches", component: BranchesPage },
    { path: "/courses", component: CoursesPage },
    { path: "/news", component: NewsPage },
    { path: "/students", component: StudentsPage },
    { path: "/achievements", component: AchievementsPage },
    { path: "/contact", component: ContactPage },
  ],
});

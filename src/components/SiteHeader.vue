<script setup>
import { ref } from "vue";
import logo from "../assets/共用/logo.png";

const isMenuOpen = ref(false);
const isBranchMenuOpen = ref(false);

const branches = [
  { name: "明湖分校", id: "minghu" },
  { name: "信義分校", id: "xinyi" },
  { name: "東湖分校", id: "donghu" },
  { name: "新莊分校", id: "xinzhuang" },
  { name: "永和分校", id: "yonghe" },
];

const closeMenu = () => {
  isMenuOpen.value = false;
  isBranchMenuOpen.value = false;
};

const toggleBranchMenu = () => {
  isBranchMenuOpen.value = !isBranchMenuOpen.value;
};
</script>

<template>
  <header class="site-header">
    <div class="topbar">
      <RouterLink class="brand" to="/" aria-label="大昇文理補習班首頁">
        <img class="brand-logo" :src="logo" alt="" />
        <strong>大昇文理補習班</strong>
      </RouterLink>
      <p>高中、國中、國小｜教育、升學、生活陪伴</p>
      <a class="line-button" href="tel:0226310572">預約諮詢</a>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        :aria-label="isMenuOpen ? '關閉導覽選單' : '開啟導覽選單'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav
      id="main-navigation"
      class="nav-shell"
      :class="{ 'is-open': isMenuOpen }"
      aria-label="主要導覽"
    >
      <RouterLink class="home-link" to="/" aria-label="首頁" @click="closeMenu">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
          <path d="M12 2.8 2.9 10v11.1h6.3v-6.6h5.6v6.6h6.3V10L12 2.8Z" />
        </svg>
      </RouterLink>
      <RouterLink to="/about" @click="closeMenu">關於大昇</RouterLink>
      <div class="nav-dropdown" :class="{ 'is-open': isBranchMenuOpen }">
        <RouterLink class="nav-dropdown-link" to="/branches" @click="closeMenu"
          >分校資訊</RouterLink
        >
        <button
          class="nav-dropdown-toggle"
          type="button"
          :aria-expanded="isBranchMenuOpen"
          aria-controls="branch-navigation"
          :aria-label="isBranchMenuOpen ? '收合分校選單' : '展開分校選單'"
          @click="toggleBranchMenu"
        >
          <span aria-hidden="true">⌄</span>
        </button>
        <div id="branch-navigation" class="nav-dropdown-menu">
          <RouterLink
            v-for="branch in branches"
            :key="branch.id"
            :to="`/branches/${branch.id}`"
            @click="closeMenu"
            >{{ branch.name }}</RouterLink
          >
        </div>
      </div>
      <RouterLink to="/courses" @click="closeMenu">專業課程</RouterLink>
      <RouterLink to="/news" @click="closeMenu">最新消息</RouterLink>
      <RouterLink to="/students" @click="closeMenu">大昇專欄</RouterLink>
      <RouterLink to="/achievements" @click="closeMenu">成果見證</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">我要先問</RouterLink>
    </nav>
  </header>
</template>

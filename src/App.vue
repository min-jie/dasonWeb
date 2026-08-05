<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import carousel1 from './assets/carousel_1.jpg'
import carousel2 from './assets/carousel_2.jpg'
import carousel3 from './assets/carousel_3.jpg'
import carousel4 from './assets/carousel_4.jpg'
import carousel5 from './assets/carousel_5.jpg'
const heroSlides = [
  {
    title: '課堂實況',
    image: carousel1,
  },
  {
    title: '戶外活動',
    image: carousel2,
  },
  {
    title: '專注學習',
    image: carousel3,
  },
  { title: '大昇教學現場', image: carousel4 },
  { title: '大昇專注學習', image: carousel5 },
]

const activeSlide = ref(0)
let carouselTimer

function goToSlide(index) {
  activeSlide.value = index
}

onMounted(() => {
  carouselTimer = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length
  }, 5000)
})

onBeforeUnmount(() => window.clearInterval(carouselTimer))

const news = [
  { type: '國中', date: '2026.01.23', title: '模擬考', color: 'blue' },
  { type: '生活', date: '2026.01.23', title: '寒假收假提醒', color: 'pink' },
  { type: '全部', date: '2026.01.23', title: '「在大昇，沒有一個孩子會被落下」', color: 'teal' },
  { type: '國小', date: '2026.01.23', title: '寒假徵收假通知', color: 'gold' },
]

const features = [
  ['medal', '養成正確生活態度和讀書習慣', '升學的路上，讀書有時並非理想而輕鬆得到回報，但養成正確的生活態度與讀書習慣往往能讓學習更有效。'],
  ['swirl', '養成正確生活態度和讀書習慣', '升學的路上，大昇不只教課本子知識，也會陪孩子知道如何安排生活與面對挑戰。'],
  ['book', '定期檢測、課後輔導', '透過週考、段考複習與課後補強，讓家長能掌握孩子狀態，也讓學生知道下一步怎麼努力。'],
  ['screen', '補課系統', '缺課或需要複習時，可以透過補課與個別追蹤，把學習斷點補起來，讓進度不中斷。'],
]

const branches = [
  ['明湖分校', '國小、國中、高中', '02-2631-0572', '臺北市內湖區康寧路三段189巷11弄1號2樓'],
  ['信義分校', '國小、國中、高中', '02-6613-0888', '臺北市大安區信義路三段202號6樓'],
  ['東湖分校', '國小、國中、高中', '02-7709-5599', '臺北市內湖區東湖路15號2樓'],
  ['新莊分校', '國小、國中、高中', '02-2992-0107', '新北市新莊區中正路164號4樓'],
  ['永和分校', '國小、國中、高中', '02-2921-1586', '新北市永和區竹林路64號2樓'],
]
const achievements = [
  { value: '30＋', label: '年', description: '深耕雙北，持續精進' },
  { value: '5', label: '大分校', description: '就近服務，交通便利' },
  { value: '國小・國中・高中', label: '全階段教育', description: '陪伴每個關鍵學習階段', text: true },
  { value: '千百', label: '學子信賴', description: '用專業與陪伴成就未來' },
]
</script>

<template>
  <header class="site-header">
    <div class="topbar">
      <a class="brand" href="#top" aria-label="大昇文理補習班首頁">
        <span class="brand-mark">D</span>
        <strong>大昇文理補習班</strong>
      </a>
      <p>專營｜國小、國中、高中｜教育、升學、生活陪伴</p>
      <a class="line-button" href="tel:0226310572" aria-label="立即諮詢">預約諮詢</a>
    </div>
    <nav class="nav-shell" aria-label="主要導覽">
      <a class="home-link" href="#top" aria-label="首頁">⌂</a>
      <a href="#about">關於大昇</a>
      <a href="#branches">分校資訊</a>
      <a href="#features">專業課程</a>
      <a href="#news">最新消息</a>
      <a href="#branches">大昇學區</a>
      <a href="#contact">我要先問</a>
    </nav>
  </header>

  <main id="top">
    <section id="about" class="photo-rail" aria-label="大昇校園照片">
      <article
        v-for="(slide, index) in heroSlides"
        :key="slide.title"
        class="photo-card"
        :class="{ 'is-active': index === activeSlide }"
      >
        <img :src="slide.image" :alt="slide.title" />
      </article>
      <div class="slider-dots" aria-label="校園照片輪播">
        <button
          v-for="(slide, index) in heroSlides"
          :key="`dot-${slide.title}`"
          type="button"
          :class="{ active: index === activeSlide }"
          :aria-label="`顯示第 ${index + 1} 張照片`"
          :aria-current="index === activeSlide ? 'true' : undefined"
          @click="goToSlide(index)"
        ></button>
      </div>
    </section>

    <section class="achievement-wall" aria-labelledby="achievement-title">
      <div class="achievement-heading">
        <p>THE DASON DIFFERENCE</p>
        <h2 id="achievement-title">三十年深耕，數字見證信任</h2>
      </div>
      <div class="achievement-grid">
        <article v-for="achievement in achievements" :key="achievement.label" class="achievement-card">
          <p class="achievement-value" :class="{ 'is-text': achievement.text }">{{ achievement.value }}</p>
          <h3>{{ achievement.label }}</h3>
          <p>{{ achievement.description }}</p>
        </article>
      </div>
    </section>

    <section class="achievement-wall" aria-labelledby="achievement-title">
      <div class="achievement-heading">
        <p>THE DASON DIFFERENCE</p>
        <h2 id="achievement-title">三十年深耕，數字見證信任</h2>
      </div>
      <div class="achievement-grid">
        <article v-for="achievement in achievements" :key="achievement.label" class="achievement-card">
          <p class="achievement-value" :class="{ 'is-text': achievement.text }">{{ achievement.value }}</p>
          <h3>{{ achievement.label }}</h3>
          <p>{{ achievement.description }}</p>
        </article>
      </div>
    </section>

    <section id="news" class="section news-section" aria-labelledby="news-title">
      <div class="section-heading compact">
        <h2 id="news-title">最新消息</h2>
        <p>New Topic</p>
      </div>
      <div class="news-scroller">
        <article v-for="item in news" :key="item.title" class="news-card" :class="item.color">
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=85" alt="學生書寫作業" />
          <div class="news-body">
            <div class="news-tags">
              <span>{{ item.type }}</span>
              <small>生活</small>
            </div>
            <time>{{ item.date }}</time>
            <h3>{{ item.title }}</h3>
            <a href="#news" aria-label="查看消息">→</a>
          </div>
        </article>
      </div>
      <div class="small-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span class="active"></span><span></span><span></span>
      </div>
    </section>

    <section id="features" class="feature-band" aria-labelledby="feature-title">
      <div class="section-heading light">
        <h2 id="feature-title">教學特色區塊</h2>
        <p>Class feature</p>
        <strong>針對學生，大昇開發出一套獨特的教育系統……</strong>
      </div>
      <div class="feature-grid">
        <article v-for="feature in features" :key="feature[2]" class="feature-card">
          <span class="feature-icon" :class="feature[0]"></span>
          <h3>{{ feature[1] }}</h3>
          <p>{{ feature[2] }}</p>
        </article>
      </div>
    </section>

    <section id="branches" class="section branches-section" aria-labelledby="branch-title">
      <div class="section-heading compact lined">
        <h2 id="branch-title">課程資訊</h2>
        <p>Class information</p>
      </div>
      <div class="branch-grid">
        <article v-for="branch in branches" :key="branch[0]" class="branch-card">
          <div class="branch-content">
            <h3>{{ branch[0] }}</h3>
            <ul>
              <li><span>✎</span>{{ branch[1] }}</li>
              <li><span>☎</span>{{ branch[2] }}</li>
              <li><span>●</span>{{ branch[3] }}</li>
            </ul>
          </div>
          <a :href="`tel:${branch[2].replaceAll('-', '')}`">前往課程 課程資訊 <span>›</span></a>
        </article>
      </div>
    </section>
  </main>

  <a class="top-button" href="#top" aria-label="回到頁首">TOP</a>

  <footer id="contact" class="site-footer">
    <div class="footer-brand">
      <span class="brand-mark">D</span>
      <strong>大昇文理補習班</strong>
    </div>
    <div class="footer-branches">
      <div v-for="branch in branches" :key="`footer-${branch[0]}`">
        <strong>{{ branch[0] }}</strong>
        <span>{{ branch[2] }}</span>
        <small>{{ branch[3] }}</small>
      </div>
    </div>
    <p>大昇文理補習班 copyright © 2024 All rights reserved.</p>
  </footer>
</template>

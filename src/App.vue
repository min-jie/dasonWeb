<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import carousel1 from './assets/carousel_1.jpg'
import carousel2 from './assets/carousel_2.jpg'
import carousel3 from './assets/carousel_3.jpg'
import carousel4 from './assets/carousel_4.jpg'
import carousel5 from './assets/carousel_5.jpg'
import educationStoryImage from './assets/education-story.jpg'
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

const teachingMethods = [
  {
    title: '螞蟻式教學',
    description: '一步一腳印，絕不罷休。學習沒有捷徑，大昇老師陪著每位學生紮紮實實地把每個觀念走過一遍，確保基礎穩固，再逐步提升。',
  },
  {
    title: '情境式教學',
    description: '配合生活，融入教學。將抽象的學科知識與實際生活經驗連結，讓學生在理解「為什麼要學」的過程中，自然記住「怎麼學」。',
  },
  {
    title: '啟發式教學',
    description: '摒棄填鴨，因材施教。大昇課堂以引導代替灌輸，根據每位學生的程度與特質，啟發其主動思考，讓理解真正發生。',
  },
  {
    title: '宏觀式教學',
    description: '廣彙考題，宏觀視野。大昇老師持續研析各類考題，幫助學生跳脫單題思維，培養從全局角度看待考試的能力與自信。',
  },
  {
    title: '地毯式教學',
    description: '精編教材，應戰會考。以系統化自編教材為核心，地毯式掃描各單元考點，確保學生在考前不留死角、全面備戰。',
  },
  {
    title: '超前式教學',
    description: '進度超前，靈活解題。比學校進度提前一步，讓學生在課堂上已對內容有所掌握，從容應對，在考試中靈活運用所學。',
  },
]

const testimonials = [
  {
    name: '劉洋睿',
    quote: '孩子在大昇高中部上英文、數學、理化後，成績進步非常明顯！英文從不敢開口到能掌握文法與閱讀技巧；數學老師講解清楚，題型整理很有系統；理化則把觀念講到懂，搭配大量練習，段考與模考分數都穩定提升。老師們負責又會主動回報學習狀況，家長很放心，真心推薦！',
  },
  {
    name: 'Wen Hung Huang',
    quote: '孩子小六上大昇補數學才半年，就考上全台北錄取率最低的靜心國中部（龍年錄取率比平時更低）。最後去唸公立國中，數學第一次段考還是滿分。老師也很認真幫助孩子！',
  },
  {
    name: '黃O誠媽媽',
    quote: '幫孩子找了一輪，最後選大昇，補了這陣子真心覺得值得給五顆星。環境乾淨明亮，櫃檯老師也都客氣，孩子說上課不會想睡，這點很難得。這次段考進步了快二十分，雖然不是榜首，但他自己願意唸書了，光這點就夠了。謝謝老師的耐心。',
  },
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

    <section class="section story-section" aria-labelledby="story-title">
      <div class="story-layout">
        <div class="story-media">
          <img :src="educationStoryImage" alt="老師在課堂中陪伴學生學習" />
          <span class="story-play" aria-hidden="true"></span>
          <span class="story-media-label">DASON EDUCATION STORY</span>
        </div>
        <div class="story-content">
          <p class="story-eyebrow">OUR EDUCATION STORY</p>
          <h2 id="story-title">看見孩子的可能——大昇的教育故事</h2>
          <p>三十年來，大昇始終秉持「做教育」的精神。我們相信每一個孩子都有無限潛力，也相信真正的教育，是在課業之外還能陪伴孩子成為更好的人。這支影片，帶你走進大昇的日常。</p>
          <span class="story-rule" aria-hidden="true"></span>
        </div>
      </div>
    </section>

    <section id="news" class="section news-section" aria-labelledby="news-title">
      <div class="section-heading compact">
        <h2 id="news-title">大昇六大教學特色</h2>
        <p>Teaching features</p>
      </div>
      <div class="news-scroller">
        <article v-for="(item, index) in teachingMethods" :key="item.title" class="news-card teaching-card">
          <span class="teaching-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="news-body">
            <div class="news-tags">
              <small>生活</small>
            </div>
            <time>{{ item.date }}</time>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a href="#news" aria-label="查看消息">→</a>
          </div>
        </article>
      </div>
      <div class="small-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span class="active"></span><span></span><span></span>
      </div>
    </section>

    <section id="features" class="testimonials-section section" aria-labelledby="testimonial-title">
      <div class="section-heading testimonials-heading">
        <p>FAMILY TESTIMONIALS</p>
        <h2 id="testimonial-title">他們說的，比我們說的更真實</h2>
        <strong>每一份肯定，都是我們持續陪伴孩子前進的力量。</strong>
      </div>
      <div class="testimonials-grid">
        <article v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
          <span class="quote-mark" aria-hidden="true">“</span>
          <div class="testimonial-stars" aria-label="五星評價">★★★★★</div>
          <blockquote>{{ testimonial.quote }}</blockquote>
          <footer>{{ testimonial.name }}</footer>
        </article>
      </div>
      <a class="testimonials-more" href="#features">
        查看更多家長推薦 <span aria-hidden="true">→</span>
      </a>
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

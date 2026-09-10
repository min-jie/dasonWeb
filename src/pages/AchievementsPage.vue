<script setup>
const highlights = [
  ['榮譽榜', '每一個名字，都是一段努力的故事', '這裡記錄大昇歷屆學生的傑出成就：考上理想學校、在競賽中脫穎而出，或是突破自我最高紀錄的每一個時刻。'],
  ['學生故事', '從迷茫到確定，他們的轉變你看見了嗎？', '每個孩子的學習旅程都不一樣。有人從不及格到班上前幾名，有人從討厭數學到愛上解題，也有人在大昇找到了方向與自信。'],
  ['導師經驗談', '站在講台上，我看見了什麼', '大昇的老師不只教書，也在觀察、學習與反思，分享如何引導不同個性的學生、處理學習瓶頸，以及真實的師生時刻。'],
  ['家長推薦', '他們說的，比我們說的更真實', '大昇最珍貴的口碑，來自每一位真實家長的親身經歷。以下均為 Google 地圖真實評論，未經修改。'],
]

const testimonials = [
  ['劉洋睿', '孩子在大昇高中部上英文、數學、理化後，成績進步非常明顯！英文從不敢開口到能掌握文法與閱讀技巧；數學老師講解清楚，題型整理很有系統；理化則把觀念講到懂，搭配大量練習，段考與模考分數都穩定提升。老師們負責又會主動回報學習狀況，家長很放心，真心推薦！'],
  ['黃秉宥', '在這樣優秀的補習班，我的孩子真的進步很大，原本不是很好的成績，現在已是班排前3。'],
  ['黃O誠媽媽', '幫孩子找了一輪，最後選大昇，補了這陣子真心覺得值得給五顆星。環境乾淨明亮，櫃檯老師也都客氣，孩子說上課不會想睡，這點很難得。這次段考進步了快二十分，雖然不是榜首，但他自己願意唸書了，光這點就夠了。謝謝老師的耐心。'],
  ['許育維', '以前小學大概前三名，送去大昇以後在附中考了三次第一名了，問孩子怎麼進步那麼多，他說大昇抓題很準！讚！'],
  ['Wen Hung Huang', '孩子小六上大昇補數學才半年，就考上全台北錄取率最低的靜心國中部（龍年錄取率比平時更低）。最後去唸公立國中，數學第一次段考還是滿分。老師也很認真幫助孩子！'],
  ['Pedro Gardea', '一開始補數學英文而已，結果孩子每天吵著要去念書，做媽媽的被嚇到了，讀書風氣很不錯。'],
  ['Rebecca Shen', '謝謝主任耐心教導我女兒的數學，孩子很喜歡主任的講課方式。還有，女兒說生物老師的上課也很活潑很有趣。真心推薦大昇！！'],
  ['Peggy WU', '孩子升上小六後到大昇專科加強數學，老師教學認真又有耐心，讓孩子逐漸培養出對數學的興趣。這段時間不僅成績穩定進步，也更願意主動學習、分享解題思路，基礎打得更扎實，對未來升國中的銜接幫助很大，真心推薦大昇！'],
  ['嫺', '老師用心關心孩子，無論是課業上、生活習慣，更重要還有青春期孩子的心態，值得信賴。'],
]
</script>

<template>
  <main class="achievements-page">
    <section class="section achievements-hero"><p>GROWTH STORIES</p><h1>成果見證</h1><strong>每一份成長，都值得被看見；每一段努力，都會留下痕跡。</strong></section>
    <section class="section achievement-highlights"><div class="achievement-page-heading"><p>OUR HIGHLIGHTS</p><h2>孩子的每一步，都值得驕傲</h2></div><div class="achievement-highlight-grid"><article v-for="(highlight, index) in highlights" :key="highlight[0]" class="achievement-highlight-card"><span>0{{ index + 1 }}</span><h3>{{ highlight[0] }}</h3><h4>{{ highlight[1] }}</h4><p>{{ highlight[2] }}</p></article></div></section>
    <section id="testimonials" class="section achievement-testimonials"><div class="achievement-page-heading"><p>REAL FAMILY REVIEWS</p><h2>家長推薦——他們說的，比我們說的更真實</h2><strong>以下均為 Google 地圖真實評論，未經修改。</strong></div><div class="achievement-review-grid"><article v-for="review in testimonials" :key="review[0]" class="achievement-review-card"><div class="testimonial-stars">★★★★★</div><blockquote>{{ review[1] }}</blockquote><footer>{{ review[0] }}</footer></article></div></section>
  </main>
</template>

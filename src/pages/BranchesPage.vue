<script setup>
const branches = [
  {
    name: "明湖分校",
    area: "內湖",
    phone: "02-2631-0572",
    address: "臺北市內湖區康寧路三段189巷11弄1號2樓",
    color: "blue",
  },
  {
    name: "信義分校",
    area: "大安",
    phone: "02-6613-0888",
    address: "臺北市大安區信義路三段202號6樓",
    color: "green",
  },
  {
    name: "東湖分校",
    area: "內湖",
    phone: "02-7709-5599",
    address: "臺北市內湖區東湖路15號2樓",
    color: "orange",
  },
  {
    name: "新莊分校",
    area: "新北",
    phone: "02-2992-0107",
    address: "新北市新莊區中正路164號4樓",
    color: "blue",
  },
  {
    name: "永和分校",
    area: "新北",
    phone: "02-2921-1586",
    address: "新北市永和區竹林路64號2樓",
    color: "green",
  },
];
</script>

<template>
  <main class="branches-page">
    <section class="section branches-hero" aria-labelledby="branches-title">
      <p>OUR BRANCHES</p>
      <h1 id="branches-title">就近找到你的大昇</h1>
      <strong
        >大昇在雙北設有五所分校，交通便利、環境優質。<br />無論您在哪，都有一間大昇在您身旁。</strong
      >
    </section>

    <section class="section branch-directory" aria-label="大昇分校列表">
      <div class="branch-directory-heading">
        <p>FIND YOUR DARSON</p>
        <h2>五所分校，陪孩子走好每一步</h2>
      </div>
      <div class="branch-directory-grid">
        <article
          v-for="(branch, index) in branches"
          :key="branch.name"
          class="directory-card"
          :class="branch.color"
        >
          <div class="directory-index">
            {{ String(index + 1).padStart(2, "0") }}
          </div>
          <div class="directory-heading">
            <span>{{ branch.area }}</span>
            <h3>{{ branch.name }}</h3>
          </div>
          <dl>
            <div>
              <dt>課程</dt>
              <dd>國小・國中・高中</dd>
            </div>
            <div>
              <dt>電話</dt>
              <dd>{{ branch.phone }}</dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>{{ branch.address }}</dd>
            </div>
          </dl>
          <a
            href="https://lin.ee/5TCGxoS"
            target="_blank"
            rel="noopener noreferrer"
            >立即聯絡 <span>→</span></a
          >
        </article>
      </div>
    </section>
  </main>
</template>

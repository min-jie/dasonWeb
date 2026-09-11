<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const branchDefinitions = {
  minghu: {
    name: "明湖分校",
    folder: "明湖",
    area: "內湖",
    phone: "02-2631-0572",
    address: "臺北市內湖區康寧路三段189巷11弄1號2樓",
    color: "blue",
    description:
      "明湖分校陪伴內湖地區的孩子穩定累積基礎，從國小學習習慣到國高中升學準備，提供清楚、有節奏的學習支持。",
  },
  xinyi: {
    name: "信義分校",
    folder: "信義",
    area: "大安",
    phone: "02-6613-0888",
    address: "臺北市大安區信義路三段202號6樓",
    color: "green",
    description:
      "信義分校位於交通便利的大安區，老師以扎實教學與個別關注，陪伴孩子找到適合自己的讀書方法。",
  },
  donghu: {
    name: "東湖分校",
    folder: "東湖",
    area: "內湖",
    phone: "02-7709-5599",
    address: "臺北市內湖區東湖路15號2樓",
    color: "orange",
    description:
      "東湖分校重視孩子的學習節奏與成長信心，透過課堂引導、課後輔導與家長溝通，讓每一步都走得更穩。",
  },
  xinzhuang: {
    name: "新莊分校",
    folder: "新莊",
    area: "新北",
    phone: "02-2992-0107",
    address: "新北市新莊區中正路164號4樓",
    color: "blue",
    description:
      "新莊分校提供完整的國小、國中與高中課程，陪伴孩子建立觀念、累積實力，從容面對每個升學階段。",
  },
  yonghe: {
    name: "永和分校",
    folder: "永和",
    area: "新北",
    phone: "02-2921-1586",
    address: "新北市永和區竹林路64號2樓",
    color: "green",
    description:
      "永和分校以溫暖、穩定的學習環境，陪伴孩子在課業之外培養自律與自信，和家長一起看見進步。",
  },
};

const imageModules = import.meta.glob(
  "../assets/分校資訊/*/教室環境/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const branch = computed(() => branchDefinitions[route.params.branchId]);

const branchImages = computed(() => {
  if (!branch.value) {
    return [];
  }

  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/分校資訊/${branch.value.folder}/`))
    .map(([, source]) => source);
});
</script>

<template>
  <main v-if="branch" class="branch-detail-page">
    <section
      class="section branch-detail-hero"
      :class="`is-${branch.color}`"
      aria-labelledby="branch-detail-title"
    >
      <p>OUR BRANCH</p>
      <div class="branch-detail-hero-banner">
        <h1 id="branch-detail-title">{{ branch.name }}</h1>
      </div>
    </section>

    <section class="section branch-detail-section" aria-label="分校資訊">
      <div class="branch-detail-layout">
        <div class="branch-detail-copy">
          <p class="branch-detail-eyebrow">BRANCH INFORMATION</p>
          <p class="branch-detail-location">
            在{{ branch.area }}，就近找到陪伴孩子成長的大昇。
          </p>
          <p>{{ branch.description }}</p>
          <dl class="branch-detail-info">
            <div>
              <dt>服務區域</dt>
              <dd>{{ branch.area }}</dd>
            </div>
            <div>
              <dt>電話</dt>
              <dd>
                <a :href="`tel:${branch.phone.replaceAll('-', '')}`">{{
                  branch.phone
                }}</a>
              </dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>{{ branch.address }}</dd>
            </div>
          </dl>
          <a
            class="branch-detail-contact"
            href="https://lin.ee/5TCGxoS"
            target="_blank"
            rel="noopener noreferrer"
            >立即聯絡 <span>→</span></a
          >
        </div>

        <div
          v-if="branchImages.length"
          class="branch-detail-gallery"
          :aria-label="`${branch.name}教室環境照片`"
        >
          <figure v-for="(image, index) in branchImages" :key="image">
            <img :src="image" :alt="`${branch.name}教室環境 ${index + 1}`" />
          </figure>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="branch-detail-page branch-detail-not-found">
    <section class="section">
      <h1>找不到這所分校</h1>
      <RouterLink to="/branches">返回分校資訊</RouterLink>
    </section>
  </main>
</template>

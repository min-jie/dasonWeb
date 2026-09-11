<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const courseDefinitions = {
  elementary: {
    name: "國小課程",
    label: "ELEMENTARY",
    folder: "國小",
    color: "green",
    titleSuffix: "——打好基礎，從現在開始",
    intro:
      "學習的黃金期，就在國小這幾年。大昇國小課程以建立正確觀念、養成良好習慣為核心，讓孩子在循序漸進的課堂中扎實成長。",
    courses: ["數學班", "英文班", "升私中數學班", "資優數學班"],
  },
  "junior-high": {
    name: "國中課程",
    label: "JUNIOR HIGH",
    folder: "國中",
    color: "blue",
    titleSuffix: "——全科鞏固，衝刺理想高中",
    intro:
      "國中三年是孩子學習生涯最關鍵的衝刺期。從基礎到資優、從全科到單科，幫助每一位學生在會考中穩定展現真實實力。",
    courses: [
      "六升七暑期先修班",
      "數資班",
      "數A班",
      "數私校班",
      "英資班",
      "英A班",
      "國文班",
      "生物班",
      "理化班",
      "九年級會考A++必勝班",
    ],
  },
  "senior-high": {
    name: "高中課程",
    label: "SENIOR HIGH",
    folder: "高中",
    color: "orange",
    titleSuffix: "——衝刺學測、鞏固成績、不走冤枉路",
    intro:
      "高中課業難度倍增，每一分的差距都可能改變志願序。由資深教師主導，針對學測核心考點進行深度訓練。",
    courses: ["數學班", "英文班", "物理班", "化學班"],
  },
};

const imageModules = import.meta.glob(
  "../assets/專業課程/*/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const course = computed(() => courseDefinitions[route.params.stageId]);

const courseImages = computed(() => {
  if (!course.value) {
    return [];
  }

  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/專業課程/${course.value.folder}/`))
    .map(([, source]) => source)
    .slice(0, 4);
});
</script>

<template>
  <main v-if="course" class="course-detail-page">
    <section
      class="section course-detail-hero"
      :class="`is-${course.color}`"
      aria-labelledby="course-detail-title"
    >
      <p>COURSE PROGRAMS</p>
      <div class="course-detail-banner">
        <span>{{ course.label }}</span>
        <h1 id="course-detail-title">
          <strong>{{ course.name }}</strong>
          <small>{{ course.titleSuffix }}</small>
        </h1>
      </div>
    </section>

    <section class="section course-detail-section" aria-label="課程介紹">
      <div class="course-detail-layout">
        <div class="course-detail-copy">
          <p class="course-detail-eyebrow">COURSE INFORMATION</p>
          <h2>陪伴每個學習里程碑</h2>
          <p>{{ course.intro }}</p>
          <a
            class="course-detail-contact"
            href="https://lin.ee/5TCGxoS"
            target="_blank"
            rel="noopener noreferrer"
            >預約了解課程 <span>→</span></a
          >
        </div>

        <div
          v-if="courseImages.length"
          class="course-detail-gallery"
          :aria-label="`${course.name}課堂照片`"
        >
          <figure v-for="(image, index) in courseImages" :key="image">
            <img :src="image" :alt="`${course.name}課堂照片 ${index + 1}`" />
          </figure>
        </div>
      </div>

      <div class="course-detail-list">
        <p>COURSE CATEGORIES</p>
        <h2>{{ course.name }}班別</h2>
        <ul>
          <li v-for="courseName in course.courses" :key="courseName">
            <span aria-hidden="true">→</span>{{ courseName }}
          </li>
        </ul>
      </div>
    </section>
  </main>

  <main v-else class="course-detail-page course-detail-not-found">
    <section class="section">
      <h1>找不到這個課程頁面</h1>
      <RouterLink to="/courses/elementary">返回專業課程</RouterLink>
    </section>
  </main>
</template>

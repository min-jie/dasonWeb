<script setup>
const stages = [
  { label: 'ELEMENTARY', title: '國小課程——打好基礎，從現在開始', intro: '學習的黃金期，就在國小這幾年。大昇國小課程以建立正確觀念、養成良好習慣為核心，讓孩子在循序漸進的課堂中扎實成長。', courses: ['數學班', '英文班', '升私中數學班', '資優數學班'] },
  { label: 'JUNIOR HIGH', title: '國中課程——全科鞏固，衝刺理想高中', intro: '國中三年是孩子學習生涯最關鍵的衝刺期。從基礎到資優、從全科到單科，幫助每一位學生在會考中穩定展現真實實力。', courses: ['六升七暑期先修班', '數資班', '數A班', '數私校班', '英資班', '英A班', '國文班', '生物班', '理化班', '九年級會考A++必勝班'] },
  { label: 'SENIOR HIGH', title: '高中課程——衝刺學測、鞏固成績、不走冤枉路', intro: '高中課業難度倍增，每一分的差距都可能改變志願序。由資深教師主導，針對學測核心考點進行深度訓練。', courses: ['數學班', '英文班', '物理班', '化學班'] },
]
</script>
<template><main class="program-page"><section class="section program-hero"><p>COURSE PROGRAMS</p><h1>全階段專業課程，<br />陪伴每個學習里程碑</h1><strong>從扎實基礎到升學衝刺，為每個階段量身規劃。</strong></section><section class="section program-list"><article v-for="(stage, index) in stages" :key="stage.label" class="program-stage"><div class="program-stage-index">0{{ index + 1 }}</div><div><p>{{ stage.label }}</p><h2>{{ stage.title }}</h2><span>{{ stage.intro }}</span></div><ul><li v-for="course in stage.courses" :key="course">{{ course }}</li></ul><RouterLink to="/contact">預約了解課程 <b>→</b></RouterLink></article></section></main></template>

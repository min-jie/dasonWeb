<script setup>
defineProps({ title: String, eyebrow: String, description: String });
</script>

<template>
  <main class="page-main">
    <section class="section page-hero">
      <p>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <strong>{{ description }}</strong>
    </section>
  </main>
</template>

<script setup lang="ts">
import { about } from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>

<section>

  <SectionTitle
    :title="about.title"
  />

  <p>
    {{ about.description }}
  </p>

</section>

</template>
<script setup lang="ts">
import { methodology } from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import Card from '~/components/ui/Card.vue'
</script>

<template>

<section>

  <SectionTitle
    title="Nuestro enfoque"
  />

  <Card
    v-for="item in methodology"
    :key="item.title"
  >

    <h3>
      {{ item.title }}
    </h3>

    <p>
      {{ item.description }}
    </p>

  </Card>

</section>

</template>
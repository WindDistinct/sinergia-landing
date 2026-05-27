<script setup lang="ts">
import {
  problemSection,
  problems
} from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import Card from '~/components/ui/Card.vue'
</script>

<template>

<section>

  <SectionTitle
    :title="problemSection.title"
    :subtitle="problemSection.subtitle"
  />

  <p>
    {{ problemSection.description }}
  </p>

  <Card
    v-for="item in problems"
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
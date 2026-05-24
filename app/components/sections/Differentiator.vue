<script setup lang="ts">
import {
differentiatorSection,
differentiators
}
from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>

<section>

<SectionTitle
:title="differentiatorSection.title"
:subtitle="differentiatorSection.subtitle"
/>

<Card
v-for="item in differentiators"
:key="item.title"
>

<h3>{{ item.title }}</h3>

<p>{{ item.description }}</p>

</Card>

</section>

</template>
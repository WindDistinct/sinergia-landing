<script setup lang="ts">
import { services } from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>
<section>

<SectionTitle
title="¿Qué hacemos?"
/>

<Card
v-for="service in services"
:key="service.title"
>

<h3>
{{ service.title }}
</h3>

<p>
{{ service.description }}
</p>

</Card>

</section>
</template>
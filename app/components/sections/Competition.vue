<script setup lang="ts">
import { competition } from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>
<section>

<SectionTitle
:title="competition.title"
:subtitle="competition.subtitle"
/>

<p>
{{ competition.description }}
</p>

</section>
</template>
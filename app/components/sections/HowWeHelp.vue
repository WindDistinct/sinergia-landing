<script setup lang="ts">
import {
helpSection,
helpItems
}
from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>

<section>

<SectionTitle
:title="helpSection.title"
/>

<Card
v-for="item in helpItems"
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
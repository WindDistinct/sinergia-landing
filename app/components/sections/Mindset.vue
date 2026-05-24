<script setup lang="ts">
import { mindset } from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>

<section>
    <SectionTitle
    :title="mindset.title"
    />

    <p>
    {{ mindset.description }}
    </p>

</section>

</template>
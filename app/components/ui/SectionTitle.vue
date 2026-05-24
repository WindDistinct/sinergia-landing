<script setup lang="ts">

defineProps<{
  title:string
  subtitle?:string
}>()

</script>

<template>

<div>

<h2>
{{ title }}
</h2>

<p v-if="subtitle">
{{ subtitle }}
</p>

</div>

</template>
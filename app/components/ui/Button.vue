<script setup lang="ts">

    defineProps<{
        variant?:
        'primary'
        |
        'secondary'
    }>()

</script>

<template>

    <button
        :class="[
        'button',
        `button-${variant || 'primary'}`
        ]"
    >

        <slot/>

    </button>

</template>
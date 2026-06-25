<!-- Container.vue -->
<!-- In v4 usamos directamente .wrap de layout.css -->
<!-- Puedes seguir usando <LayoutContainer> pero internamente solo aplica .wrap -->

<script setup lang="ts">
defineProps<{
    size?: 'default' | 'narrow' | 'full'
}>()
</script>

<template>
    <div :class="[
        'wrap',
        size === 'narrow' ? 'wrap--narrow' : '',
        size === 'full' ? 'wrap--full' : '',
    ]">
        <slot />
    </div>
</template>

<style scoped>
/* Narrow override */
.wrap--narrow {
    max-width: 760px;
}

/* Full override */
.wrap--full {
    max-width: 100%;
}
</style>
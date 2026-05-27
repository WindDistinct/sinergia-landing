<script setup lang="ts">
defineProps<{
    /**
     * 'default' → max-width contenido normal (1200px)
     * 'narrow'  → para secciones de texto centrado (760px)
     * 'full'    → sin max-width, solo padding lateral
     */
    size?: 'default' | 'narrow' | 'full'
}>()
</script>

<template>
    <div :class="['container', `container--${size || 'default'}`]">
        <slot />
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
}

.container--default {
    max-width: var(--container-width);
}

.container--narrow {
    max-width: 760px;
}

.container--full {
    max-width: 100%;
}
</style>
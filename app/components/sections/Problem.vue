<script setup lang="ts">
import { problemSection, problems } from '~/content/home'
</script>

<template>
    <section class="problem">
        <LayoutContainer>

            <div class="problem__header">
                <p class="problem__label">El problema</p>
                <h2 class="problem__title">{{ problemSection.title }}</h2>
                <p class="problem__description">{{ problemSection.description }}</p>
            </div>

            <div class="problem__grid">
                <div
                    v-for="(item, i) in problems"
                    :key="i"
                    class="problem__card"
                >
                    <div class="problem__card-icon">
                        <span class="problem__card-number">0{{ i + 1 }}</span>
                    </div>
                    <h3 class="problem__card-title">{{ item.title }}</h3>
                    <p class="problem__card-description">{{ item.description }}</p>
                </div>
            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.problem {
    padding: var(--space-xl) 0;
    background-color: var(--color-black-soft);
}

/* Header */
.problem__header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto var(--space-lg);
}

.problem__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.problem__title {
    font-size: clamp(1.75rem, 3.5vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    line-height: var(--line-height-tight);
    color: var(--color-white);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-sm);
}

.problem__description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Grid */
.problem__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
}

/* Card */
.problem__card {
    background-color: var(--color-black);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-lg) var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    transition: border-color var(--transition-base);
}

.problem__card:hover {
    border-color: var(--color-gray-mid);
}

.problem__card-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-sm);
    background-color: var(--color-black-soft);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
}

.problem__card-number {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    color: var(--color-accent);
}

.problem__card-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    line-height: var(--line-height-tight);
}

.problem__card-description {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Responsive */
@media (max-width: 768px) {
    .problem__grid {
        grid-template-columns: 1fr;
    }
}
</style>
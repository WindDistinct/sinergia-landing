<script setup lang="ts">
import { differentiatorSection, differentiators } from '~/content/home'
</script>

<template>
    <section class="differentiator">
        <LayoutContainer>

            <div class="differentiator__inner">

                <!-- Left: heading -->
                <div class="differentiator__heading">
                    <p class="differentiator__label">Por qué Sinergia</p>

                    <h2 class="differentiator__title">
                        {{ differentiatorSection.title }}
                    </h2>

                    <p class="differentiator__subtitle">
                        {{ differentiatorSection.subtitle }}
                    </p>

                    <NuxtLink to="/contact" class="differentiator__cta">
                        Conversemos →
                    </NuxtLink>
                </div>

                <!-- Right: cards -->
                <div class="differentiator__cards">
                    <div
                        v-for="(item, i) in differentiators"
                        :key="i"
                        class="differentiator__card"
                    >
                        <div class="differentiator__card-header">
                            <span class="differentiator__card-number">0{{ i + 1 }}</span>
                            <div class="differentiator__card-line" />
                        </div>
                        <h3 class="differentiator__card-title">{{ item.title }}</h3>
                        <p class="differentiator__card-description">{{ item.description }}</p>
                    </div>
                </div>

            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.differentiator {
    padding: var(--space-xl) 0;
    background-color: var(--color-black);
}

.differentiator__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: start;
}

/* Left */
.differentiator__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.differentiator__title {
    font-size: clamp(1.75rem, 3vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-sm);
}

.differentiator__subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-accent);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-normal);
    margin-bottom: var(--space-lg);
}

.differentiator__cta {
    display: inline-block;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-white);
    text-decoration: none;
    border-bottom: 1.5px solid var(--color-accent);
    padding-bottom: 2px;
    transition: color var(--transition-fast), border-color var(--transition-fast);
}

.differentiator__cta:hover {
    color: var(--color-accent);
}

/* Right: cards */
.differentiator__cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.differentiator__card {
    background-color: var(--color-black-soft);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-md) var(--space-lg);
    transition: border-color var(--transition-base);
}

.differentiator__card:hover {
    border-color: var(--color-accent);
}

.differentiator__card-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
}

.differentiator__card-number {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wider);
    color: var(--color-accent);
    flex-shrink: 0;
}

.differentiator__card-line {
    flex: 1;
    height: 1px;
    background-color: var(--color-border);
}

.differentiator__card-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.01em;
    margin-bottom: var(--space-xs);
}

.differentiator__card-description {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Responsive */
@media (max-width: 768px) {
    .differentiator__inner {
        grid-template-columns: 1fr;
    }
}
</style>
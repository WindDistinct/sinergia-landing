<script setup lang="ts">
import { helpSection, helpItems } from '~/content/home'

const icons = ['◎', '◐', '◑', '●']
</script>

<template>
    <section class="help">
        <LayoutContainer>

            <div class="help__inner">

                <!-- Left: heading -->
                <div class="help__heading">
                    <p class="help__label">Lo que logramos</p>
                    <h2 class="help__title">{{ helpSection.title }}</h2>
                    <NuxtLink to="/contact" class="help__cta">
                        Empecemos →
                    </NuxtLink>
                </div>

                <!-- Right: grid -->
                <div class="help__grid">
                    <div
                        v-for="(item, i) in helpItems"
                        :key="i"
                        class="help__card"
                    >
                        <span class="help__card-icon">{{ icons[i] }}</span>
                        <h3 class="help__card-title">{{ item.title }}</h3>
                        <p class="help__card-description">{{ item.description }}</p>
                    </div>
                </div>

            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.help {
    padding: var(--space-xl) 0;
    background-color: var(--color-black-soft);
}

.help__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: center;
}

/* Left */
.help__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.help__title {
    font-size: clamp(1.75rem, 3vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-lg);
}

.help__cta {
    display: inline-block;
    padding: 0.85rem 2rem;
    background-color: var(--color-accent);
    color: var(--color-black);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.help__cta:hover {
    opacity: 0.85;
    transform: translateY(-1px);
}

/* Right: 2x2 grid */
.help__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
}

.help__card {
    background-color: var(--color-black);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    transition: border-color var(--transition-base), transform var(--transition-base);
}

.help__card:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.help__card-icon {
    font-size: var(--font-size-xl);
    color: var(--color-accent);
    line-height: 1;
    margin-bottom: var(--space-xs);
}

.help__card-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.01em;
}

.help__card-description {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Responsive */
@media (max-width: 768px) {
    .help__inner {
        grid-template-columns: 1fr;
    }

    .help__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 400px) {
    .help__grid {
        grid-template-columns: 1fr;
    }
}
</style>
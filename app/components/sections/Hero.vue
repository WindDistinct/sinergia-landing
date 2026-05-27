<script setup lang="ts">
import { hero } from '~/content/home'
</script>

<template>
    <section class="hero">

        <!-- Background noise / grain overlay -->
        <div class="hero__overlay" />

        <LayoutContainer size="narrow">
            <div class="hero__content">

                <p class="hero__eyebrow">
                    {{ hero.subtitle }}
                </p>

                <h1 class="hero__title">
                    {{ hero.title }}
                </h1>

                <p class="hero__description">
                    {{ hero.description }}
                </p>

                <div class="hero__actions">
                    <NuxtLink to="/contact" class="hero__btn hero__btn--primary">
                        {{ hero.ctaPrimary }}
                    </NuxtLink>
                    <NuxtLink to="/portfolio" class="hero__btn hero__btn--secondary">
                        {{ hero.ctaSecondary }}
                    </NuxtLink>
                </div>

            </div>
        </LayoutContainer>

        <!-- Bottom fade into next section -->
        <div class="hero__fade" />

    </section>
</template>

<style scoped>
.hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    background-color: var(--color-black);
    overflow: hidden;
}

/* Subtle radial glow centered -->*/
.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 80% 60% at 50% 40%,
        rgba(201, 184, 0, 0.08) 0%,
        transparent 70%
    );
    pointer-events: none;
}

.hero__overlay {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    opacity: 0.4;
    pointer-events: none;
}

.hero__content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: var(--space-xl) 0;
}

/* Eyebrow */
.hero__eyebrow {
    display: inline-block;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-md);
}

/* Title */
.hero__title {
    font-size: clamp(2.5rem, 6vw, var(--font-size-5xl));
    font-weight: var(--font-weight-black);
    line-height: var(--line-height-tight);
    color: var(--color-white);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-md);
}

/* Description */
.hero__description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    max-width: 560px;
    margin: 0 auto var(--space-lg);
}

/* Actions */
.hero__actions {
    display: flex;
    gap: var(--space-sm);
    justify-content: center;
    flex-wrap: wrap;
}

.hero__btn {
    display: inline-block;
    padding: 0.85rem 2rem;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.hero__btn:hover {
    opacity: 0.85;
    transform: translateY(-1px);
}

.hero__btn--primary {
    background-color: var(--color-accent);
    color: var(--color-black);
}

.hero__btn--secondary {
    background-color: transparent;
    color: var(--color-white);
    border: 1.5px solid var(--color-border);
}

.hero__btn--secondary:hover {
    border-color: var(--color-white);
    opacity: 1;
}

/* Bottom fade */
.hero__fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, var(--color-black));
    pointer-events: none;
}
</style>
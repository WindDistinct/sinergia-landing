<script setup lang="ts">
import { mindset, solution } from '~/content/home'
</script>

<template>
    <section class="mindset">

        <div class="mindset__glow" />

        <LayoutContainer size="narrow">
            <div class="mindset__content">

                <p class="mindset__eyebrow">El cambio de perspectiva</p>

                <div class="mindset__statement">
                    <span class="mindset__line mindset__line--muted">
                        {{ mindset.title }}
                    </span>
                    <span class="mindset__line mindset__line--accent">
                        {{ mindset.description }}
                    </span>
                </div>

                <div class="mindset__divider" />

                <p class="mindset__solution-title">
                    {{ solution.title }}
                </p>

                <p class="mindset__solution-description">
                    {{ solution.description }}
                </p>

            </div>
        </LayoutContainer>

    </section>
</template>

<style scoped>
.mindset {
    position: relative;
    padding: var(--space-xl) 0;
    background-color: var(--color-black);
    overflow: hidden;
}

.mindset__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 60% 50% at 50% 50%,
        rgba(201, 184, 0, 0.06) 0%,
        transparent 70%
    );
    pointer-events: none;
}

.mindset__content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.mindset__eyebrow {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-lg);
}

/* The two-line statement */
.mindset__statement {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    margin-bottom: var(--space-lg);
}

.mindset__line {
    font-size: clamp(2rem, 5vw, var(--font-size-4xl));
    font-weight: var(--font-weight-black);
    line-height: var(--line-height-tight);
    letter-spacing: -0.02em;
    display: block;
}

.mindset__line--muted {
    color: var(--color-gray-mid);
    text-decoration: line-through;
    text-decoration-color: var(--color-gray-dark);
}

.mindset__line--accent {
    color: var(--color-accent);
}

/* Divider */
.mindset__divider {
    width: 48px;
    height: 2px;
    background-color: var(--color-border);
    margin: 0 auto var(--space-lg);
}

/* Solution block */
.mindset__solution-title {
    font-size: clamp(1.5rem, 3vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-sm);
}

.mindset__solution-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    max-width: 520px;
    margin: 0 auto;
}
</style>
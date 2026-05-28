<script setup lang="ts">
import { methodologySection, methodology } from '~/content/home'
</script>

<template>
    <section class="methodology">
        <LayoutContainer>

            <div class="methodology__header">
                <p class="methodology__label">Nuestro enfoque</p>
                <h2 class="methodology__title">{{ methodologySection.title }}</h2>
            </div>

            <div class="methodology__steps">
                <div
                    v-for="(step, i) in methodology"
                    :key="i"
                    class="methodology__step"
                >
                    <!-- Connector line (all except last) -->
                    <div v-if="i < methodology.length - 1" class="methodology__connector" />

                    <div class="methodology__step-inner">
                        <div class="methodology__step-number">
                            <span>0{{ i + 1 }}</span>
                        </div>
                        <div class="methodology__step-content">
                            <h3 class="methodology__step-title">{{ step.title }}</h3>
                            <p class="methodology__step-description">{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Loop indicator -->
            <div class="methodology__loop">
                <span class="methodology__loop-text">Ciclo continuo de experiencia de marca</span>
                <div class="methodology__loop-line" />
            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.methodology {
    padding: var(--space-xl) 0;
    background-color: var(--color-black);
}

/* Header */
.methodology__header {
    text-align: center;
    margin-bottom: var(--space-xl);
}

.methodology__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.methodology__title {
    font-size: clamp(1.75rem, 3.5vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
}

/* Steps row */
.methodology__steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
    margin-bottom: var(--space-lg);
}

.methodology__step {
    position: relative;
    padding: 0 var(--space-sm);
}

/* Horizontal connector between steps */
.methodology__connector {
    position: absolute;
    top: 24px; /* vertically centered with the number circle */
    right: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
        to right,
        var(--color-border),
        var(--color-accent) 50%,
        var(--color-border)
    );
    transform: translateX(50%);
    z-index: 0;
}

.methodology__step-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-md);
}

/* Number bubble */
.methodology__step-number {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--color-black-soft);
    border: 1.5px solid var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.methodology__step-number span {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    color: var(--color-accent);
}

.methodology__step-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.01em;
    margin-bottom: var(--space-xs);
}

.methodology__step-description {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Loop indicator */
.methodology__loop {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    justify-content: center;
}

.methodology__loop-text {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-gray-mid);
    white-space: nowrap;
}

.methodology__loop-line {
    flex: 1;
    max-width: 120px;
    height: 1px;
    background-color: var(--color-border);
}

/* Responsive */
@media (max-width: 900px) {
    .methodology__steps {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
    }

    .methodology__connector {
        display: none;
    }
}

@media (max-width: 480px) {
    .methodology__steps {
        grid-template-columns: 1fr;
    }
}
</style>
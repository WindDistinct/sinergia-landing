<script setup lang="ts">
import { competition } from '~/content/home'
</script>

<template>
    <section class="competition">
        <LayoutContainer size="narrow">
            <div class="competition__content">

                <p class="competition__label">El contexto</p>

                <h2 class="competition__title">
                    {{ competition.title }}
                </h2>

                <p class="competition__subtitle">
                    {{ competition.subtitle }}
                </p>

                <p class="competition__description">
                    {{ competition.description }}
                </p>

            </div>
        </LayoutContainer>
    </section>
</template>

<style scoped>
.competition {
    padding: var(--space-xl) 0;
    background-color: var(--color-black);
}

.competition__content {
    text-align: center;
}

.competition__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-md);
}

.competition__title {
    font-size: clamp(2rem, 4vw, var(--font-size-4xl));
    font-weight: var(--font-weight-black);
    line-height: var(--line-height-tight);
    color: var(--color-white);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-sm);
}

.competition__subtitle {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-accent);
    margin-bottom: var(--space-md);
    line-height: var(--line-height-normal);
}

.competition__description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    max-width: 600px;
    margin: 0 auto;
}
</style>
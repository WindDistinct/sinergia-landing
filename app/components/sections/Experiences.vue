<script setup lang="ts">
import { experienceSection, experienceLevels } from '~/content/home'
</script>

<template>
    <section class="experiences">
        <LayoutContainer>

            <div class="experiences__header">
                <p class="experiences__label">Niveles de servicio</p>
                <h2 class="experiences__title">{{ experienceSection.title }}</h2>
            </div>

            <div class="experiences__grid">
                <div
                    v-for="(level, i) in experienceLevels"
                    :key="i"
                    class="experiences__card"
                    :class="{ 'experiences__card--featured': level.featured }"
                >
                    <!-- Featured badge -->
                    <div v-if="level.featured" class="experiences__badge">
                        Más elegido
                    </div>

                    <h3 class="experiences__card-name">{{ level.name }}</h3>
                    <p class="experiences__card-description">{{ level.description }}</p>

                    <div class="experiences__divider" />

                    <!-- Includes -->
                    <div class="experiences__block">
                        <p class="experiences__block-label">Incluye</p>
                        <ul class="experiences__list">
                            <li
                                v-for="(item, j) in level.includes"
                                :key="j"
                                class="experiences__list-item"
                            >
                                <span class="experiences__list-icon">✓</span>
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <div class="experiences__divider" />

                    <!-- Result -->
                    <div class="experiences__block">
                        <p class="experiences__block-label">Resultado</p>
                        <ul class="experiences__result-list">
                            <li
                                v-for="(res, k) in level.result"
                                :key="k"
                                class="experiences__result-item"
                            >
                                {{ res }}
                            </li>
                        </ul>
                    </div>

                    <NuxtLink to="/contact" class="experiences__card-cta">
                        Quiero este nivel →
                    </NuxtLink>
                </div>
            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.experiences {
    padding: var(--space-xl) 0;
    background-color: var(--color-black-soft);
}

/* Header */
.experiences__header {
    text-align: center;
    margin-bottom: var(--space-xl);
}

.experiences__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.experiences__title {
    font-size: clamp(1.75rem, 3.5vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    max-width: 640px;
    margin: 0 auto;
}

/* Grid */
.experiences__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    align-items: start;
}

/* Card */
.experiences__card {
    position: relative;
    background-color: var(--color-black);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-lg) var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    transition: border-color var(--transition-base);
}

.experiences__card:hover {
    border-color: var(--color-gray-mid);
}

.experiences__card--featured {
    border-color: var(--color-accent);
    background: linear-gradient(
        160deg,
        rgba(201, 184, 0, 0.07) 0%,
        var(--color-black) 50%
    );
}

.experiences__card--featured:hover {
    border-color: var(--color-accent);
}

/* Featured badge */
.experiences__badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-accent);
    color: var(--color-black);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-sm);
    white-space: nowrap;
}

.experiences__card-name {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.01em;
}

.experiences__card-description {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

.experiences__divider {
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
}

/* Blocks */
.experiences__block {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.experiences__block-label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-gray-mid);
}

/* Includes list */
.experiences__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.experiences__list-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: var(--line-height-normal);
}

.experiences__list-icon {
    color: var(--color-accent);
    font-weight: var(--font-weight-black);
    flex-shrink: 0;
    margin-top: 1px;
}

/* Result list */
.experiences__result-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.experiences__result-item {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-white);
    letter-spacing: var(--letter-spacing-wide);
}

/* CTA */
.experiences__card-cta {
    display: inline-block;
    margin-top: auto;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-accent);
    text-decoration: none;
    transition: opacity var(--transition-fast);
}

.experiences__card-cta:hover {
    opacity: 0.75;
}

/* Responsive */
@media (max-width: 900px) {
    .experiences__grid {
        grid-template-columns: 1fr;
        max-width: 480px;
        margin: 0 auto;
    }
}
</style>
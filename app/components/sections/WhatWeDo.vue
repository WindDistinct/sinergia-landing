<script setup lang="ts">
import { servicesSection, services } from '~/content/home'

const icons = ['◈', '◉', '◫']
</script>

<template>
    <section class="whatwedo">
        <LayoutContainer>

            <div class="whatwedo__header">
                <p class="whatwedo__label">Servicios</p>
                <h2 class="whatwedo__title">{{ servicesSection.title }}</h2>
            </div>

            <div class="whatwedo__grid">
                <div
                    v-for="(service, i) in services"
                    :key="i"
                    class="whatwedo__card"
                    :class="{ 'whatwedo__card--featured': i === 1 }"
                >
                    <span class="whatwedo__card-icon">{{ icons[i] }}</span>
                    <h3 class="whatwedo__card-title">{{ service.title }}</h3>
                    <p class="whatwedo__card-description">{{ service.description }}</p>

                    <NuxtLink
                        to="/portfolio"
                        class="whatwedo__card-link"
                    >
                        Ver ejemplos →
                    </NuxtLink>
                </div>
            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.whatwedo {
    padding: var(--space-xl) 0;
    background-color: var(--color-black-soft);
}

/* Header */
.whatwedo__header {
    text-align: center;
    margin-bottom: var(--space-xl);
}

.whatwedo__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.whatwedo__title {
    font-size: clamp(1.75rem, 3.5vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
}

/* Grid */
.whatwedo__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
}

/* Card */
.whatwedo__card {
    background-color: var(--color-black);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-lg) var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    transition: border-color var(--transition-base), transform var(--transition-base);
}

.whatwedo__card:hover {
    border-color: var(--color-gray-mid);
    transform: translateY(-2px);
}

.whatwedo__card--featured {
    border-color: var(--color-accent);
    background: linear-gradient(
        160deg,
        rgba(201, 184, 0, 0.06) 0%,
        var(--color-black) 60%
    );
}

.whatwedo__card--featured:hover {
    border-color: var(--color-accent);
}

.whatwedo__card-icon {
    font-size: var(--font-size-2xl);
    color: var(--color-accent);
    line-height: 1;
}

.whatwedo__card-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.01em;
    line-height: var(--line-height-tight);
}

.whatwedo__card-description {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    flex: 1;
}

.whatwedo__card-link {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-accent);
    text-decoration: none;
    letter-spacing: var(--letter-spacing-wide);
    transition: opacity var(--transition-fast);
    margin-top: var(--space-xs);
}

.whatwedo__card-link:hover {
    opacity: 0.75;
}

/* Responsive */
@media (max-width: 768px) {
    .whatwedo__grid {
        grid-template-columns: 1fr;
    }
}
</style>
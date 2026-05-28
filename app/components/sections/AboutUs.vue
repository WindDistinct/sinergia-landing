<script setup lang="ts">
import { about } from '~/content/home'

const brands = [
    'Rimac', 'Banco Financiero', 'Bioderma',
    'Perupack', 'Ledex', 'Totalmatrix',
    'Verdal', 'Port Logistics', 'Llamagas',
]
</script>

<template>
    <section class="about">
        <LayoutContainer>
            <div class="about__grid">

                <!-- Left: text -->
                <div class="about__text">
                    <p class="about__label">Quiénes somos</p>

                    <h2 class="about__title">{{ about.title }}</h2>

                    <p class="about__description">{{ about.description }}</p>

                    <div class="about__badges">
                        <span class="about__badge">Sinergia</span>
                        <span class="about__badge-plus">+</span>
                        <span class="about__badge about__badge--crealab">Crealab</span>
                    </div>
                </div>

                <!-- Right: brand wall -->
                <div class="about__brands">
                    <p class="about__brands-label">Marcas que han confiado en nosotros</p>
                    <div class="about__brands-grid">
                        <span
                            v-for="brand in brands"
                            :key="brand"
                            class="about__brand-item"
                        >
                            {{ brand }}
                        </span>
                    </div>
                </div>

            </div>
        </LayoutContainer>
    </section>
</template>

<style scoped>
.about {
    padding: var(--space-xl) 0;
    background-color: var(--color-black-soft);
}

.about__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: center;
}

/* Left */
.about__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.about__title {
    font-size: clamp(1.75rem, 3vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    line-height: var(--line-height-tight);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-md);
}

.about__description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    margin-bottom: var(--space-lg);
}

.about__badges {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.about__badge {
    padding: 0.4rem 1rem;
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-white);
}

.about__badge--crealab {
    border-color: var(--color-accent);
    color: var(--color-accent);
}

.about__badge-plus {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-gray-mid);
}

/* Right: brand wall */
.about__brands {
    background-color: var(--color-black);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-lg);
}

.about__brands-label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-gray-mid);
    margin-bottom: var(--space-md);
}

.about__brands-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-sm);
}

.about__brand-item {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-muted);
    padding: var(--space-xs) var(--space-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    text-align: center;
    letter-spacing: var(--letter-spacing-wide);
    transition: border-color var(--transition-fast), color var(--transition-fast);
}

.about__brand-item:hover {
    border-color: var(--color-accent);
    color: var(--color-white);
}

/* Responsive */
@media (max-width: 768px) {
    .about__grid {
        grid-template-columns: 1fr;
    }

    .about__brands-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
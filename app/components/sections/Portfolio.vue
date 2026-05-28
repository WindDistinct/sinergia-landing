<script setup lang="ts">
import { portfolio } from '~/content/home'

const categories = ['Todos', 'Stands', 'Activaciones', 'Merchandising']
const activeCategory = ref('Todos')

const projects = [
    { title: 'Reyna',          category: 'Stands',        placeholder: true },
    { title: 'Turkey',         category: 'Stands',        placeholder: true },
    { title: 'Perupack',       category: 'Stands',        placeholder: true },
    { title: 'Verdal',         category: 'Stands',        placeholder: true },
    { title: 'Port Logistics', category: 'Stands',        placeholder: true },
    { title: 'Llamagas',       category: 'Stands',        placeholder: true },
    { title: 'Banco Financiero', category: 'Activaciones', placeholder: true },
    { title: 'Bioderma',       category: 'Activaciones',  placeholder: true },
    { title: 'Ledex',          category: 'Activaciones',  placeholder: true },
    { title: 'Rimac',          category: 'Merchandising', placeholder: true },
    { title: 'Century 21',     category: 'Merchandising', placeholder: true },
    { title: 'Tick Tick Boom', category: 'Merchandising', placeholder: true },
]

const filtered = computed(() =>
    activeCategory.value === 'Todos'
        ? projects
        : projects.filter(p => p.category === activeCategory.value)
)
</script>

<template>
    <section class="portfolio">
        <LayoutContainer>

            <div class="portfolio__header">
                <p class="portfolio__label">Portafolio</p>
                <h2 class="portfolio__title">{{ portfolio.title }}</h2>
                <p class="portfolio__description">{{ portfolio.description }}</p>
            </div>

            <!-- Filter tabs -->
            <div class="portfolio__filters">
                <button
                    v-for="cat in categories"
                    :key="cat"
                    class="portfolio__filter"
                    :class="{ 'portfolio__filter--active': activeCategory === cat }"
                    @click="activeCategory = cat"
                >
                    {{ cat }}
                </button>
            </div>

            <!-- Grid -->
            <div class="portfolio__grid">
                <div
                    v-for="(project, i) in filtered"
                    :key="i"
                    class="portfolio__item"
                >
                    <!-- Placeholder until real images are added -->
                    <div class="portfolio__image">
                        <span class="portfolio__image-label">{{ project.title }}</span>
                    </div>

                    <div class="portfolio__item-footer">
                        <span class="portfolio__item-title">{{ project.title }}</span>
                        <span class="portfolio__item-category">{{ project.category }}</span>
                    </div>
                </div>
            </div>

            <!-- Link to full portfolio page -->
            <div class="portfolio__more">
                <NuxtLink to="/portfolio" class="portfolio__more-link">
                    Ver portafolio completo →
                </NuxtLink>
            </div>

        </LayoutContainer>
    </section>
</template>

<style scoped>
.portfolio {
    padding: var(--space-xl) 0;
    background-color: var(--color-black);
}

/* Header */
.portfolio__header {
    text-align: center;
    margin-bottom: var(--space-lg);
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
}

.portfolio__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.portfolio__title {
    font-size: clamp(1.75rem, 3.5vw, var(--font-size-3xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-sm);
}

.portfolio__description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Filters */
.portfolio__filters {
    display: flex;
    gap: var(--space-xs);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-lg);
}

.portfolio__filter {
    padding: 0.4rem 1.1rem;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
}

.portfolio__filter:hover {
    border-color: var(--color-gray-mid);
    color: var(--color-white);
}

.portfolio__filter--active {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-black);
}

/* Grid */
.portfolio__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

/* Item */
.portfolio__item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    cursor: pointer;
}

.portfolio__image {
    aspect-ratio: 4 / 3;
    background-color: var(--color-black-soft);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: border-color var(--transition-base), transform var(--transition-base);
}

.portfolio__item:hover .portfolio__image {
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

/* Swap this for <img> when real images are available */
.portfolio__image-label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-mid);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
}

.portfolio__item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--space-xs);
}

.portfolio__item-title {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-white);
}

.portfolio__item-category {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-accent);
}

/* More link */
.portfolio__more {
    text-align: center;
}

.portfolio__more-link {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-white);
    text-decoration: none;
    border-bottom: 1.5px solid var(--color-accent);
    padding-bottom: 2px;
    transition: color var(--transition-fast);
}

.portfolio__more-link:hover {
    color: var(--color-accent);
}

/* Responsive */
@media (max-width: 900px) {
    .portfolio__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .portfolio__grid {
        grid-template-columns: 1fr;
    }
}
</style>
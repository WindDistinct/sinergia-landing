<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import { seo } from '~/content/seo'

useSEO(seo.portfolio)

const categories = ['Todos', 'Stands', 'Activaciones', 'Merchandising']
const activeCategory = ref('Todos')

const projects = [
    {
        title:    'Reyna',
        category: 'Stands',
        tags:     ['Feria inmobiliaria', 'Stand corporativo'],
        image:    null,
    },
    {
        title:    'Turkey',
        category: 'Stands',
        tags:     ['Feria internacional', 'Pabellón país'],
        image:    null,
    },
    {
        title:    'Perupack',
        category: 'Stands',
        tags:     ['Stand temático', 'Materiales naturales'],
        image:    null,
    },
    {
        title:    'Verdal',
        category: 'Stands',
        tags:     ['Feria alimentaria', 'Branding integral'],
        image:    null,
    },
    {
        title:    'Port Logistics',
        category: 'Stands',
        tags:     ['Stand logística', 'Zona de carga'],
        image:    null,
    },
    {
        title:    'Llamagas',
        category: 'Stands',
        tags:     ['Stand energía', 'Diseño conceptual'],
        image:    null,
    },
    {
        title:    'Totalmatrix',
        category: 'Stands',
        tags:     ['Stand industrial', 'Display de producto'],
        image:    null,
    },
    {
        title:    'Pronto Matic',
        category: 'Stands',
        tags:     ['Stand retail', 'Branding dinámico'],
        image:    null,
    },
    {
        title:    'Banco Financiero',
        category: 'Activaciones',
        tags:     ['Activación financiera', 'Interacción directa'],
        image:    null,
    },
    {
        title:    'Bioderma',
        category: 'Activaciones',
        tags:     ['Activación salud', 'Engagement'],
        image:    null,
    },
    {
        title:    'Ledex',
        category: 'Activaciones',
        tags:     ['Activación digital', 'Brand experience'],
        image:    null,
    },
    {
        title:    'Rimac',
        category: 'Merchandising',
        tags:     ['Kits corporativos', 'Branding físico'],
        image:    null,
    },
    {
        title:    'Century 21',
        category: 'Merchandising',
        tags:     ['Kits de marca', 'Lanyards'],
        image:    null,
    },
    {
        title:    'Tick Tick Boom',
        category: 'Merchandising',
        tags:     ['Bolsas', 'Tazas', 'Branding evento'],
        image:    null,
    },
]

const filtered = computed(() =>
    activeCategory.value === 'Todos'
        ? projects
        : projects.filter(p => p.category === activeCategory.value)
)
</script>

<template>
    <div class="portfolio-page">

        <!-- Hero -->
        <section class="portfolio-page__hero">
            <div class="portfolio-page__glow" />
            <LayoutContainer size="narrow">
                <div class="portfolio-page__hero-content">
                    <p class="portfolio-page__label">Portafolio</p>
                    <h1 class="portfolio-page__title">
                        Experiencias que hemos construido
                    </h1>
                    <p class="portfolio-page__subtitle">
                        Stands, activaciones y merchandising desarrollados
                        para marcas que eligieron ser recordadas.
                    </p>
                </div>
            </LayoutContainer>
        </section>

        <!-- Projects -->
        <section class="portfolio-page__projects">
            <LayoutContainer>

                <!-- Filters -->
                <div class="portfolio-page__filters">
                    <button
                        v-for="cat in categories"
                        :key="cat"
                        class="portfolio-page__filter"
                        :class="{ 'portfolio-page__filter--active': activeCategory === cat }"
                        @click="activeCategory = cat"
                    >
                        {{ cat }}
                        <span class="portfolio-page__filter-count">
                            {{
                                cat === 'Todos'
                                    ? projects.length
                                    : projects.filter(p => p.category === cat).length
                            }}
                        </span>
                    </button>
                </div>

                <!-- Grid -->
                <div class="portfolio-page__grid">
                    <div
                        v-for="(project, i) in filtered"
                        :key="i"
                        class="portfolio-page__item"
                    >
                        <div class="portfolio-page__image">
                            <!-- Replace with <img :src="project.image" :alt="project.title"> when images are ready -->
                            <span class="portfolio-page__image-placeholder">
                                {{ project.title }}
                            </span>
                        </div>

                        <div class="portfolio-page__item-body">
                            <div class="portfolio-page__item-meta">
                                <span class="portfolio-page__item-title">{{ project.title }}</span>
                                <span class="portfolio-page__item-category">{{ project.category }}</span>
                            </div>
                            <div class="portfolio-page__tags">
                                <span
                                    v-for="tag in project.tags"
                                    :key="tag"
                                    class="portfolio-page__tag"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutContainer>
        </section>

        <!-- Bottom CTA -->
        <ContactCTA />

    </div>
</template>

<style scoped>
.portfolio-page {
    background-color: var(--color-black);
}

/* Hero */
.portfolio-page__hero {
    position: relative;
    padding: var(--space-xl) 0;
    overflow: hidden;
    border-bottom: 1px solid var(--color-border);
}

.portfolio-page__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 60% 80% at 50% 100%,
        rgba(201, 184, 0, 0.07) 0%,
        transparent 70%
    );
    pointer-events: none;
}

.portfolio-page__hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.portfolio-page__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.portfolio-page__title {
    font-size: clamp(2rem, 5vw, var(--font-size-4xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-sm);
}

.portfolio-page__subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    max-width: 520px;
    margin: 0 auto;
}

/* Projects section */
.portfolio-page__projects {
    padding: var(--space-xl) 0;
}

/* Filters */
.portfolio-page__filters {
    display: flex;
    gap: var(--space-xs);
    flex-wrap: wrap;
    margin-bottom: var(--space-lg);
}

.portfolio-page__filter {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 0.5rem 1.1rem;
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

.portfolio-page__filter:hover {
    border-color: var(--color-gray-mid);
    color: var(--color-white);
}

.portfolio-page__filter--active {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-black);
}

.portfolio-page__filter-count {
    font-size: var(--font-size-xs);
    opacity: 0.7;
}

/* Grid — masonry-like with varied row spans */
.portfolio-page__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-sm);
}

/* Item */
.portfolio-page__item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.portfolio-page__item:nth-child(3n + 1) .portfolio-page__image {
    aspect-ratio: 4 / 3;
}

.portfolio-page__item:nth-child(3n + 2) .portfolio-page__image {
    aspect-ratio: 3 / 4;
}

.portfolio-page__item:nth-child(3n + 3) .portfolio-page__image {
    aspect-ratio: 1 / 1;
}

.portfolio-page__image {
    background-color: var(--color-black-soft);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: border-color var(--transition-base), transform var(--transition-base);
}

.portfolio-page__item:hover .portfolio-page__image {
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.portfolio-page__image-placeholder {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-mid);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
}

/* Item body */
.portfolio-page__item-body {
    padding: 0 var(--space-xs);
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.portfolio-page__item-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.portfolio-page__item-title {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
}

.portfolio-page__item-category {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-accent);
}

/* Tags */
.portfolio-page__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.portfolio-page__tag {
    font-size: var(--font-size-xs);
    color: var(--color-gray-mid);
    background-color: var(--color-black-soft);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 2px 8px;
}

/* Responsive */
@media (max-width: 900px) {
    .portfolio-page__grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .portfolio-page__item:nth-child(n) .portfolio-page__image {
        aspect-ratio: 4 / 3;
    }
}

@media (max-width: 480px) {
    .portfolio-page__grid {
        grid-template-columns: 1fr;
    }
}
</style>
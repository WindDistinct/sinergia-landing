<script setup lang="ts">
import { portfolio } from '~/content/home'
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activeCategory = ref('all')

const categories = [
    { key: 'all', label: 'Todo' },
    { key: 'stands', label: 'Stands' },
    { key: 'activaciones', label: 'Activaciones' },
    { key: 'merchandising', label: 'Merchandising' },
]

const projects = [
    { title: 'Turkey', category: 'stands', size: 'wide', sub: 'Stand corporativo', sqm: '', img: '/images/portfolio/turkey.webp' },
    { title: 'Llamagas', category: 'stands', size: 'wide', sub: 'Stand corporativo', sqm: '', img: '/images/portfolio/llamagas.webp' },
    { title: 'Reyna', category: 'stands', size: 'tall', sub: 'Stand corporativo', sqm: '', img: '/images/portfolio/reyna.webp' },
    { title: 'Bioderma', category: 'activaciones', size: '', sub: 'Activación', sqm: '', img: '/images/portfolio/bioderma.webp' },
    { title: 'Verdal', category: 'stands', size: '', sub: 'Stand corporativo', sqm: '', img: '/images/standfinal.webp' },
    { title: 'Tick Tick Boom', category: 'merchandising', size: '', sub: 'Merchandising', sqm: '', img: '/images/portfolio/ticktickboom.webp' },
    { title: 'Perupack', category: 'stands', size: '', sub: 'Stand corporativo', sqm: '', img: '/images/portfolio/perupack.webp' },
    { title: 'Banco Financiero', category: 'activaciones', size: 'wide', sub: 'Activación', sqm: '', img: '/images/portfolio/bancofinanciero.webp' },
]

function setCategory(cat: string) {
    activeCategory.value = cat
    const isMobile = window.innerWidth <= 540

    document.querySelectorAll<HTMLElement>('.pi').forEach(el => {
        const match = cat === 'all' || el.dataset.cat === cat

        if (isMobile) {
            if (match) {
                gsap.set(el, { display: 'block' })
                gsap.to(el, { opacity: 1, scale: 1, duration: 0.3, ease: 'expo.out' })
            } else {
                gsap.to(el, {
                    opacity: 0, scale: 0.95, duration: 0.25, ease: 'expo.out',
                    onComplete: () => gsap.set(el, { display: 'none' })
                })
            }
        } else {
            gsap.to(el, {
                opacity: match ? 1 : 0.1,
                scale: match ? 1 : 0.96,
                duration: 0.35, ease: 'expo.out'
            })
        }
    })
}

let ctx: gsap.Context | null = null

onMounted(() => {
    gsap.set('.pi', { opacity: 0, y: 28 })

    ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: '#pgrid',
            start: 'top 88%',
            once: true,
            onEnter: () => {
                gsap.to('.pi', {
                    opacity: 1, y: 0,
                    duration: 0.7, ease: 'expo.out', stagger: 0.06
                })
            }
        })
    })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
    <section class="s-portfolio" id="portfolio">
        <div class="wrap">
            <div class="port-head">
                <h2 class="dtitle">{{ portfolio.title }} <br><em>construimos.</em></h2>
                <div class="port-filters">
                    <button v-for="cat in categories" :key="cat.key" class="pf"
                        :class="{ 'pf-on': activeCategory === cat.key }" @click="setCategory(cat.key)">
                        {{ cat.label }}
                    </button>
                </div>
            </div>

            <div class="pgrid" id="pgrid">
                <article v-for="(p, i) in projects" :key="i" class="pi"
                    :class="{ 'pi-wide': p.size === 'wide', 'pi-tall': p.size === 'tall' }" :data-cat="p.category">
                    <div class="pi-img">
                        <img :src="p.img" :alt="p.title" :loading="i < 4 ? 'eager' : 'lazy'"
                            :fetchpriority="i < 2 ? 'high' : 'auto'" decoding="async" width="900" height="600" />
                    </div>
                    <div class="pi-info">
                        <span>{{ p.sub }}</span>
                        <h3>{{ p.title }}</h3>
                        <p>{{ p.sqm }}</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.s-portfolio {
    padding: 120px 0;
    background: var(--black);
}

.port-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 48px;
    gap: 24px;
    flex-wrap: wrap;
}

.port-head .dtitle {
    margin-bottom: 0;
}

.port-filters {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

/* ── GRID ── */
.pgrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 280px;
    gap: 12px;
}

.pi {
    position: relative;
    border-radius: var(--r-md);
    overflow: hidden;
    cursor: pointer;
    background: var(--black-mid);
}

.pi-wide {
    grid-column: span 2;
}

.pi-tall {
    grid-row: span 2;
}

.pi-img {
    position: absolute;
    inset: 0;
}

.pi-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .6s var(--ease);
    background: var(--black-mid);
}

.pi:hover .pi-img img {
    transform: scale(1.06);
}

.pi-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px 20px 18px;
    background: linear-gradient(to top, rgba(0, 0, 0, .86) 0%, transparent 100%);
    transform: translateY(6px);
    opacity: 0;
    transition: opacity .3s var(--ease), transform .3s var(--ease);
}

.pi:hover .pi-info {
    opacity: 1;
    transform: translateY(0);
}

.pi-info span {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold);
    display: block;
    margin-bottom: 4px;
}

.pi-info h3 {
    font-size: 16px;
    font-weight: 900;
    letter-spacing: -0.02em;
}

.pi-info p {
    font-size: 11px;
    color: var(--text);
    margin-top: 2px;
}

/* ── TABLET (≤ 900px) ── */
@media (max-width: 900px) {
    .s-portfolio {
        padding: 80px 0;
    }

    .port-head {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 32px;
    }

    .pgrid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 220px;
    }

    .pi-wide {
        grid-column: span 2;
    }

    .pi-tall {
        grid-row: span 2;
    }
}

@media (max-width: 540px) {
    .pgrid {
        grid-template-columns: 1fr;
        grid-auto-rows: 200px;
        gap: 8px;
    }

    .pi-wide {
        grid-column: span 1;
    }

    .pi-tall {
        grid-row: span 1;
    }

    .pi-info {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
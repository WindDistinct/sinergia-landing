<script setup lang="ts">
import { services } from '~/content/home'

const serviceImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=75',
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=75',
]
</script>

<template>
    <section class="s-servicios" id="servicios">
        <div class="wrap">
            <h2 class="dtitle">Qué<br><em>hacemos.</em></h2>
            <div class="svc-list">
                <a v-for="(service, i) in services" :key="i" href="#contacto" class="svc">
                    <span class="svc-num">0{{ i + 1 }}</span>
                    <div class="svc-body">
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.description }}</p>
                    </div>
                    <div class="svc-img">
                        <img :src="serviceImages[i]" alt="" loading="lazy" />
                    </div>
                    <span class="svc-arrow">→</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.s-servicios {
    padding: 120px 0;
    background: var(--black-soft);
}

.svc-list {
    display: flex;
    flex-direction: column;
}

.svc {
    display: grid;
    grid-template-columns: 40px 1fr 180px 28px;
    align-items: center;
    gap: 28px;
    padding: 36px 0;
    border-bottom: 1px solid var(--border);
    color: var(--white);
    transition: background .2s;
    cursor: pointer;
    overflow: hidden;
}

.svc:first-child {
    border-top: 1px solid var(--border);
}

.svc:hover {
    background: var(--gold-faint);
}

.svc:hover .svc-arrow {
    transform: translateX(6px);
    color: var(--gold);
}

.svc:hover .svc-img img {
    transform: scale(1.05);
}

.svc-num {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;
    color: var(--gold);
}

.svc-body h3 {
    font-size: clamp(22px, 2.4vw, 30px);
    font-weight: 900;
    letter-spacing: -.03em;
    line-height: 1;
    margin-bottom: 6px;
}

.svc-body p {
    font-size: 13px;
    color: var(--light);
    line-height: 1.6;
    max-width: 500px;
}

.svc-img {
    width: 180px;
    height: 100px;
    border-radius: var(--r-md);
    overflow: hidden;
}

.svc-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .5s var(--ease);
}

.svc-arrow {
    font-size: 22px;
    font-weight: 900;
    color: var(--muted);
    transition: transform .2s, color .2s;
}

/* ── TABLET (≤ 860px) ── */
@media (max-width: 860px) {
    .s-servicios {
        padding: 80px 0;
    }

    .svc {
        grid-template-columns: 40px 1fr 28px;
        gap: 20px;
        padding: 28px 0;
    }

    .svc-img {
        display: none;
    }
}

/* ── MÓVIL (≤ 540px) ── */
@media (max-width: 540px) {
    .s-servicios {
        padding: 64px 0;
    }

    .svc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 24px 0;
        position: relative;
    }

    .svc-num {
        font-size: 9px;
    }

    .svc-body h3 {
        font-size: clamp(20px, 6vw, 26px);
        padding-right: 32px;
    }

    .svc-body p {
        font-size: 13px;
        max-width: 100%;
    }

    .svc-img {
        display: none;
    }

    .svc-arrow {
        position: absolute;
        top: 24px;
        right: 0;
        font-size: 18px;
    }
}
</style>
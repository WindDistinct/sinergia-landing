<script setup lang="ts">
import { hero } from '~/content/home'
import { gsap } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'

const hpA = ref<HTMLElement>()
const hpB = ref<HTMLElement>()
const hpC = ref<HTMLElement>()
let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.to(hpA.value!, {
      y: -18, rotation: 1.5,
      duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut'
    })
    gsap.to(hpB.value!, {
      y: 14, rotation: -1,
      duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8
    })
    gsap.to(hpC.value!, {
      y: -10, x: 4, rotation: 1,
      duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.6
    })

    const photos = [hpA.value!, hpB.value!, hpC.value!]
    photos.forEach((el, i) => {
      const depth = [1, 0.6, 0.85][i]
      el.closest('.hero-photos')?.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent
        const rect = (el.closest('.hero-photos') as HTMLElement).getBoundingClientRect()
        const cx = (me.clientX - rect.left - rect.width  / 2) / rect.width
        const cy = (me.clientY - rect.top  - rect.height / 2) / rect.height
        gsap.to(el, { x: cx * 18 * depth, y: cy * 12 * depth, duration: 0.8, ease: 'power2.out', overwrite: 'auto' })
      })
      el.closest('.hero-photos')?.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 1.2, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' })
      })
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-text">
      <h1 class="hero-h1">
        <span class="hero__line">{{ hero.title }}</span>
        <span class="hero__line hero__line--g">{{ hero.titleHighLight }}</span>
        <span class="hero__line">{{ hero.titleEnd }}</span>
      </h1>
      <p class="hero-sub">{{ hero.description }}</p>
      <div class="hero__actions">
        <a href="#contacto" class="btn-gold">{{ hero.ctaPrimary }} →</a>
        <a href="#portfolio" class="btn-ghost">{{ hero.ctaSecondary }}</a>
      </div>
    </div>

    <div class="hero-photos">
      <div class="hp hp-a" ref="hpA">
        <img src="/images/hero3.webp" alt="Turkey Stand" />
      </div>
      <div class="hp hp-b" ref="hpB">
        <img src="/images/hero2.webp" alt="Armado del Stand de Verdal" />
      </div>
      <div class="hp hp-c" ref="hpC">
        <img src="/images/hero1.webp" alt="Modelado 3D" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── HERO ── */
.hero {
  min-height: 100svh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding: 96px 52px 80px;
  max-width: 1300px;
  margin: 0 auto;
}

.hero-text { display: flex; flex-direction: column; gap: 32px; }

.hero-kicker {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
}

.hero-h1 {
  font-size: clamp(42px, 6.5vw, 108px);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.048em;
}
.hero__line    { display: block; }
.hero__line--g { color: var(--gold); }

.hero-sub {
  font-size: clamp(14px, 1.4vw, 17px);
  color: var(--text);
  line-height: 1.65;
  max-width: 400px;
}

.hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* ── COLLAGE ── */
.hero-photos {
  position: relative;
  height: 560px;
  user-select: none;
}

.hp {
  position: absolute;
  border-radius: var(--r-lg);
  overflow: hidden;
  will-change: transform;
}

.hp img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .6s var(--ease);
}
.hp:hover img { transform: scale(1.05); }

.hp-a { top: 0;   right: 0;  width: 78%; height: 66%; }
.hp-b { bottom: 0; left: 0;  width: 60%; height: 50%; border: 3px solid var(--black); }
.hp-c { bottom: 14%; right: 0; width: 36%; height: 38%; border: 3px solid var(--black); }

.hero-photos::before {
  content: '';
  position: absolute;
  left: -20px; top: 38%;
  width: 3px; height: 22%;
  background: var(--gold);
  border-radius: 2px;
}

/* ── TABLET (≤ 1024px) ── */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 80px 32px 64px;
    gap: 56px;
    min-height: auto;
    padding-top: 120px;
  }

  .hero-photos {
    height: 420px;
    width: 100%;
  }

  .hp-a { width: 72%; height: 64%; }
  .hp-b { width: 55%; height: 50%; }
  .hp-c { width: 38%; height: 40%; }

  .hero-photos::before { display: none; }
}

/* ── MOBILE (≤ 640px) ── */
@media (max-width: 640px) {
  .hero {
    padding: 100px 20px 48px;
    gap: 40px;
  }

  .hero-photos {
    height: 320px;
  }

  .hp-a { width: 80%; height: 62%; top: 0; right: 0; left: auto; }
  .hp-b { width: 58%; height: 48%; bottom: 0; left: 0; }
  .hp-c { display: none; }

  .hero__actions { flex-direction: column; }
  .hero__actions a { text-align: center; }
}
</style>
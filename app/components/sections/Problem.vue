<script setup lang="ts">
import { problemSection } from '~/content/home'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const armadoImages = [
  { src: '/images/standstart.webp', label: 'Pre-ensamble' },
  { src: '/images/standfinal.webp', label: 'Resultado' },
]

onMounted(() => {
  gsap.set('.armado-img', { opacity: 0, y: 24 })
  ScrollTrigger.create({
    trigger: '.armado-grid',
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to('.armado-img', {
        opacity: 1, y: 0,
        duration: 0.9, ease: 'expo.out', stagger: 0.15
      })
    }
  })
})
</script>

<template>
  <section class="s-armado" id="armado">
    <div class="wrap">
      <div class="armado-head">
        <h2 class="dtitle" style="margin-bottom:0">{{ problemSection.title }}<br><em>armamos.</em></h2>
        <p class="armado-desc">{{ problemSection.description }}</p>
      </div>

      <div class="armado-grid">
        <div v-for="(img, i) in armadoImages" :key="i" class="armado-img" :class="`armado-img--${i}`">
          <img :src="img.src" :alt="img.label" loading="lazy" decoding="async" />
          <span class="armado-img-label">{{ img.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.s-armado {
  padding: 120px 0;
  background: var(--black);
}

/* HEAD */
.armado-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 56px;
}

.armado-desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);
  max-width: 380px;
  align-self: end;
}

/* GRID */
.armado-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;
}

.armado-img {
  border-radius: var(--r-md);
  overflow: hidden;
  position: relative;
}

.armado-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .6s var(--ease);
}

.armado-img:hover img {
  transform: scale(1.04);
}

.armado-img--0 {
  aspect-ratio: 3/4;
}

.armado-img--1 {
  aspect-ratio: 3/4;
  margin-top: 48px;
}

.armado-img-label {
  position: absolute;
  bottom: 14px;
  left: 14px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--black);
  background: var(--gold);
  padding: 4px 10px;
  border-radius: 2px;
}

/* ── TABLET (≤ 768px) ── */
@media (max-width: 768px) {
  .s-armado {
    padding: 80px 0;
  }

  .armado-head {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .armado-grid {
    max-width: 600px;
    gap: 12px;
  }

  .armado-img--1 {
    margin-top: 32px;
  }
}

/* ── MOBILE (≤ 540px) ── */
@media (max-width: 540px) {
  .s-armado {
    padding: 64px 0;
  }

  .armado-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 12px;
  }

  .armado-img--0,
  .armado-img--1 {
    aspect-ratio: 4/3;
    margin-top: 0;
  }
}
</style>
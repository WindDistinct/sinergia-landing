<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.render-pair', {
    scrollTrigger: { trigger: '.render-pair', start: 'top 80%' },
    opacity: 0, y: 30, duration: 1, ease: 'expo.out'
  })
})
</script>

<template>
  <section class="s-render" id="render">
    <div class="wrap">
      <h2 class="dtitle">Del render<br><em>a la realidad.</em></h2>
      <div class="render-pair">

        <div class="render-side">
          <div class="render-frame">
            <img src="/images/prestand.webp" alt="Render 3D" loading="lazy" />
          </div>
          <div class="render-label">Render 3D</div>
        </div>

        <div class="render-arrow">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>

        <div class="render-side">
          <div class="render-frame">
            <img src="/images/poststand.webp" alt="Resultado final" loading="lazy" />
          </div>
          <div class="render-label">Resultado final</div>
        </div>

      </div>
      <p class="render-caption">Stand Perupack — ExpoAlimentaria 2023. <strong>Del diseño a la feria en 18
          días.</strong></p>
    </div>
  </section>
</template>

<style scoped>
.s-render {
  padding: 120px 0;
  background: var(--black-soft);
}

.render-pair {
  display: grid;
  grid-template-columns: 1fr 64px 1fr;
  align-items: center;
}

.render-side {
  position: relative;
}

.render-frame {
  border-radius: var(--r-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--black-mid);
}

.render-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.render-label {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background: var(--gold);
  color: var(--black);
  padding: 4px 10px;
  border-radius: 2px;
}

.render-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
}

.render-arrow svg {
  width: 28px;
  height: 28px;
}

.render-caption {
  text-align: center;
  margin-top: 32px;
  font-size: 13px;
  color: var(--light);
  letter-spacing: 0.03em;
}

.render-caption strong {
  color: var(--white);
}

/* ── TABLET (≤ 768px) ── */
@media (max-width: 768px) {
  .s-render {
    padding: 80px 0;
  }

  .render-pair {
    grid-template-columns: 1fr 40px 1fr;
  }

  .render-label {
    font-size: 8px;
    padding: 3px 8px;
    top: 10px;
    left: 10px;
  }
}

/* ── MOBILE (≤ 540px) ── */
@media (max-width: 540px) {
  .s-render {
    padding: 64px 0;
  }

  .render-pair {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 16px;
  }

  .render-arrow {
    padding: 4px 0;
  }

  .render-arrow svg {
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
  }

  .render-caption {
    margin-top: 24px;
    font-size: 12px;
  }
}
</style>
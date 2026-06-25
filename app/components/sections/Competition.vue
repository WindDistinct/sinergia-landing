<script setup lang="ts">
import { competition, mindset, solution } from '~/content/home'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.mindset-before', {
    scrollTrigger: { trigger: '.mindset-before', start: 'top 85%' },
    opacity: 0, y: 40, duration: 1, ease: 'expo.out'
  })
  gsap.from('.mindset-after', {
    scrollTrigger: { trigger: '.mindset-after', start: 'top 85%' },
    opacity: 0, y: 40, duration: 1, ease: 'expo.out', delay: 0.15
  })
})
</script>

<template>
  <section class="s-statement">
    <div class="wrap">
      <h2 class="stmt-title">{{ competition.title }}</h2>
      <p class="stmt-sub">{{ competition.subtitle }}</p>
      <p class="stmt-desc">{{ competition.description }}</p>
    </div>
  </section>

  <section class="s-mindset">
    <div class="wrap">
      <div class="mindset-grid">
        <div class="mindset-before">
          <span class="mindset-label">Antes</span>
          <p class="mindset-line mindset-line--cross">{{ mindset.title }}</p>
        </div>
        <div class="mindset-divider" />
        <div class="mindset-after">
          <span class="mindset-label mindset-label--gold">Ahora</span>
          <p class="mindset-line mindset-line--gold">{{ mindset.description }}</p>
          <p class="mindset-body">{{ solution.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Statement ── */
.s-statement {
  padding: 120px 0 80px;
  background: var(--black);
}

.stmt-title {
  font-size: clamp(40px, 5.5vw, 80px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--white);
  margin-bottom: 24px;
  max-width: 860px;
}

.stmt-sub {
  font-size: clamp(20px, 2.5vw, 32px);
  font-weight: 700;
  color: var(--gold);
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}

.stmt-desc {
  font-size: 15px;
  color: var(--text);
  line-height: 1.7;
  max-width: 520px;
}

/* ── Mindset ── */
.s-mindset {
  padding: 80px 0 120px;
  background: var(--black);
  border-top: 1px solid var(--border);
}

.mindset-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 60px;
  align-items: start;
}

.mindset-divider {
  background: var(--border);
  align-self: stretch;
}

.mindset-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 24px;
}
.mindset-label--gold { color: var(--gold); }

.mindset-line {
  font-size: clamp(28px, 3.5vw, 52px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
}
.mindset-line--cross {
  color: var(--muted);
  text-decoration: line-through;
  text-decoration-color: var(--border-2);
}
.mindset-line--gold { color: var(--gold); margin-bottom: 24px; }

.mindset-body {
  font-size: 15px;
  color: var(--text);
  line-height: 1.7;
  max-width: 420px;
}

@media (max-width: 768px) {
  .mindset-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .mindset-divider { display: none; }
}
</style>
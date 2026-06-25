<script setup lang="ts">
import { methodology } from '~/content/home'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const activeStep = ref(0)

const stepImages = [
    '/images/step1.webp',
    '/images/step2.webp',
    '/images/step3.webp',
    '/images/step4.webp',
]

function activate(i: number) {
    activeStep.value = i
    document.querySelectorAll('.proc-img').forEach((img, j) => {
        gsap.to(img, {
            opacity: j === i ? 1 : 0,
            y: j === i ? 0 : 12,
            duration: 0.5, ease: 'expo.out'
        })
    })
}

onMounted(() => activate(0))
</script>

<template>
    <section class="s-proceso" id="proceso">
        <div class="wrap">
            <h2 class="dtitle">Cómo<br><em>trabajamos.</em></h2>
            <div class="proceso-inner">

                <!-- Steps -->
                <div class="proc-steps">
                    <div v-for="(step, i) in methodology" :key="i" class="proc-step"
                        :class="{ 'proc-step--on': activeStep === i }" @mouseenter="activate(i)">
                        <span class="proc-num">0{{ i + 1 }}</span>
                        <div>
                            <p class="proc-step-title">{{ step.title }}</p>
                            <p class="proc-step-desc">{{ step.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Sticky visual -->
                <div class="proc-visual">
                    <div class="proc-imgs">
                        <div v-for="(img, i) in stepImages" :key="i" class="proc-img">
                            <img :src="img" :alt="`Paso ${i + 1}`" loading="lazy" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.s-proceso {
    padding: 120px 0;
    background: var(--black-soft);
}

.proceso-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.proc-steps {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
}

.proc-step {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 20px;
    align-items: start;
    padding: 28px 0;
    border-bottom: 1px solid var(--border);
    cursor: default;
}

.proc-step:first-child {
    border-top: 1px solid var(--border);
}

.proc-step--on .proc-step-title {
    color: var(--gold);
}

.proc-num {
    font-size: 11px;
    font-weight: 700;
    color: var(--muted);
    padding-top: 6px;
    letter-spacing: 0.08em;
}

.proc-step--on .proc-num {
    color: var(--gold);
}

.proc-step-title {
    font-size: clamp(20px, 2vw, 26px);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 8px;
    color: var(--white);
    transition: color .25s;
}

.proc-step-desc {
    font-size: 13px;
    color: var(--light);
    line-height: 1.65;
    max-width: 320px;
}

.proc-visual {
    position: sticky;
    top: 100px;
}

.proc-imgs {
    position: relative;
    aspect-ratio: 4/3;
}

.proc-img {
    position: absolute;
    inset: 0;
    border-radius: var(--r-lg);
    overflow: hidden;
    opacity: 0;
    will-change: opacity, transform;
}

.proc-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.proc-img:first-child {
    opacity: 1;
}
</style>
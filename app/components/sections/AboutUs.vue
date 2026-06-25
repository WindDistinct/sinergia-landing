<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const logos = [
    { name: 'Rimac', x: 6, y: 14, s: 'lg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rimac_Seguros_logo.svg/320px-Rimac_Seguros_logo.svg.png' },
    { name: 'Bioderma', x: 36, y: 8, s: 'sm', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bioderma.svg/320px-Bioderma.svg.png' },
    { name: 'Perupack', x: 66, y: 12, s: 'md', img: 'https://via.placeholder.com/160x40/0D0D0D/C9B800?text=PERUPACK' },
    { name: 'Ledex', x: 88, y: 22, s: 'sm', img: 'https://via.placeholder.com/130x36/0D0D0D/C9B800?text=LEDEX' },
    { name: 'Century 21', x: 16, y: 52, s: 'sm', img: 'https://via.placeholder.com/150x40/0D0D0D/C9B800?text=CENTURY+21' },
    { name: 'Banco Financiero', x: 44, y: 46, s: 'xl', img: 'https://via.placeholder.com/200x52/0D0D0D/C9B800?text=BANCO+FINANCIERO' },
    { name: 'Verdal', x: 76, y: 50, s: 'md', img: 'https://via.placeholder.com/150x40/0D0D0D/C9B800?text=VERDAL' },
    { name: 'Llamagas', x: 6, y: 80, s: 'md', img: 'https://via.placeholder.com/155x40/0D0D0D/C9B800?text=LLAMAGAS' },
    { name: 'Totalmatrix', x: 34, y: 82, s: 'sm', img: 'https://via.placeholder.com/140x36/0D0D0D/C9B800?text=TOTALMATRIX' },
    { name: 'Port Logistics', x: 62, y: 78, s: 'sm', img: 'https://via.placeholder.com/145x36/0D0D0D/C9B800?text=PORT+LOGISTICS' },
]

onMounted(() => {
    ScrollTrigger.create({
        trigger: '#logosField',
        start: 'top 80%',
        onEnter: () => {
            gsap.from('.lf', {
                opacity: 0, scale: 0.85,
                duration: 0.7, ease: 'expo.out', stagger: 0.05
            })
        }
    })
})
</script>

<template>
    <section class="s-clientes" id="clientes">
        <div class="wrap">
            <h2 class="dtitle">Marcas que<br><em>confiaron.</em></h2>
            <div class="logos-field" id="logosField">
                <div v-for="logo in logos" :key="logo.name" class="lf" :data-s="logo.s"
                    :style="{ left: `${logo.x}%`, top: `${logo.y}%` }">
                    <img :src="logo.img" :alt="logo.name" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.s-clientes {
    padding: 100px 0;
    background: var(--black);
}

.logos-field {
    position: relative;
    height: 480px;
}

.lf {
    position: absolute;
    transform: translate(-50%, -50%);
    opacity: 0.25;
    transition: opacity .25s, filter .25s;
    filter: grayscale(100%) brightness(1.5);
}

.lf:hover {
    opacity: 1;
    filter: none;
}

.lf img {
    display: block;
}

.lf[data-s="sm"] img {
    height: 28px;
}

.lf[data-s="md"] img {
    height: 36px;
}

.lf[data-s="lg"] img {
    height: 44px;
}

.lf[data-s="xl"] img {
    height: 56px;
}
</style>
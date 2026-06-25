<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Contáctanos', to: '/contact' },
]

function onScroll() {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
    <nav id="nav" :class="{ scrolled: isScrolled }">
        <div class="nav-inner">
            <NuxtLink to="/" class="nav-logo">SINERGIA<em>—</em></NuxtLink>

            <ul class="nav-links">
                <li v-for="link in links" :key="link.to">
                    <a :href="link.to">{{ link.label }}</a>
                </li>
            </ul>

            <a href="#contacto" class="nav-cta">Cotizar stand</a>

            <button id="burger" class="nav-burger" :class="{ open: menuOpen }" aria-label="Menú"
                @click="menuOpen = !menuOpen">
                <span /><span /><span />
            </button>
        </div>

        <div id="drawer" class="nav-drawer" :class="{ open: menuOpen }">
            <a v-for="link in links" :key="link.to" :href="link.to" @click="menuOpen = false">
                {{ link.label }}
            </a>
            <a href="/#contacto" @click="menuOpen = false">Cotizar stand</a>
        </div>
    </nav>
</template>

<style scoped>
#nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    height: 64px;
    border-bottom: 1px solid transparent;
    background: transparent;
    transition: background .4s, border-color .4s;
}

#nav.scrolled {
    background: rgba(13, 13, 13, 0.94);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-color: var(--border);
}

.nav-inner {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 52px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
}

.nav-logo {
    font-size: 16px;
    font-weight: 900;
    letter-spacing: -0.02em;
    flex-shrink: 0;
}

.nav-logo em {
    font-style: normal;
    color: var(--gold);
}

.nav-links {
    display: flex;
    gap: 36px;
    margin-left: auto;
}

.nav-links a {
    font-size: 12px;
    font-weight: 600;
    color: var(--light);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: color .15s;
}

.nav-links a:hover {
    color: var(--white);
}

.nav-cta {
    display: inline-block;
    padding: 9px 20px;
    background: var(--gold);
    color: var(--black);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
    border-radius: var(--r);
    flex-shrink: 0;
    transition: opacity .15s;
}

.nav-cta:hover {
    opacity: .85;
}

.nav-burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    margin-left: auto;
}

.nav-burger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--white);
    border-radius: 2px;
    transition: transform .25s var(--ease), opacity .2s;
}

.nav-burger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.nav-burger.open span:nth-child(2) {
    opacity: 0;
}

.nav-burger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

.nav-drawer {
    display: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s var(--ease);
    background: var(--black-mid);
    border-top: 1px solid var(--border);
}

.nav-drawer.open {
    max-height: 300px;
}

.nav-drawer a {
    display: block;
    padding: 14px 52px;
    font-size: 14px;
    font-weight: 700;
    color: var(--light);
    border-bottom: 1px solid var(--border);
    transition: color .15s;
}

.nav-drawer a:hover {
    color: var(--white);
}

/* ── TABLET (≤ 860px) ── */
@media (max-width: 860px) {
    .nav-inner {
        padding: 0 32px;
        gap: 24px;
    }

    .nav-links {
        gap: 24px;
    }
}

/* ── MÓVIL (≤ 640px) ── */
@media (max-width: 640px) {
    .nav-inner {
        padding: 0 20px;
        gap: 0;
    }

    .nav-links,
    .nav-cta {
        display: none;
    }

    .nav-burger {
        display: flex;
    }

    .nav-drawer {
        display: block;
    }

    .nav-drawer a {
        padding: 14px 20px;
    }
}
</style>
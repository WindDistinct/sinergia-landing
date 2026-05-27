<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
    { label: 'Inicio',      to: '/'          },
    { label: 'Portafolio',  to: '/portfolio' },
    { label: 'Contacto',    to: '/contact'   },
]
</script>

<template>
    <nav class="navbar">
        <div class="navbar__inner">

            <!-- Logo -->
            <NuxtLink to="/" class="navbar__logo">
                SINERGIA<span class="navbar__logo-dash">—</span>
            </NuxtLink>

            <!-- Desktop links -->
            <ul class="navbar__links">
                <li v-for="link in links" :key="link.to">
                    <NuxtLink
                        :to="link.to"
                        class="navbar__link"
                        active-class="navbar__link--active"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>

            <!-- CTA desktop -->
            <NuxtLink to="/contact" class="navbar__cta">
                Conversemos
            </NuxtLink>

            <!-- Hamburger mobile -->
            <button
                class="navbar__hamburger"
                :class="{ 'is-open': menuOpen }"
                aria-label="Abrir menú"
                @click="menuOpen = !menuOpen"
            >
                <span /><span /><span />
            </button>

        </div>

        <!-- Mobile menu -->
        <div class="navbar__mobile" :class="{ 'is-open': menuOpen }">
            <ul class="navbar__mobile-links">
                <li v-for="link in links" :key="link.to">
                    <NuxtLink
                        :to="link.to"
                        class="navbar__mobile-link"
                        active-class="navbar__link--active"
                        @click="menuOpen = false"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/contact"
                        class="navbar__cta navbar__cta--mobile"
                        @click="menuOpen = false"
                    >
                        Conversemos
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--color-black);
    border-bottom: 1px solid var(--color-border);
}

.navbar__inner {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
    height: 64px;
    display: flex;
    align-items: center;
    gap: var(--space-lg);
}

/* Logo */
.navbar__logo {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    text-decoration: none;
    letter-spacing: -0.02em;
    flex-shrink: 0;
}

.navbar__logo-dash {
    color: var(--color-accent);
}

/* Desktop links */
.navbar__links {
    display: flex;
    list-style: none;
    gap: var(--space-lg);
    margin: 0;
    padding: 0;
    margin-left: auto;
}

.navbar__link {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-muted);
    text-decoration: none;
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    transition: color var(--transition-fast);
}

.navbar__link:hover,
.navbar__link--active {
    color: var(--color-white);
}

/* CTA button */
.navbar__cta {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background-color: var(--color-accent);
    color: var(--color-black);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: opacity var(--transition-fast);
    flex-shrink: 0;
}

.navbar__cta:hover {
    opacity: 0.85;
}

/* Hamburger */
.navbar__hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-xs);
    margin-left: auto;
}

.navbar__hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-white);
    transition: transform var(--transition-base), opacity var(--transition-base);
}

.navbar__hamburger.is-open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger.is-open span:nth-child(2) {
    opacity: 0;
}
.navbar__hamburger.is-open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.navbar__mobile {
    display: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
    background-color: var(--color-black-soft);
    border-top: 1px solid var(--color-border);
}

.navbar__mobile.is-open {
    max-height: 400px;
}

.navbar__mobile-links {
    list-style: none;
    margin: 0;
    padding: var(--space-sm) var(--container-padding) var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.navbar__mobile-link {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-muted);
    text-decoration: none;
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    transition: color var(--transition-fast);
}

.navbar__mobile-link:hover,
.navbar__link--active {
    color: var(--color-white);
}

.navbar__cta--mobile {
    display: inline-block;
    margin-top: var(--space-xs);
}

/* Responsive */
@media (max-width: 768px) {
    .navbar__links,
    .navbar__cta:not(.navbar__cta--mobile) {
        display: none;
    }

    .navbar__hamburger {
        display: flex;
    }

    .navbar__mobile {
        display: block;
    }
}
</style>
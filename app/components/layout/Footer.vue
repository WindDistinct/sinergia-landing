<script setup lang="ts">
import { contact } from '~/content/home'
</script>

<template>
    <footer class="footer">
        <div class="footer__inner">

            <!-- Brand -->
            <div class="footer__brand">
                <span class="footer__logo">
                    SINERGIA<span class="footer__logo-dash">—</span>
                </span>
                <p class="footer__tagline">
                    Stands · Ferias · Activaciones · Merchandising
                </p>
            </div>

            <!-- Nav -->
            <nav class="footer__nav">
                <NuxtLink to="/"          class="footer__link">Inicio</NuxtLink>
                <NuxtLink to="/portfolio" class="footer__link">Portafolio</NuxtLink>
                <NuxtLink to="/contact"   class="footer__link">Contacto</NuxtLink>
            </nav>

            <!-- Contact -->
            <div class="footer__contact">
                <a :href="`tel:${contact.phone}`" class="footer__contact-item">
                    {{ contact.phone }}
                </a>
                <a :href="`mailto:${contact.email}`" class="footer__contact-item">
                    {{ contact.email }}
                </a>
                <span class="footer__contact-item footer__contact-item--address">
                    {{ contact.address }}
                </span>
            </div>

        </div>

        <div class="footer__bottom">
            <p>© {{ new Date().getFullYear() }} Sinergia. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: var(--color-black-soft);
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-xl);
}

.footer__inner {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--container-padding) var(--space-lg);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-lg);
}

/* Brand */
.footer__logo {
    display: block;
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-xs);
}

.footer__logo-dash {
    color: var(--color-accent);
}

.footer__tagline {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Nav */
.footer__nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.footer__link {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-muted);
    text-decoration: none;
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    transition: color var(--transition-fast);
}

.footer__link:hover {
    color: var(--color-white);
}

/* Contact */
.footer__contact {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.footer__contact-item {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);
    line-height: var(--line-height-normal);
}

a.footer__contact-item:hover {
    color: var(--color-accent);
}

.footer__contact-item--address {
    color: var(--color-gray-mid);
}

/* Bottom bar */
.footer__bottom {
    border-top: 1px solid var(--color-border);
    padding: var(--space-sm) var(--container-padding);
    max-width: var(--container-width);
    margin: 0 auto;
    text-align: center;
}

.footer__bottom p {
    font-size: var(--font-size-xs);
    color: var(--color-gray-mid);
}

/* Responsive */
@media (max-width: 768px) {
    .footer__inner {
        grid-template-columns: 1fr;
        gap: var(--space-md);
    }
}
</style>
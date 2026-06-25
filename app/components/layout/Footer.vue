<script setup lang="ts">
import { contact } from '~/content/home'

const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="wrap">
            <div class="ft-grid">

                <div class="ft-brand">
                    <p class="ft-logo">SINERGIA<em>—</em></p>
                    <p class="ft-tagline">Stands · Activaciones de marca<br>Merchandising corporativo · Lima, Perú</p>
                </div>

                <nav class="ft-nav">
                    <a href="#portfolio">Proyectos</a>
                    <a href="#proceso">Proceso</a>
                    <a href="#clientes">Clientes</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#contacto">Contacto</a>
                </nav>

                <div class="ft-contact">
                    <a href="https://instagram.com/sinergiasmc" target="_blank" rel="noopener" class="ft-ig">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.8" />
                            <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                        @sinergiasmc
                    </a>
                    <a :href="`tel:${contact.phone}`" class="ft-contact-link">{{ contact.phone }}</a>
                    <a :href="`mailto:${contact.email}`" class="ft-contact-link">{{ contact.email }}</a>
                    <span>{{ contact.address }}</span>
                </div>

            </div>

            <div class="ft-bottom">
                <p class="ft-copy">© {{ year }} Sinergia. Todos los derechos reservados.</p>
                <a href="https://bluelynk.dev" target="_blank" rel="noopener" class="powerdby">
                    <span>Powered by</span>
                    <img src="/images/BlueLynk-horizontal-azul.png" alt="Blue Lynk">
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: var(--black-mid);
    border-top: 1px solid var(--border);
    padding: 60px 0 32px;
}

.ft-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 60px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 28px;
}

.ft-logo {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -.025em;
    margin-bottom: 8px;
}

.ft-logo em {
    font-style: normal;
    color: var(--gold);
}

.ft-tagline {
    font-size: 12px;
    color: var(--light);
    line-height: 1.6;
    margin-top: 6px;
}

.ft-nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.ft-nav a {
    font-size: 13px;
    color: var(--light);
    transition: color .15s;
}

.ft-nav a:hover {
    color: var(--white);
}

.ft-contact {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.ft-ig {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
    color: var(--light);
    transition: color .15s;
    margin-bottom: 4px;
}

.ft-ig svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

.ft-ig:hover {
    color: var(--white);
}

.ft-contact a,
.ft-contact span {
    font-size: 12px;
    color: var(--light);
    transition: color .15s;
    line-height: 1.5;
}

a.ft-contact-link:hover {
    color: var(--white);
}

.ft-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
}

.ft-copy {
    font-size: 11px;
    color: var(--light);
}

.powerdby {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
}

.powerdby span {
    color: var(--light);
}

.powerdby:hover span {
    color: var(--white);
}

.powerdby img {
    width: 200px;
    height: auto;
}

/* ── TABLET (≤ 768px) ── */
@media (max-width: 768px) {
    .ft-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    .ft-brand {
        grid-column: 1 / -1;
        /* ocupa todo el ancho */
    }
}

/* ── MOBILE (≤ 480px) ── */
@media (max-width: 480px) {
    .footer {
        padding: 48px 0 24px;
    }

    .ft-grid {
        grid-template-columns: 1fr;
        gap: 36px;
        padding-bottom: 36px;
    }

    .ft-brand {
        grid-column: auto;
    }

    .ft-nav {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px 20px;
    }

    .ft-bottom {
        justify-content: center;
        text-align: center;
    }

    .powerdby {
        align-items: center;
    }

    .ft-grid, .ft-nav, .ft-ig {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}
</style>
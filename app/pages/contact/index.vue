<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import { seo } from '~/content/seo'
import { contact } from '~/content/home'

useSEO(seo.contact)

const form = reactive({
    name:     '',
    company:  '',
    email:    '',
    phone:    '',
    service:  '',
    message:  '',
})

const services = [
    'Stands y ferias',
    'Activaciones de marca',
    'Merchandising (Crealab)',
    'Todos los anteriores',
]

const submitted = ref(false)
const loading   = ref(false)

async function handleSubmit() {
    loading.value = true
    // Replace with your actual form submission logic (e.g. fetch, EmailJS, Formspree)
    await new Promise(r => setTimeout(r, 1000))
    submitted.value = true
    loading.value   = false
}
</script>

<template>
    <div class="contact-page">

        <!-- Hero -->
        <section class="contact-page__hero">
            <div class="contact-page__glow" />
            <LayoutContainer size="narrow">
                <div class="contact-page__hero-content">
                    <p class="contact-page__label">Contacto</p>
                    <h1 class="contact-page__title">Conversemos</h1>
                    <p class="contact-page__subtitle">
                        Cuéntanos sobre tu próximo evento y diseñamos
                        juntos la experiencia perfecta para tu marca.
                    </p>
                </div>
            </LayoutContainer>
        </section>

        <!-- Body -->
        <section class="contact-page__body">
            <LayoutContainer>
                <div class="contact-page__inner">

                    <!-- Left: form -->
                    <div class="contact-page__form-wrap">

                        <!-- Success state -->
                        <div v-if="submitted" class="contact-page__success">
                            <span class="contact-page__success-icon">✓</span>
                            <h2 class="contact-page__success-title">¡Mensaje enviado!</h2>
                            <p class="contact-page__success-text">
                                Nos pondremos en contacto contigo muy pronto.
                            </p>
                        </div>

                        <!-- Form -->
                        <div v-else class="contact-page__form" @submit.prevent="handleSubmit">

                            <div class="contact-page__row">
                                <div class="contact-page__field">
                                    <label class="contact-page__field-label" for="name">
                                        Nombre *
                                    </label>
                                    <input
                                        id="name"
                                        v-model="form.name"
                                        type="text"
                                        class="contact-page__input"
                                        placeholder="Tu nombre completo"
                                        required
                                    />
                                </div>

                                <div class="contact-page__field">
                                    <label class="contact-page__field-label" for="company">
                                        Empresa
                                    </label>
                                    <input
                                        id="company"
                                        v-model="form.company"
                                        type="text"
                                        class="contact-page__input"
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>
                            </div>

                            <div class="contact-page__row">
                                <div class="contact-page__field">
                                    <label class="contact-page__field-label" for="email">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        class="contact-page__input"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>

                                <div class="contact-page__field">
                                    <label class="contact-page__field-label" for="phone">
                                        Teléfono
                                    </label>
                                    <input
                                        id="phone"
                                        v-model="form.phone"
                                        type="tel"
                                        class="contact-page__input"
                                        placeholder="+51 999 999 999"
                                    />
                                </div>
                            </div>

                            <div class="contact-page__field">
                                <label class="contact-page__field-label" for="service">
                                    Servicio de interés *
                                </label>
                                <select
                                    id="service"
                                    v-model="form.service"
                                    class="contact-page__input contact-page__select"
                                    required
                                >
                                    <option value="" disabled>Selecciona un servicio</option>
                                    <option
                                        v-for="s in services"
                                        :key="s"
                                        :value="s"
                                    >
                                        {{ s }}
                                    </option>
                                </select>
                            </div>

                            <div class="contact-page__field">
                                <label class="contact-page__field-label" for="message">
                                    Cuéntanos sobre tu proyecto *
                                </label>
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    class="contact-page__input contact-page__textarea"
                                    placeholder="¿Qué evento tienes en mente? ¿Cuándo? ¿Cuántos m²?"
                                    rows="5"
                                    required
                                />
                            </div>

                            <button
                                type="button"
                                class="contact-page__submit"
                                :disabled="loading"
                                @click="handleSubmit"
                            >
                                <span v-if="loading">Enviando…</span>
                                <span v-else>Enviar mensaje</span>
                            </button>

                        </div>
                    </div>

                    <!-- Right: info -->
                    <div class="contact-page__info">

                        <div class="contact-page__info-block">
                            <p class="contact-page__info-label">Teléfono</p>
                            <a
                                :href="`tel:${contact.phone}`"
                                class="contact-page__info-value contact-page__info-link"
                            >
                                {{ contact.phone }}
                            </a>
                        </div>

                        <div class="contact-page__info-block">
                            <p class="contact-page__info-label">Email</p>
                            <a
                                :href="`mailto:${contact.email}`"
                                class="contact-page__info-value contact-page__info-link"
                            >
                                {{ contact.email }}
                            </a>
                        </div>

                        <div class="contact-page__info-block">
                            <p class="contact-page__info-label">Dirección</p>
                            <p class="contact-page__info-value">{{ contact.address }}</p>
                        </div>

                        <div class="contact-page__info-block">
                            <p class="contact-page__info-label">Servicios</p>
                            <ul class="contact-page__service-list">
                                <li
                                    v-for="s in services.slice(0, 3)"
                                    :key="s"
                                    class="contact-page__service-item"
                                >
                                    <span class="contact-page__service-dot" />
                                    {{ s }}
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </LayoutContainer>
        </section>

    </div>
</template>

<style scoped>
.contact-page {
    background-color: var(--color-black);
    min-height: 100vh;
}

/* Hero */
.contact-page__hero {
    position: relative;
    padding: var(--space-xl) 0 var(--space-lg);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
}

.contact-page__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 60% 80% at 50% 100%,
        rgba(201, 184, 0, 0.07) 0%,
        transparent 70%
    );
    pointer-events: none;
}

.contact-page__hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.contact-page__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-sm);
}

.contact-page__title {
    font-size: clamp(2.5rem, 6vw, var(--font-size-5xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-sm);
}

.contact-page__subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
    max-width: 480px;
    margin: 0 auto;
}

/* Body */
.contact-page__body {
    padding: var(--space-xl) 0;
}

.contact-page__inner {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: var(--space-xl);
    align-items: start;
}

/* Form */
.contact-page__form-wrap {
    background-color: var(--color-black-soft);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
}

.contact-page__form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.contact-page__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
}

.contact-page__field {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.contact-page__field-label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-text-muted);
}

.contact-page__input {
    background-color: var(--color-black);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-white);
    font-size: var(--font-size-md);
    font-family: var(--font-family);
    padding: 0.75rem 1rem;
    width: 100%;
    outline: none;
    transition: border-color var(--transition-fast);
    appearance: none;
}

.contact-page__input::placeholder {
    color: var(--color-gray-mid);
}

.contact-page__input:focus {
    border-color: var(--color-accent);
}

.contact-page__select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A5A5A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
}

.contact-page__select option {
    background-color: var(--color-black-soft);
    color: var(--color-white);
}

.contact-page__textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-page__submit {
    padding: 0.9rem 2rem;
    background-color: var(--color-accent);
    color: var(--color-black);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: opacity var(--transition-fast), transform var(--transition-fast);
    align-self: flex-start;
}

.contact-page__submit:hover:not(:disabled) {
    opacity: 0.85;
    transform: translateY(-1px);
}

.contact-page__submit:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Success */
.contact-page__success {
    text-align: center;
    padding: var(--space-xl) var(--space-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
}

.contact-page__success-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--color-accent);
    color: var(--color-black);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-black);
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-page__success-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
}

.contact-page__success-text {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: var(--line-height-loose);
}

/* Right: info panel */
.contact-page__info {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    position: sticky;
    top: calc(64px + var(--space-lg));
}

.contact-page__info-block {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
}

.contact-page__info-block:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.contact-page__info-label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-gray-mid);
}

.contact-page__info-value {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    line-height: var(--line-height-normal);
}

.contact-page__info-link {
    text-decoration: none;
    transition: color var(--transition-fast);
}

.contact-page__info-link:hover {
    color: var(--color-accent);
}

/* Service list */
.contact-page__service-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.contact-page__service-item {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

.contact-page__service-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-accent);
    flex-shrink: 0;
}

/* Responsive */
@media (max-width: 900px) {
    .contact-page__inner {
        grid-template-columns: 1fr;
    }

    .contact-page__info {
        position: static;
        border-top: 1px solid var(--color-border);
        padding-top: var(--space-lg);
    }
}

@media (max-width: 560px) {
    .contact-page__row {
        grid-template-columns: 1fr;
    }
}
</style>
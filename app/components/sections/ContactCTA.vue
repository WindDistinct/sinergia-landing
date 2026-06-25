<script setup lang="ts">
import { contact } from '~/content/home'
import { ref } from 'vue'

const submitted = ref(false)
const sending = ref(false)
const form = ref({ name: '', company: '', email: '', phone: '', message: '' })

function submit() {
    if (!form.value.name || !form.value.email || !form.value.message) return
    sending.value = true
    setTimeout(() => { sending.value = false; submitted.value = true }, 1000)
}
</script>

<template>
    <section class="s-contacto" id="contacto">
        <div class="wrap">
            <div class="cto-grid">

                <div class="cto-left">
                    <h2 class="cto-title">¿Tienes un<br>evento<br><em>próximo?</em></h2>
                    <p class="cto-sub">Cuéntanos el evento, la fecha y los metros cuadrados. Respondemos en menos de 24
                        h.</p>
                    <div class="cto-info">
                        <a :href="`tel:${contact.phone}`" class="cto-link">
                            <svg viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M2 3.5A1.5 1.5 0 013.5 2h2.382a1 1 0 01.894.553l1.447 2.894a1 1 0 01-.26 1.176L6.5 7.5a11.054 11.054 0 005 5l.877-1.463a1 1 0 011.176-.26l2.894 1.447A1 1 0 0117 13.118V15.5A1.5 1.5 0 0115.5 17C8.044 17 2 10.956 2 3.5z"
                                    stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            {{ contact.phone }}
                        </a>
                        <a :href="`mailto:${contact.email}`" class="cto-link">
                            <svg viewBox="0 0 20 20" fill="none">
                                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor"
                                    stroke-width="1.5" />
                                <path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </svg>
                            {{ contact.email }}
                        </a>
                        <span class="cto-link">
                            <svg viewBox="0 0 20 20" fill="none">
                                <path d="M10 2C7.239 2 5 4.239 5 7c0 3.5 5 11 5 11s5-7.5 5-11c0-2.761-2.239-5-5-5z"
                                    stroke="currentColor" stroke-width="1.5" />
                                <circle cx="10" cy="7" r="1.5" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            {{ contact.address }}
                        </span>
                    </div>
                </div>

                <div class="cto-form">
                    <div class="frow">
                        <label class="ff">
                            <span>Nombre *</span>
                            <input v-model="form.name" type="text" placeholder="Tu nombre" required />
                        </label>
                        <label class="ff">
                            <span>Empresa</span>
                            <input v-model="form.company" type="text" placeholder="Empresa" />
                        </label>
                    </div>
                    <label class="ff">
                        <span>Email *</span>
                        <input v-model="form.email" type="email" placeholder="tu@email.com" required />
                    </label>
                    <label class="ff">
                        <span>Teléfono</span>
                        <input v-model="form.phone" type="tel" placeholder="+51 999 999 999" />
                    </label>
                    <label class="ff">
                        <span>Cuéntanos tu evento *</span>
                        <textarea v-model="form.message" rows="4" placeholder="¿Qué feria? ¿Cuándo? ¿Metros cuadrados?"
                            required />
                    </label>
                    <button class="f-submit" :class="{ sent: submitted }" :disabled="sending || submitted"
                        @click="submit">
                        {{ submitted ? '¡Mensaje enviado!' : sending ? 'Enviando…' : 'Enviar solicitud' }}
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.s-contacto {
    padding: 120px 0;
    background: var(--black);
}

.cto-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.cto-title {
    font-size: clamp(38px, 5vw, 84px);
    font-weight: 900;
    line-height: 0.93;
    letter-spacing: -0.045em;
    margin-bottom: 24px;
}

.cto-title em {
    font-style: normal;
    color: var(--gold);
}

.cto-sub {
    font-size: 15px;
    color: var(--light);
    line-height: 1.7;
    margin-bottom: 44px;
    max-width: 360px;
}

.cto-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.cto-link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: var(--light);
    transition: color .15s;
}

a.cto-link:hover {
    color: var(--white);
}

.cto-link svg {
    width: 16px;
    height: 16px;
    color: var(--gold);
    flex-shrink: 0;
}

/* ── FORM ── */
.cto-form {
    background: var(--black-mid);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.frow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}

.ff {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.ff span {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--muted);
}

.ff input,
.ff textarea {
    background: var(--black);
    border: 1px solid var(--border-2);
    border-radius: var(--r);
    color: var(--white);
    font-size: 14px;
    padding: 12px 14px;
    width: 100%;
    outline: none;
    -webkit-appearance: none;
    transition: border-color .15s;
}

.ff input::placeholder,
.ff textarea::placeholder {
    color: var(--muted);
}

.ff input:focus,
.ff textarea:focus {
    border-color: var(--gold);
}

.ff textarea {
    resize: vertical;
    min-height: 96px;
}

.f-submit {
    background: var(--gold);
    color: var(--black);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
    padding: 16px 24px;
    border-radius: var(--r);
    cursor: pointer;
    transition: opacity .2s, background .2s;
    width: 100%;
}

.f-submit:hover:not(:disabled) {
    opacity: 0.85;
}

.f-submit:disabled {
    opacity: 0.5;
    cursor: default;
}

.f-submit.sent {
    background: var(--border);
    color: var(--muted);
}

/* ── TABLET (≤ 900px) ── */
@media (max-width: 900px) {
    .s-contacto {
        padding: 80px 0;
    }

    .cto-grid {
        grid-template-columns: 1fr;
        gap: 48px;
    }

    .cto-title {
        font-size: clamp(38px, 8vw, 64px);
    }

    .cto-sub {
        margin-bottom: 28px;
    }
}

/* ── MOBILE (≤ 540px) ── */
@media (max-width: 540px) {
    .s-contacto {
        padding: 64px 0;
    }

    .cto-form {
        padding: 24px 20px;
        border-radius: var(--r);
    }

    /* Nombre y empresa apilados */
    .frow {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}
</style>
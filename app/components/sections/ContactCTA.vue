<script setup lang="ts">
import { cta, contact } from '~/content/home'
</script>

<template>
    <section class="contact-cta">

        <div class="contact-cta__glow" />

        <LayoutContainer size="narrow">
            <div class="contact-cta__content">

                <p class="contact-cta__label">Hablemos</p>

                <h2 class="contact-cta__title">
                    {{ cta.title }}
                </h2>

                <p class="contact-cta__description">
                    {{ cta.description }}
                </p>

                <NuxtLink to="/contact" class="contact-cta__btn">
                    {{ cta.button }}
                </NuxtLink>

                <!-- Contact details -->
                <div class="contact-cta__details">
                    <a :href="`tel:${contact.phone}`" class="contact-cta__detail">
                        <span class="contact-cta__detail-icon">📞</span>
                        {{ contact.phone }}
                    </a>
                    <span class="contact-cta__detail-sep">·</span>
                    <a :href="`mailto:${contact.email}`" class="contact-cta__detail">
                        <span class="contact-cta__detail-icon">✉</span>
                        {{ contact.email }}
                    </a>
                </div>

            </div>
        </LayoutContainer>

    </section>
</template>

<style scoped>
.contact-cta {
    position: relative;
    padding: var(--space-2xl) 0;
    background-color: var(--color-black);
    overflow: hidden;
}

.contact-cta__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 70% 60% at 50% 50%,
        rgba(201, 184, 0, 0.10) 0%,
        transparent 70%
    );
    pointer-events: none;
}

.contact-cta__content {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
}

.contact-cta__label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    color: var(--color-accent);
}

.contact-cta__title {
    font-size: clamp(2rem, 5vw, var(--font-size-4xl));
    font-weight: var(--font-weight-black);
    color: var(--color-white);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
    max-width: 580px;
}

.contact-cta__description {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-accent);
    line-height: var(--line-height-normal);
}

.contact-cta__btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: var(--color-accent);
    color: var(--color-black);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-black);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    text-decoration: none;
    border-radius: var(--radius-sm);
    margin-top: var(--space-sm);
    transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.contact-cta__btn:hover {
    opacity: 0.85;
    transform: translateY(-2px);
}

/* Contact details row */
.contact-cta__details {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
    justify-content: center;
    margin-top: var(--space-sm);
}

.contact-cta__detail {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.contact-cta__detail:hover {
    color: var(--color-white);
}

.contact-cta__detail-icon {
    font-size: var(--font-size-md);
}

.contact-cta__detail-sep {
    color: var(--color-border);
    font-size: var(--font-size-lg);
}

/* Responsive */
@media (max-width: 480px) {
    .contact-cta__details {
        flex-direction: column;
        gap: var(--space-sm);
    }

    .contact-cta__detail-sep {
        display: none;
    }
}
</style>
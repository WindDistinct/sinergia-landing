<script setup lang="ts">
import { helpSection, helpItems } from '~/content/home'
</script>

<template>
    <section class="s-help">
        <div class="wrap">
            <div class="help-inner">
                <div class="help-left">
                    <span class="help-kicker">Lo que logramos</span>
                    <h2 class="dtitle" style="margin-bottom: 32px">{{ helpSection.title }}</h2>
                    <a href="#contacto" class="btn-gold">Empecemos →</a>
                </div>
                <div class="help-right">
                    <div v-for="(item, i) in helpItems" :key="i" class="help-item">
                        <span class="help-num">0{{ i + 1 }}</span>
                        <div>
                            <h3 class="help-title">{{ item.title }}</h3>
                            <p class="help-desc">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.s-help {
    padding: 120px 0;
    background: var(--black);
    border-top: 1px solid var(--border);
}

.help-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.help-kicker {
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 28px;
}

.help-right {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
}

.help-item {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 20px;
    padding: 28px 0;
    border-bottom: 1px solid var(--border);
}

.help-item:first-child {
    border-top: 1px solid var(--border);
}

.help-num {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;
    color: var(--gold);
    padding-top: 6px;
}

.help-title {
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 900;
    letter-spacing: -0.03em;
    color: var(--white);
    margin-bottom: 6px;
}

.help-desc {
    font-size: 13px;
    color: var(--light);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .help-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}
</style>
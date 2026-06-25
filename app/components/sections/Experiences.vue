<script setup lang="ts">
import { experienceLevels, helpItems } from '~/content/home'
</script>

<template>
    <!-- NIVELES — editorial list style, not cards -->
    <section class="s-niveles" id="niveles">
        <div class="wrap">
            <span class="niv-kicker">Niveles de servicio</span>
            <h2 class="dtitle">Elegí el<br><em>impacto</em><br>que buscás.</h2>

            <div class="niv-list">
                <div v-for="(level, i) in experienceLevels" :key="i" class="niv-item"
                    :class="{ 'niv-item--featured': level.featured }">
                    <div class="niv-meta">
                        <span class="niv-num">0{{ i + 1 }}</span>
                        <span v-if="level.featured" class="niv-badge">Más elegido</span>
                    </div>
                    <div class="niv-content">
                        <h3 class="niv-name">{{ level.name }}</h3>
                        <p class="niv-desc">{{ level.description }}</p>
                    </div>
                    <div class="niv-includes">
                        <span v-for="(inc, j) in level.includes" :key="j" class="niv-tag">{{ inc }}</span>
                    </div>
                    <div class="niv-results">
                        <span v-for="(res, k) in level.result" :key="k" class="niv-result">→ {{ res }}</span>
                    </div>
                    <a href="#contacto" class="niv-cta">Quiero este nivel →</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.s-niveles {
    padding: 120px 0;
    background: var(--black-soft);
}

.niv-kicker {
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 28px;
}

.niv-list {
    display: flex;
    flex-direction: column;
}

.niv-item {
    display: grid;
    grid-template-columns: 60px 1fr 1fr 1fr auto;
    gap: 32px;
    align-items: center;
    padding: 40px 0;
    border-bottom: 1px solid var(--border);
    transition: background .2s;
}

.niv-item:first-child {
    border-top: 1px solid var(--border);
}

.niv-item:hover {
    background: var(--gold-faint);
}

.niv-item--featured {
    border-left: 2px solid var(--gold);
    padding-left: 24px;
}

.niv-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.niv-num {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;
    color: var(--gold);
}

.niv-badge {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    background: var(--gold);
    color: var(--black);
    padding: 2px 6px;
    border-radius: 2px;
    white-space: nowrap;
}

.niv-name {
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 900;
    letter-spacing: -0.03em;
    color: var(--white);
    margin-bottom: 6px;
}

.niv-desc {
    font-size: 13px;
    color: var(--light);
    line-height: 1.5;
}

.niv-includes {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.niv-tag {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--muted);
    border: 1px solid var(--border-2);
    border-radius: 2px;
    padding: 4px 8px;
}

.niv-results {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.niv-result {
    font-size: 12px;
    font-weight: 700;
    color: var(--light);
    letter-spacing: 0.04em;
}

.niv-item--featured .niv-result {
    color: var(--gold);
}

.niv-cta {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--gold);
    white-space: nowrap;
    transition: opacity .15s;
}

.niv-cta:hover {
    opacity: 0.7;
}

@media (max-width: 900px) {
    .niv-item {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .niv-item--featured {
        padding-left: 0;
        border-left: none;
        border-top: 2px solid var(--gold);
    }
}
</style>
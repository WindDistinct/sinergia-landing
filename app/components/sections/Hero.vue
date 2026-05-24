<script setup lang="ts">
import { hero } from '~/content/home'
</script>

<template>
<section>

<h1>
{{ hero.title }}
</h1>

<p>
{{ hero.subtitle }}
</p>

<p>
{{ hero.description }}
</p>

<Button>
{{ hero.ctaPrimary }}
</Button>

<Button>
{{ hero.ctaSecondary }}
</Button>

</section>
</template>
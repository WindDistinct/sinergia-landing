<script setup lang="ts">
import {
experienceSection,
experienceLevels
}
from '~/content/home'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<template>

<section>

<SectionTitle
:title="experienceSection.title"
/>

<Card
v-for="item in experienceLevels"
:key="item.name"
>

<h3>
{{ item.name }}
</h3>

<p>
{{ item.description }}
</p>

<ul>

<li
v-for="include in item.includes"
:key="include"
>

{{ include }}

</li>

</ul>

</Card>

</section>

</template>
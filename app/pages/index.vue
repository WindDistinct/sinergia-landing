<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import Hero from '~/components/sections/Hero.vue'
import Competition from '~/components/sections/Competition.vue'
import Problem from '~/components/sections/Problem.vue'
import Mindset from '~/components/sections/Mindset.vue'
import AboutUs from '~/components/sections/AboutUs.vue'
import Methodology from '~/components/sections/Methodology.vue'
import WhatWeDo from '~/components/sections/WhatWeDo.vue'
import Differentiator from '~/components/sections/Differentiator.vue'
import Portfolio from '~/components/sections/Portfolio.vue'
import Experiences from '~/components/sections/Experiences.vue'
import HowWeHelp from '~/components/sections/HowWeHelp.vue'
import ContactCTA from '~/components/sections/ContactCTA.vue'

import { seo } from '~/content/seo'

useSEO(seo.home)
</script>

<template>

  <Hero />
  <p>---------------------------------------</p>
  <Competition />
  <p>---------------------------------------</p>
  <Problem />
  <p>---------------------------------------</p>
  <Mindset />
  <p>---------------------------------------</p>
  <AboutUs />
  <p>---------------------------------------</p>
  <Methodology />
  <p>---------------------------------------</p>
  <WhatWeDo />
  <p>---------------------------------------</p>
  <Differentiator />
  <p>---------------------------------------</p>
  <Portfolio />
  <p>---------------------------------------</p>
  <Experiences />
  <p>---------------------------------------</p>
  <HowWeHelp />
  <p>---------------------------------------</p>
  <ContactCTA />
  
</template>
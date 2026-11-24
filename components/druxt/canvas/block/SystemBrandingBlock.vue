<template>
  <div>
    <NuxtLink to="/" class="inline-block" rel="home">
      <div class="branding"><img class="h-full w-full" src="/dashi/logo.svg" alt=""></div>
    </NuxtLink>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// The site branding block, with Dashi's logo.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

<template>
  <section class="site-footer container mx-auto px-4">
    <div class="flex flex-col">
      <div class="flex w-full flex-col gap-2 py-3 [&_li]:text-xs [&_li]:md:text-sm [&_li]:xl:text-md md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-6 md:py-4 border-t border-border">
        <div class="site-footer--bottom-col"><slot name="footer_utility_first" /></div>
        <div class="site-footer--bottom-col md:flex md:justify-end"><slot name="footer_utility_last" /></div>
      </div>
    </div>
  </section>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's footer, in its utility-only form, which is the one Dashi's page
// variant uses.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

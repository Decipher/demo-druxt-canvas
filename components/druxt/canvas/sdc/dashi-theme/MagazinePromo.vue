<template>
  <div class="container mx-auto px-4 pt-6 pb-8">
    <section class="magazine-promo flex flex-col items-start gap-6 rounded-[28px] bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:gap-8 md:px-11 md:py-10">
      <div class="flex min-w-0 flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
        <img class="magazine-promo--image h-24 w-auto flex-none md:h-28" src="/dashi/components/magazine-promo/assets/dashi-paper.jpg" alt="">
        <div class="flex flex-col gap-2">
          <h2 class="m-0 font-serif text-2xl font-semibold text-primary-foreground">{{ headingText }}</h2>
          <p v-if="text" class="m-0 max-w-md text-sm leading-relaxed opacity-90">{{ text }}</p>
        </div>
      </div>
      <NuxtLink v-if="linkLabel" :to="url" class="group flex items-center justify-center transition duration-300 ease-in-out rounded-full leading-tight font-medium cursor-pointer no-underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50 gap-2 px-5 py-2 text-md xl:py-3 xl:text-lg bg-primary-foreground text-primary hover:text-primary/80 w-fit flex-row-reverse">{{ linkLabel }}</NuxtLink>
    </section>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's magazine promo. Its link is a Canvas link input, `{ uri }`, where an
// `internal:` or `entity:` URI is Drupal's, so only a plain path is followed.
export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    headingText: { type: String, default: '' },
    linkLabel: { type: String, default: '' },
    linkUrl: { type: [Object, String], default: '' },
    text: { type: String, default: '' },
  },
  computed: {
    url: ({ linkUrl }) => {
      const uri = typeof linkUrl === 'string' ? linkUrl : (linkUrl || {}).uri || ''
      return uri.replace(/^internal:/, '') || '/'
    },
  },
}
</script>

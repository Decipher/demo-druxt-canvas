<template>
  <div :class="['utility-bar container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 pt-3 pb-1 text-muted-foreground [&_ul]:m-0 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-row [&_ul]:gap-5 [&_ul]:p-0 [&_a]:no-underline [&_a]:duration-300 [&_a.is-active]:font-semibold [&_a.is-active]:text-foreground [&_a:hover]:text-primary', textSize]">
    <div class="utility-bar--start flex items-center gap-5"><slot name="start" /></div>
    <div class="utility-bar--end flex items-center gap-5"><slot name="end" /></div>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: { textSize: { type: String, default: 'text-xs' } },
}
</script>

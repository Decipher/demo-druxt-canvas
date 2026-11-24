<template>
  <component :is="`h${level || 2}`" :class="classes">{{ headingText }}</component>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's heading, with the classes its twig template picks.
const sizes = { 'heading-responsive-8xl': 'text-6xl md:text-7xl lg:text-8xl', 'heading-responsive-7xl': 'text-5xl md:text-6xl lg:text-7xl', 'heading-responsive-6xl': 'text-4xl md:text-5xl lg:text-6xl', 'heading-responsive-5xl': 'text-3xl md:text-4xl lg:text-5xl', 'heading-responsive-4xl': 'text-2xl md:text-3xl lg:text-4xl', 'heading-responsive-3xl': 'text-2xl lg:text-3xl', 'heading-responsive-2xl': 'text-xl lg:text-2xl', 'heading-responsive-xl': 'text-lg lg:text-xl', 'heading-responsive-lg': 'text-md lg:text-lg' }
const colors = { default: 'text-inherit', inverted: 'text-background', primary: 'text-primary', muted: 'text-muted-foreground', accent: 'text-accent' }

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    align: { type: String, default: 'left' },
    headingText: { type: String, default: '' },
    level: { type: [Number, String], default: 2 },
    textColor: { type: String, default: 'default' },
    textSize: { type: String, default: 'heading-responsive-4xl' },
  },
  computed: {
    classes: ({ align, textColor, textSize }) => [`text-${align}`, colors[textColor], sizes[textSize]].join(' '),
  },
}
</script>

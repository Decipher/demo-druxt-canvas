<template>
  <section :class="[sectionClasses, 'cq-full']">
    <div v-if="backgroundColor" :class="['absolute inset-0 z-[-1]', backgrounds[backgroundColor] || 'bg-none']" />
    <div class="container mx-auto px-4 [&_.cq-full]:mx-0 [&_.cq-full]:w-full">
      <div :class="['@container relative mx-auto flex flex-col items-stretch', widths[width] || '']">
        <div :class="gridClasses"><slot name="main_slot" /></div>
      </div>
    </div>
  </section>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's section, with the classes its twig template picks for each input.
const margins = (side) => ({ 0: `m${side}-0`, 8: `m${side}-2`, 20: `m${side}-5`, 32: `m${side}-6 md:m${side}-7 xl:m${side}-8`, 48: `m${side}-8 md:m${side}-10 xl:m${side}-12`, 64: `m${side}-10 md:m${side}-13 xl:m${side}-16`, 96: `m${side}-16 md:m${side}-20 xl:m${side}-24`, 128: `m${side}-20 md:m${side}-24 xl:m${side}-32` })
const paddings = (side) => ({ 0: `p${side}-0`, 16: `p${side}-4`, 32: `p${side}-6 md:p${side}-7 xl:p${side}-8`, 64: `p${side}-10 md:p${side}-13 xl:p${side}-16` })
const colors = { primary: 'text-primary-foreground', secondary: 'text-secondary-foreground', accent: 'text-accent-foreground', muted: 'text-muted-foreground', card: 'text-card-foreground', noColor: 'text-foreground' }
const columns = { 100: 'grid-cols-1', '50-50': 'md:grid-cols-2', '33-33-33': 'md:grid-cols-3', '75-25': 'md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]', '25-75': 'md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]', '67-33': 'md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]', '33-67': 'md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]', '25-25-25-25': 'sm:grid-cols-2 lg:grid-cols-4' }
const viewsColumns = { 100: '', '50-50': '[&_.view-content]:md:grid-cols-2', '33-33-33': '[&_.view-content]:md:grid-cols-3', '25-25-25-25': '[&_.view-content]:sm:grid-cols-2 [&_.view-content]:lg:grid-cols-4' }

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    backgroundColor: { type: String, default: '' },
    columns: { type: String, default: '100' },
    marginBlockEnd: { type: String, default: '' },
    marginBlockStart: { type: String, default: '' },
    mobileColumns: { type: String, default: '1' },
    paddingBlockEnd: { type: String, default: '' },
    paddingBlockStart: { type: String, default: '' },
    viewsColumns: { type: String, default: '100' },
    width: { type: String, default: '100%' },
  },
  data: () => ({
    backgrounds: { primary: 'bg-primary', secondary: 'bg-secondary', accent: 'bg-accent', muted: 'bg-muted', card: 'bg-card' },
    widths: { '100%': 'lg:max-w-full', '90%': 'lg:max-w-9/10', '80%': 'lg:max-w-8/10', '75%': 'lg:max-w-3/4', '50%': 'lg:max-w-1/2' },
  }),
  computed: {
    sectionClasses() {
      return ['@container relative mx-auto flex flex-col items-stretch', margins('t')[this.marginBlockStart], margins('b')[this.marginBlockEnd], paddings('t')[this.paddingBlockStart], paddings('b')[this.paddingBlockEnd], colors[this.backgroundColor || 'noColor']].filter(Boolean).join(' ')
    },
    gridClasses() {
      return ['grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 [&>*]:w-full [&>*]:min-w-0 [&_.view-content]:grid [&_.view-content]:w-full [&_.view-content]:min-w-0 [&_.view-content]:gap-4 [&_.view-content]:md:gap-6 [&_.view-content]:xl:gap-8', columns[this.columns], { 2: 'grid-cols-2', 3: 'grid-cols-3' }[this.mobileColumns], viewsColumns[this.viewsColumns], this.columns === '25-25-25-25' && this.mobileColumns === '2' ? 'sm:grid-cols-4' : ''].filter(Boolean).join(' ')
    },
  },
}
</script>

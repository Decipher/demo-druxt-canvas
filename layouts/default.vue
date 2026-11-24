<template>
  <div class="dialog-off-canvas-main-canvas">
    <DruxtCanvasComponent v-for="node in tree" :key="node.uuid" :item="node" />
    <Nuxt v-if="!tree.length" />
  </div>
</template>

<script>
import { buildCanvasTree } from '@druxt-contrib/canvas'

/**
 * Replaces Druxt Site's layout with Dashi's page variant: the Canvas tree that
 * holds Dashi's header and footer, and marks where the page goes. Each of its
 * components renders through a wrapper in `components/`, as a page's do.
 *
 * Dashi's own CSS, fonts and images are in `static/dashi/`, copied from the
 * Dashi theme under its licence, GPL-2.0-or-later.
 */
export default {
  data: () => ({ tree: [] }),

  async fetch() {
    const collection = await this.$store.dispatch('druxt/getCollection', {
      type: 'page_variant--page_variant',
      query: {},
    })
    const variant = ((collection || {}).data || []).find((item) => item.attributes.status) || ((collection || {}).data || [])[0]
    if (!variant) return
    // A page variant's tree holds its raw inputs only, where a Canvas page's
    // components hold `inputs_resolved` too, which buildCanvasTree reads.
    // Dashi's page variant has no input that needs resolving, so its raw
    // inputs are given as resolved.
    const items = Object.values(variant.attributes.component_tree || {}).map((item) => ({
      ...item,
      inputs_resolved: item.inputs_resolved || (Array.isArray(item.inputs) ? {} : item.inputs),
    }))
    this.tree = buildCanvasTree(items)
  },

  head: () => ({
    bodyAttrs: { class: 'canvas-page' },
    link: [
      { rel: 'stylesheet', href: '/dashi/src/fonts.css' },
      { rel: 'stylesheet', href: '/dashi/build/main.min.css' },
      { rel: 'stylesheet', href: '/dashi/src/theme.css' },
    ],
  }),
}
</script>

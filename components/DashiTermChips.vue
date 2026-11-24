<template>
  <div v-if="terms.length" :class="['term-chips view view-content-terms view-id-content_terms', display && `view-display-id-${display}`]">
    <div class="view-content">
      <div v-for="term in terms" :key="term.id" class="views-row">
        <NuxtLink :to="term.path">{{ term.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
// Term chips, as Dashi's content_terms view lists a node's terms. The terms
// come from the node's relationship, fetched through Druxt.
export default {
  props: {
    display: { type: String, default: '' },
    items: { type: [Array, Object], default: () => [] },
  },
  data: () => ({ terms: [] }),
  async fetch() {
    const list = Array.isArray(this.items) ? this.items : this.items ? [this.items] : []
    this.terms = (await Promise.all(list.map(async ({ type, id }) => {
      const resource = await this.$store.dispatch('druxt/getResource', { type, id })
      const term = (resource || {}).data || resource || {}
      const attributes = term.attributes || {}
      return { id, name: attributes.name, path: (attributes.path || {}).alias || `/taxonomy/term/${attributes.drupal_internal__tid}` }
    }))).filter((term) => term.name)
  },
}
</script>

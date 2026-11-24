<template>
  <div class="flex bg-none flex-col items-start justify-start self-start gap-4">
    <div v-if="articles.length">
      <div class="views-element-container">
        <h2 class="mb-4 font-serif text-xl font-semibold">More featured articles</h2>
        <div class="view view-articles view-id-articles view-display-id-latest">
          <div class="view-content">
            <div v-for="node in articles" :key="node.id" class="views-row"><DashiCard :node="node" variant="featured" :with-label="false" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Dashi's "More featured articles": the three newest other articles. Dashi's
// own view answers JSON:API with an error, so this asks JSON:API for the same
// articles directly. It finds the three Dashi shows, in its order.
export default {
  props: { article: { type: Object, required: true } },
  data: () => ({ articles: [] }),
  async fetch() {
    const collection = await this.$store.dispatch('druxt/getCollection', {
      type: 'node--article',
      query: 'filter[status]=1&sort=-created&page[limit]=4',
    })
    this.articles = ((collection || {}).data || []).filter((node) => node.id !== this.article.id).slice(0, 3)
  },
}
</script>

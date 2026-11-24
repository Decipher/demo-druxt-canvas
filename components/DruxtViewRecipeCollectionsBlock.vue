<template>
  <div>
    <h2 class="mb-5 text-center font-serif text-2xl font-semibold">Recipe collections</h2>
    <div class="term-chips term-chips--centered view view-recipe-collections">
      <div class="view-content">
        <div v-for="term in results" :key="term.id" class="views-row">
          <div class="views-field views-field-name">
            <span class="field-content"><NuxtLink :to="path(term)">{{ term.attributes.name }}</NuxtLink></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Dashi's recipe collections: every tag, as a row of chips.
export default {
  props: { results: { type: Array, default: () => [] } },
  methods: {
    path: (term) => (term.attributes.path || {}).alias || `/taxonomy/term/${term.attributes.drupal_internal__tid}`,
  },
}
</script>

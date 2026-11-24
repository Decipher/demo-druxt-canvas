<template>
  <div class="view view-featured-recipe view-id-featured_recipe view-display-id-recipes">
    <div class="view-content">
      <div v-for="node in results" :key="node.id" class="views-row"><DashiFeaturedRecipe :node="node" /></div>
    </div>
  </div>
</template>

<script>
// The featured recipe on Dashi's recipes page, in the hero view mode.
export default { props: { results: { type: Array, default: () => [] } } }
</script>

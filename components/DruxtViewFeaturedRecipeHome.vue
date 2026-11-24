<template>
  <div class="view view-featured-recipe view-id-featured_recipe view-display-id-home">
    <div class="view-content">
      <div v-for="node in results" :key="node.id" class="views-row"><DashiFeaturedRecipe :node="node" /></div>
    </div>
  </div>
</template>

<script>
// Dashi's featured recipe view, which shows its recipe in the hero view mode.
export default { props: { results: { type: Array, default: () => [] } } }
</script>

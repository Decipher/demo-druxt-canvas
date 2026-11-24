<template>
  <div class="view view-recipes view-id-recipes view-display-id-latest">
    <div class="view-content">
      <div v-for="node in results" :key="node.id" class="views-row"><DashiCard :node="node" /></div>
    </div>
  </div>
</template>

<script>
// Dashi's latest recipes, in its card view mode. The pager is left out, as
// Dashi's own front page shows none.
export default { props: { results: { type: Array, default: () => [] } } }
</script>

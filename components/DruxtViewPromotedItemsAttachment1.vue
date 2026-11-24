<template>
  <div class="promoted-items--attachment view">
    <div class="view-content">
      <div v-for="node in results" :key="node.id" class="views-row"><DashiCard :node="node" variant="featured" /></div>
    </div>
  </div>
</template>

<script>
export default { props: { results: { type: Array, default: () => [] } } }
</script>

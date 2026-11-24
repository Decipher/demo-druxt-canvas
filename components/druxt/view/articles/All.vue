<template>
  <div class="view view-articles view-id-articles view-display-id-all">
    <div class="view-content">
      <div v-for="node in results" :key="node.id" class="views-row"><DashiCard :node="node" /></div>
    </div>
  </div>
</template>

<script>
// Every article, in Dashi's card view mode. The section around the block lays
// the cards out four to a row.
export default { props: { results: { type: Array, default: () => [] } } }
</script>

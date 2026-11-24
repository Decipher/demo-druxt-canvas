<template>
  <div class="promoted-items view view-promoted-items view-id-promoted_items view-display-id-block_1">
    <div class="view-content">
      <div v-for="node in results" :key="node.id" class="views-row"><DashiCard :node="node" variant="featured" /></div>
    </div>
    <div class="attachment attachment-after"><slot name="attachments_after" /></div>
  </div>
</template>

<script>
// Dashi's promoted items: one item, then two more from the view's attachment,
// in one row of three.
export default { props: { results: { type: Array, default: () => [] } } }
</script>

<style>
/* Dashi puts the attachment's rows in the block's own grid. Druxt renders the
   attachment as a DruxtView, so its element joins the grid's contents too. */
.view.promoted-items .attachment > * { display: contents; }
</style>

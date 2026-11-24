<template>
  <DashiCard :node="entity" variant="featured" />
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

// A node in its teaser view mode, as `/canvas-external`'s Druxt entity
// component asks for it: Dashi's card.
export default {
  mixins: [DruxtEntityMixin],
}
</script>

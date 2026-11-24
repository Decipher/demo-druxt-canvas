<template>
  <NodeTeaser :entity="entity" mode="featured"><slot /></NodeTeaser>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>

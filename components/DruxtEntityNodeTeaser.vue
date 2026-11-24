<template>
  <NodeTeaser :entity="entity" mode="teaser"><slot /></NodeTeaser>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>

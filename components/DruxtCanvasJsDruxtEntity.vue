<template>
  <DruxtEntity :type="`${entityType}--${bundle}`" :uuid="uuid" :mode="viewMode" />
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    bundle: { type: String, required: true },
    entityType: { type: String, required: true },
    uuid: { type: String, required: true },
    viewMode: { type: String, default: 'default' },
  },
}
</script>

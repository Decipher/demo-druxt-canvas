<template>
  <div class="container mx-auto px-4 pb-10">
    <div class="grid w-full gap-4 md:grid-cols-3">
      <DruxtEntity :type="`${entityType}--${bundle}`" :uuid="uuid" :mode="viewMode" />
    </div>
  </div>
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

<template>
  <div class="container mx-auto px-4 pb-6 text-muted-foreground">
    <DruxtView :view-id="viewId" :display-id="displayId" />
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    displayId: { type: String, default: 'default' },
    viewId: { type: String, required: true },
  },
}
</script>

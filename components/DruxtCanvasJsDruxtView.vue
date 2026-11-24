<template>
  <DruxtView :view-id="viewId" :display-id="displayId" />
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

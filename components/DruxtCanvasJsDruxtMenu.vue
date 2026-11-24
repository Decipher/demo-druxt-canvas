<template>
  <DruxtMenu :name="menu" />
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    menu: { type: String, default: 'main' },
  },
}
</script>

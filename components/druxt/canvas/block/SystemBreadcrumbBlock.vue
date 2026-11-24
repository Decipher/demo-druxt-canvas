<template>
  <div><DruxtBreadcrumb /></div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// The breadcrumb block, which Druxt builds from the route's parent paths.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

<template>
  <nav><DruxtMenu name="account" /></nav>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// The user account menu block. `DruxtMenuAccount` renders the menu.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

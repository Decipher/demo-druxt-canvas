<template>
  <nav><DruxtMenu name="main" /></nav>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// The main menu block. `DruxtMenuMain` renders the menu in Dashi's markup.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

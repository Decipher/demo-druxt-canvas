<template>
  <div>
    <form class="views-exposed-form" @submit.prevent>
      <div class="form-item form-no-label">
        <input placeholder="Search by keyword, ingredient, dish" type="text" name="keywords" size="30" maxlength="128" class="form-text" aria-label="Search">
      </div>
      <div class="form-actions"><input type="submit" value="Search" class="button form-submit"></div>
    </form>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's search form. Search runs on Search API, which no JSON:API resource
// answers, so the form is shown and does nothing.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

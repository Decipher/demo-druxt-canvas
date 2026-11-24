<template>
  <article class="node">
    <h1>{{ entity.attributes.title }}</h1>
    <slot />
  </article>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

// A node's own page. Druxt renders it in the node's default display, and a
// node's title is not one of its fields, so it is added here.
export default {
  mixins: [DruxtEntityMixin],
}
</script>

<style>
.node { max-width: 760px; }
.node h1 { font-size: 2.5rem; margin: 2rem 0 1rem; }
</style>

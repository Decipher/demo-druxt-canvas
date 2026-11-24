<template>
  <div role="navigation">
    <ul class="links">
      <li><NuxtLink to="/" :class="{ 'is-active': !spanish }" hreflang="en">English</NuxtLink></li>
      <li><NuxtLink to="/es" :class="{ 'is-active': spanish }" hreflang="es">Español</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Drupal's language switcher, for Dashi's two languages.
export default {
  mixins: [DruxtCanvasComponentMixin],
  computed: { spanish: ({ $route }) => $route.path === '/es' || $route.path.startsWith('/es/') },
}
</script>

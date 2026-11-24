<template>
  <nav>
    <ul class="menu list-none font-body gap-4 flex flex-wrap p-0 flex-row menu--level-1">
      <li class="menu__item"><span class="flex flex-row items-center">Log in</span></li>
    </ul>
  </nav>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// The user account menu, as a visitor sees it. Drupal builds its one link,
// "Log in", for the visitor rather than storing it in the menu, so it is
// written here, and it links nowhere: no Drupal runs behind this site.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>

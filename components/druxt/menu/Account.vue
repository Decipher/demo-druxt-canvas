<template>
  <ul class="menu list-none font-body gap-4 flex flex-wrap p-0 flex-row menu--level-1">
    <li v-for="{ entity } in items" :key="entity.id" class="menu__item menu__item--link menu__item--level-1">
      <span class="flex flex-row gap-y-4 items-center menu__link">{{ entity.attributes.title }}</span>
    </li>
  </ul>
</template>

<script>
// The user account menu, as a visitor gets it from JSON:API Menu Items: "Log
// in". Its links are shown, not followed, since they lead to Drupal's own
// pages and no Drupal runs behind this site.
export default {
  props: { items: { type: Array, default: () => [] } },
}
</script>

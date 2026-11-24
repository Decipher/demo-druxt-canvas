<template>
  <nav class="flex justify-start relative menu--main">
    <ul class="flex flex-col gap-1 p-0 font-body md:w-auto md:flex-row">
      <li v-for="{ entity } in items" :key="entity.id" class="flex flex-wrap justify-between md:flex-nowrap md:w-auto md:relative md:max-w-[375px] text-sm font-medium rounded-full">
        <NuxtLink :to="entity.attributes.url" :class="[link, active(entity) ? 'bg-primary text-primary-foreground hover:md:bg-primary/90' : 'hover:md:bg-card hover:md:text-foreground']">{{ entity.attributes.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
// The main menu, as Dashi's menu--main template renders it. DruxtMenu loads
// the items from JSON:API Menu Items into the store, so they hydrate.
export default {
  props: { items: { type: Array, default: () => [] } },
  computed: {
    link: () => 'flex min-h-[44px] shrink-1 grow-1 basis-0 items-center gap-1 rounded-full px-5 py-2 no-underline duration-300 md:min-h-auto',
  },
  methods: {
    // Drupal marks a link active on its own path only, and the front page's
    // link is `/home`, its alias.
    active({ attributes: { url } }) {
      const path = this.$route.path
      return url === '/home' ? path === '/' || path === '/home' : path === url
    },
  },
}
</script>

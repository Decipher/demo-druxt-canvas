<template>
  <nav>
    <nav class="flex justify-start relative menu--main">
      <ul class="flex flex-col gap-1 p-0 font-body md:w-auto md:flex-row">
        <li v-for="item in items" :key="item.id" class="flex flex-wrap justify-between md:flex-nowrap md:w-auto md:relative md:max-w-[375px] text-sm font-medium rounded-full">
          <NuxtLink :to="item.attributes.url" :class="[link, active(item) ? 'bg-primary text-primary-foreground hover:md:bg-primary/90' : 'hover:md:bg-card hover:md:text-foreground']">{{ item.attributes.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// The main menu, as Dashi's menu--main template renders it, from JSON:API
// Menu Items. The front page's link is `/home`, its alias.
export default {
  mixins: [DruxtCanvasComponentMixin],
  data: () => ({ items: [] }),
  async fetch() {
    const { data } = await this.$druxt.axios.get('/jsonapi/menu_items/main')
    this.items = (data.data || []).filter((item) => !item.attributes.parent).sort((a, b) => a.attributes.weight - b.attributes.weight)
  },
  computed: {
    link: () => 'flex min-h-[44px] shrink-1 grow-1 basis-0 items-center gap-1 rounded-full px-5 py-2 no-underline duration-300 md:min-h-auto',
  },
  methods: {
    active(item) {
      const url = item.attributes.url
      const path = this.$route.path
      // Drupal marks a link active on its own path only, as Dashi shows it.
      return url === '/home' ? path === '/' || path === '/home' : path === url
    },
  },
}
</script>

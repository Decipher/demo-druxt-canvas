<template>
  <section class="@container relative mx-auto flex flex-col items-stretch mt-0 mb-0 pt-4 pb-6 md:pb-7 xl:pb-8 text-foreground cq-full">
    <div class="container mx-auto px-4 [&_.cq-full]:mx-0 [&_.cq-full]:w-full">
      <div class="@container relative mx-auto flex flex-col items-stretch lg:max-w-full">
        <div class="grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 grid-cols-1">
          <nav aria-label="breadcrumb" class="container mx-auto my-2 w-full md:my-3 2xl:my-4">
            <ol class="m-0 flex list-none flex-row items-center gap-1 p-0 font-body leading-none text-foreground md:gap-2">
              <li class="gap-1 md:gap-2 2xl:text-base">
                <NuxtLink to="/" class="flex items-center no-underline hover:opacity-80">
                  <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" /></svg>
                  <span class="sr-only">Home</span>
                </NuxtLink>
              </li>
              <li aria-hidden="true"><svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" /></svg></li>
              <li class="flex items-center text-sm md:text-md"><NuxtLink to="/articles" class="no-underline hover:underline hover:underline-offset-2">Articles</NuxtLink></li>
              <li aria-hidden="true"><svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" /></svg></li>
              <li class="flex items-center text-sm md:text-md active" aria-current="page">{{ a.title }}</li>
            </ol>
          </nav>
          <section>
            <div class="relative mx-auto flex flex-col items-stretch lg:max-w-full">
              <div class="grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <div class="flex bg-none flex-col items-start justify-start self-start gap-4 rounded-xl p-16 bg-card text-card-foreground">
                  <h1 class="text-left text-inherit text-2xl md:text-3xl lg:text-4xl">{{ a.title }}</h1>
                  <div class="byline flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                    <span v-if="author">by <span class="font-semibold text-primary">{{ author }}</span></span>
                    <span v-if="author" aria-hidden="true">·</span>
                    <time :datetime="a.created.slice(0, 10)">{{ date }}</time>
                  </div>
                  <DashiTermChips display="tags" :items="rel('field_tags')" />
                  <figure class="w-full">
                    <div class="cq-full w-full aspect-16/9 overflow-hidden rounded-xl md:rounded-2xl"><DashiImage :media="media" /></div>
                  </figure>
                  <div class="font-body [&_h2]:mt-8 [&_h2]:mb-6 [&_h3]:mt-6 [&_h3]:mb-4 [&_li]:mb-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ul]:my-4 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:underline [&_a]:underline-offset-2" v-html="body" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'
import { featuredMedia } from '~/lib/dashi'

const ordinal = (day) => `${day}${[, 'st', 'nd', 'rd'][(day % 100 >> 3) ^ 1 && day % 10] || 'th'}`

// An article's own page, as Dashi's article content template lays it out.
// Dashi's "More featured articles" is left out: its view answers JSON:API
// with an error, on Drupal as on the mock.
export default {
  mixins: [DruxtEntityMixin],
  data: () => ({ author: '' }),
  async fetch() {
    const uid = ((this.entity.relationships || {}).uid || {}).data
    if (!uid) return
    const user = await this.$store.dispatch('druxt/getResource', { type: uid.type, id: uid.id })
    this.author = (((user || {}).data || user || {}).attributes || {}).display_name || ''
  },
  computed: {
    a: ({ entity }) => entity.attributes,
    media: ({ entity }) => featuredMedia(entity),
    body: ({ a }) => (a.field_content || {}).processed || (a.field_content || {}).value || '',
    date: ({ a }) => {
      const date = new Date(a.created)
      return `${ordinal(date.getUTCDate())} ${date.toLocaleString('en-GB', { month: 'long', timeZone: 'UTC' })} ${date.getUTCFullYear()}`
    },
  },
  methods: {
    rel(name) { return ((this.entity.relationships || {})[name] || {}).data || [] },
  },
}
</script>

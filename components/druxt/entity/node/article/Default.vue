<template>
  <section class="@container relative mx-auto flex flex-col items-stretch mt-0 mb-0 pt-4 pb-6 md:pb-7 xl:pb-8 text-foreground cq-full">
    <div class="container mx-auto px-4 [&_.cq-full]:mx-0 [&_.cq-full]:w-full">
      <div class="@container relative mx-auto flex flex-col items-stretch lg:max-w-full">
        <div class="grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 [&>*]:w-full [&>*]:min-w-0 [&_.view-content]:grid [&_.view-content]:w-full [&_.view-content]:min-w-0 [&_.view-content]:gap-4 [&_.view-content]:md:gap-6 [&_.view-content]:xl:gap-8 grid-cols-1">
          <DruxtBreadcrumb />
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
                  <div class="font-body [&_h2]:mt-8 [&_h2]:mb-6 [&_h3]:mt-6 [&_h3]:mb-4 [&_h4]:mt-4 [&_h4]:mb-2 [&_h5]:my-2 [&_h6]:my-2 [&_li]:mb-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ul]:my-4 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:underline [&_a]:underline-offset-2 [&_table]:my-6 [&_td]:p-3 [&_th]:p-3 [&_tr]:border-b [&_tr]:border-b-border/40 [&_blockquote]:xl:3xl [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:md:text-2xl [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-border/40 [&_blockquote]:pl-4 [&_figure]:my-6 [&_figure]:w-fit [&_figcaption]:block [&_figcaption]:pt-2 [&_figcaption]:pb-3 [&_figcaption]:text-sm [&_figcaption]:opacity-80 [&_figcaption]:lg:text-base text-foreground [&_a]:hover:text-foreground/70 text-base leading-relaxed xl:text-lg" v-html="body" />
                </div>
                <DashiMoreArticles :article="entity" />
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

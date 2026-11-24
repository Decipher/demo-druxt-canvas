<template>
  <div>
    <section class="@container relative mx-auto flex flex-col items-stretch mt-0 mb-6 md:mb-7 xl:mb-8 pt-6 md:pt-7 xl:pt-8 pb-6 md:pb-7 xl:pb-8 text-card-foreground cq-full">
      <div class="absolute inset-0 z-[-1] bg-card" />
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
                <li class="flex items-center text-sm md:text-md"><NuxtLink to="/recipes" class="no-underline hover:underline hover:underline-offset-2">Recipes</NuxtLink></li>
                <li aria-hidden="true"><svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" /></svg></li>
                <li class="flex items-center text-sm md:text-md active" aria-current="page">{{ a.title }}</li>
              </ol>
            </nav>
            <section>
              <div class="relative mx-auto flex flex-col items-stretch lg:max-w-full">
                <div class="grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 md:grid-cols-2">
                  <figure class="w-full">
                    <div class="cq-full w-full aspect-3/2 overflow-hidden rounded-xl md:rounded-2xl"><DashiImage :media="media" /></div>
                  </figure>
                  <div class="flex bg-none flex-col items-start justify-start self-start gap-4">
                    <div class="flex bg-none flex-row items-center justify-center self-start gap-2">
                      <DashiTermChips display="recipe_category" :items="rel('field_recipe_category')" />
                      <DashiTermChips display="tags" :items="rel('field_tags')" />
                    </div>
                    <h1 class="text-left text-inherit text-2xl md:text-3xl lg:text-4xl">{{ a.title }}</h1>
                    <p v-if="a.field_description" class="lead-text m-0 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">{{ a.field_description }}</p>
                    <div class="recipe-facts grid grid-cols-2 gap-3">
                      <div v-for="fact in facts" :key="fact.label" class="flex flex-col gap-1 rounded-2xl bg-muted px-5 py-4">
                        <span :class="['text-[0.66rem] font-bold tracking-[0.12em] uppercase', fact.tone]">{{ fact.label }}</span>
                        <span class="text-base font-semibold text-foreground">{{ fact.value }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section class="@container relative mx-auto flex flex-col items-stretch pb-10 md:pb-13 xl:pb-16 text-foreground cq-full">
      <div class="container mx-auto px-4">
        <div class="grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div class="ingredients-list flex flex-col self-start rounded-[20px] bg-muted px-7 py-8">
            <h2 class="mb-3 font-serif text-2xl font-semibold">Ingredients</h2>
            <ul class="m-0 list-none p-0">
              <li v-for="(item, index) in ingredients" :key="index" class="border-b border-border/70 py-2.5 text-sm text-foreground last:border-b-0">{{ item }}</li>
            </ul>
          </div>
          <div class="directions flex flex-col">
            <h2 class="mb-3 font-serif text-2xl font-semibold">Directions</h2>
            <div class="directions--steps [&_li]:flex [&_li]:items-baseline [&_li]:gap-4 [&_li]:border-b [&_li]:border-border/60 [&_li]:py-3 [&_li]:text-[0.95rem] [&_li]:leading-relaxed [&_li]:text-foreground [&_li]:[counter-increment:step] [&_li]:before:w-6 [&_li]:before:flex-none [&_li]:before:text-right [&_li]:before:font-serif [&_li]:before:text-lg [&_li]:before:font-semibold [&_li]:before:text-primary [&_li]:before:content-[counter(step)] [&_li:last-child]:border-b-0 [&_ol]:m-0 [&_ol]:list-none [&_ol]:p-0 [&_ol]:[counter-reset:step]" v-html="directions" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'
import { difficulty, featuredMedia } from '~/lib/dashi'

// A recipe's own page, as Dashi's recipe content template lays it out. Druxt
// does not read Canvas content templates yet, so this wrapper reads the
// recipe's fields itself. Dashi's related recipes are left out: their view
// answers JSON:API with an error, on Drupal as on the mock.
export default {
  mixins: [DruxtEntityMixin],
  computed: {
    a: ({ entity }) => entity.attributes,
    media: ({ entity }) => featuredMedia(entity),
    ingredients: ({ a }) => (a.field_ingredients || []).map((item) => String(item).trim()),
    directions: ({ a }) => (a.field_content || {}).processed || (a.field_content || {}).value || '',
    facts: ({ a, entity }) => [
      { label: 'Preparation time', value: a.field_preparation_time && `${a.field_preparation_time} minutes`, tone: 'text-primary-deep' },
      { label: 'Cooking time', value: a.field_cooking_time && `${a.field_cooking_time} minutes`, tone: 'text-primary-deep' },
      { label: 'Number of servings', value: a.field_number_of_servings, tone: 'text-secondary-deep' },
      { label: 'Difficulty', value: difficulty(entity), tone: 'text-secondary-deep' },
    ].filter((fact) => fact.value),
  },
  methods: {
    rel(name) { return ((this.entity.relationships || {})[name] || {}).data || [] },
  },
}
</script>

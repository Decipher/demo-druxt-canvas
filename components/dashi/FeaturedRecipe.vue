<template>
  <section class="featured-recipe grid items-center gap-8 pt-4 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16 md:pb-14 lg:gap-20">
    <div class="featured-recipe--content flex max-w-[30rem] min-w-0 flex-col items-start gap-5">
      <p class="m-0 flex flex-wrap items-center gap-x-2">
        <span class="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-secondary">Featured recipe</span>
        <template v-if="level">
          <span aria-hidden="true" class="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-muted-foreground">·</span>
          <span class="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-muted-foreground">{{ level }}</span>
        </template>
      </p>
      <h1 class="m-0 font-serif text-4xl leading-tight font-semibold md:text-5xl">
        <NuxtLink :to="path" class="no-underline hover:text-primary">{{ node.attributes.title }}</NuxtLink>
      </h1>
      <p v-if="node.attributes.field_description" class="m-0 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
        {{ node.attributes.field_description }}
      </p>
      <NuxtLink :to="path" class="group flex items-center justify-center transition duration-300 ease-in-out rounded-full leading-tight font-medium cursor-pointer no-underline hover:no-underline gap-3 px-6 py-3 text-lg xl:py-3.5 xl:text-xl bg-primary text-primary-foreground hover:bg-primary/85 w-fit flex-row-reverse">
        {{ view }}
      </NuxtLink>
    </div>
    <div class="featured-recipe--image min-w-0">
      <DashiImage :media="media" img-class="aspect-3/2 h-auto w-full max-w-full rounded-[28px] object-cover shadow-[var(--shadow-lg)]" />
    </div>
  </section>
</template>

<script>
import { difficulty, featuredMedia, nodePath, viewLabel } from '~/lib/dashi'

// Dashi's featured recipe, as its hero content template renders a recipe.
export default {
  props: { node: { type: Object, required: true } },
  computed: {
    level: ({ node }) => difficulty(node),
    media: ({ node }) => featuredMedia(node),
    path: ({ node }) => nodePath(node),
    view: ({ node }) => viewLabel(node),
  },
}
</script>

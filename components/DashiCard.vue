<template>
  <div :class="[base, variant === 'featured' ? 'shadow-[var(--shadow)] bg-card text-card-foreground hover:bg-card/90 hover:text-card-foreground/90' : 'shadow-none hover:text-foreground/90']">
    <div :class="['overflow-hidden rounded-xl', variant === 'featured' ? 'aspect-video' : 'aspect-3/2']">
      <DashiImage :media="media" />
    </div>
    <div :class="['flex w-full flex-col items-baseline rounded-b p-5', variant === 'featured' ? '' : 'px-0!']">
      <div class="@container flex w-full flex-col gap-1 md:gap-2">
        <div v-if="variant === 'featured'" class="flex w-full items-center justify-between gap-2">
          <span class="text-[0.7rem] font-bold tracking-[0.1em] uppercase card--label text-secondary">{{ label }}</span>
        </div>
        <h3 :class="['text-lg leading-snug font-semibold', variant === 'featured' ? '@md:text-xl' : '']">
          <NuxtLink :to="path" class="after:absolute after:inset-0 after:content-['']">{{ node.attributes.title }}</NuxtLink>
        </h3>
        <div class="mt-1 flex w-full items-center justify-between gap-2">
          <span class="card--link text-[0.8rem] font-semibold text-primary">{{ view }} <span aria-hidden="true">→</span></span>
          <span v-if="variant !== 'featured' && level" class="text-[0.7rem] font-bold tracking-[0.1em] uppercase card--difficulty ms-auto text-muted-foreground">{{ level }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bundleLabel, difficulty, featuredMedia, nodePath, viewLabel } from '../lib/dashi'

// Dashi's card, as its featured and card content templates render a node.
export default {
  props: {
    node: { type: Object, required: true },
    variant: { type: String, default: 'card' },
  },
  computed: {
    base: () => 'group relative flex rounded-[22px] transition duration-300 in-[.views-row]:h-full flex-col text-left cursor-pointer motion-safe:hover:scale-103',
    label: ({ node }) => bundleLabel(node),
    level: ({ node }) => difficulty(node),
    media: ({ node }) => featuredMedia(node),
    path: ({ node }) => nodePath(node),
    view: ({ node }) => viewLabel(node),
  },
}
</script>

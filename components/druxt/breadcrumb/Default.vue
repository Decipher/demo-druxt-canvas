<template>
  <nav aria-label="breadcrumb" class="container mx-auto my-2 w-full md:my-3 2xl:my-4">
    <ol class="m-0 flex list-none flex-row items-center gap-1 p-0 font-body leading-none text-foreground md:gap-2">
      <template v-for="(crumb, index) in crumbs">
        <li v-if="index" :key="`sep-${index}`" aria-hidden="true">
          <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" /></svg>
        </li>
        <li v-if="!index && crumb.to" :key="index" class="gap-1 md:gap-2 2xl:text-base">
          <NuxtLink :to="crumb.to" class="flex items-center no-underline hover:opacity-80">
            <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" /></svg>
            <span class="sr-only">{{ crumb.text }}</span>
          </NuxtLink>
        </li>
        <li v-else-if="crumb.to" :key="index" class="flex items-center text-sm md:text-md">
          <NuxtLink :to="crumb.to" class="no-underline hover:underline hover:underline-offset-2">{{ crumb.text }}</NuxtLink>
        </li>
        <li v-else :key="index" class="flex items-center text-sm md:text-md active" aria-current="page">{{ crumb.text }}</li>
      </template>
    </ol>
  </nav>
</template>

<script>
import { DruxtBreadcrumbMixin } from 'druxt-breadcrumb'

// Dashi's breadcrumb. The first crumb is the home icon, the last is the page.
export default { mixins: [DruxtBreadcrumbMixin] }
</script>

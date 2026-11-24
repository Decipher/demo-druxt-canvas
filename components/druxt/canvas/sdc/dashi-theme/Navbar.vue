<template>
  <div class="navbar relative z-[500] container mx-auto flex justify-between p-2 px-4 md:pt-4 md:pb-10">
    <div class="navbar--logo self-center [&>div]:flex [&>div]:flex-col [&>div]:justify-center"><slot name="logo" /></div>
    <div :class="['navbar--menu fixed inset-0 grid shrink-1 grow-1 grid-cols-[1fr] grid-rows-[auto_1fr_auto] flex-col items-stretch justify-start bg-background pb-8 md:static md:flex md:h-auto md:flex-row md:items-center md:bg-transparent md:pb-0', { 'navbar--menu--open': open }]" @click="onMenuClick">
      <div class="navbar--modal-top relative z-[500] col-span-1 col-start-1 row-span-1 row-start-1 container mx-auto flex w-full justify-between p-2 md:hidden">
        <div class="navbar--modal-logo flex min-h-[44px] flex-1 flex-col items-start justify-center md:hidden [&>div]:flex [&>div]:flex-col [&>div]:justify-center"><slot name="logo" /></div>
        <button class="navbar--hide-menu flex h-[44px] w-[44px] flex-0 cursor-pointer items-center justify-center p-2 md:hidden" aria-label="Hide menu" @click="open = false">
          <svg viewBox="0 0 256 256" width="32" height="32" fill="currentColor" aria-hidden="true"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>
        </button>
      </div>
      <div class="navbar--dropdown-menu-wrapper relative col-span-1 col-start-1 row-span-1 row-start-2 container mx-auto min-h-0 w-full flex-1 p-2 px-4 md:p-0">
        <div :class="['navbar--dropdown-menu flex flex-col items-stretch justify-start gap-2 md:flex-row max-h-full overflow-auto md:overflow-visible', `md:justify-${menuAlign}`]"><slot name="navigation" /></div>
      </div>
      <div class="navbar--links col-span-1 col-start-1 row-span-1 row-start-3 ml-auto flex w-full flex-initial shrink-0 grow-0 flex-col justify-end gap-2 md:w-auto md:flex-row"><slot name="links" /></div>
    </div>
    <div class="navbar--hamburger-container flex min-h-[44px] min-w-[44px] shrink-0 grow-0 items-center justify-center md:hidden">
      <button class="navbar--hamburger flex items-center justify-center" aria-label="Show menu" @click="open = true">
        <svg viewBox="0 0 256 256" width="32" height="32" fill="currentColor" aria-hidden="true"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" /></svg>
      </button>
    </div>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's navbar. Below its md breakpoint the menu opens over the page, which
// Dashi's navbar.js does in Drupal and this component does here.
export default {
  mixins: [DruxtCanvasComponentMixin],
  props: { menuAlign: { type: String, default: 'center' } },
  data: () => ({ open: false }),
  watch: { $route() { this.open = false } },
  methods: {
    onMenuClick(event) {
      if (event.target.closest && event.target.closest('a')) this.open = false
    },
  },
}
</script>

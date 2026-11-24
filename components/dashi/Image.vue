<template>
  <img v-if="src" :class="imgClass" :src="src" :alt="alt" :width="width" :height="height" loading="lazy">
</template>

<script>
// An image media item, as Dashi's templates render `canvas:image`. It fetches
// the media item and its file through Druxt, so it works with the mock and
// with a real Drupal alike.
export default {
  props: {
    media: { type: Object, default: null },
    imgClass: { type: String, default: 'object-cover w-full h-full' },
  },
  data: () => ({ src: '', alt: '', width: undefined, height: undefined }),
  async fetch() {
    if (!this.media) return
    const media = await this.$store.dispatch('druxt/getResource', { type: this.media.type, id: this.media.id })
    const image = (((media || {}).data || media || {}).relationships || {}).field_media_image
    if (!image || !image.data) return
    const file = await this.$store.dispatch('druxt/getResource', { type: image.data.type, id: image.data.id })
    const uri = (((file || {}).data || file || {}).attributes || {}).uri || {}
    this.src = uri.url || ''
    this.alt = (image.data.meta || {}).alt || ''
    this.width = (image.data.meta || {}).width
    this.height = (image.data.meta || {}).height
  },
}
</script>

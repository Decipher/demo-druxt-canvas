# Druxt and Drupal Canvas, with no Drupal

A Nuxt 2 site that renders the Drupal Canvas pages of Drupal CMS's Dashi site
template, through [Druxt](https://druxtjs.org) and
[@druxt-contrib/canvas](https://www.npmjs.com/package/@druxt-contrib/canvas).
No Drupal runs behind it. [decoupled-drupal-mock](https://github.com/Decipher/decoupled-drupal-mock)
answers Drupal's JSON:API from a recording of a real Dashi site.

[Open it in StackBlitz](https://stackblitz.com/github/Decipher/demo-druxt-canvas?file=nuxt.config.js)
and it starts by itself.

## Run it

```sh
npm install
npm start
```

Then open <http://localhost:3000>. `npm start` runs the mock on port 3005 and
`nuxt dev` beside it. On Node 18 or later, webpack 4 needs OpenSSL's legacy
provider. StackBlitz sets it from `.stackblitzrc`. Elsewhere, set it yourself:

```sh
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## What to look at

- `/` and `/canvas-external` are Canvas pages. Druxt Router finds them by
  path, and the site has no Nuxt page of its own.
- The header and footer are Dashi's Canvas page variant, which
  `layouts/default.vue` renders through the same wrappers as a page.
- `components/druxt/` holds a wrapper for each Canvas component, view, menu
  and entity those pages use. Each one writes the markup Dashi's own template
  writes, so Dashi's CSS styles it. Its path is its name, as Druxt names
  wrappers: `druxt/canvas/sdc/dashi-theme/Heading.vue` is
  `DruxtCanvasSdcDashiThemeHeading`, Dashi's heading, and
  `druxt/view/recipes/Latest.vue` is `DruxtViewRecipesLatest`, its latest
  recipes. `components/dashi/` holds the parts they share, such as Dashi's
  card.
- The recipes and articles the front page links to are nodes, rendered
  through Druxt Entity.

Dashi shows its recipes and articles through Canvas content templates, which
Druxt doesn't read yet. So the card, hero and node page wrappers read each
node's fields themselves. Two of Dashi's views, related recipes and more
featured articles, answer JSON:API with an error on Dashi's own Drupal. Their
wrappers ask JSON:API for the same nodes with a filter and a sort instead, and
get the ones Dashi shows.

## Point it at a real Drupal

Change `baseUrl` in `nuxt.config.js` to your site's address, and run
`npm run dev` on its own:

```js
export default {
  modules: ['druxt-site', '@druxt-contrib/canvas'],
  druxt: { baseUrl: 'https://drupal.example.com', proxy: { api: true } },
}
```

The site needs Canvas and the Druxt module set up as
[Drupal setup](https://github.com/druxt-contrib/druxt-canvas/blob/0.x/docs/drupal-setup.md)
describes.

The wrappers here are for Dashi's components. A site built from another
template needs wrappers for its own, and `nuxt dev` names the ones it looks
for on each component that has none.

## Licence

GPL-2.0-or-later. `static/dashi/` holds the Dashi theme's CSS, fonts, logo and
images, copied from the theme under its own licence, GPL-2.0-or-later. Lora,
its heading font, is under the SIL Open Font License.

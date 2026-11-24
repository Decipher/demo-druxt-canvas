// Helpers the Dashi wrappers share. They read what Dashi's Canvas content
// templates show from the node itself, as Druxt has no content templates yet.

/** A node's path: its alias, or its system path. */
export const nodePath = (node) =>
  ((node.attributes || {}).path || {}).alias ||
  `/node/${(node.attributes || {}).drupal_internal__nid}`

/** The label Dashi's cards show above the title, from the node's bundle. */
export const bundleLabel = (node) =>
  ({ 'node--recipe': 'Recipe', 'node--article': 'Article' })[node.type] || ''

/** "View recipe" or "View article". */
export const viewLabel = (node) => `View ${bundleLabel(node).toLowerCase() || 'page'}`

/** A recipe's difficulty, as Dashi writes it: "Easy", "Medium", "Hard". */
export const difficulty = (node) => {
  const value = (node.attributes || {}).field_difficulty
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : ''
}

/** The node's featured image media, as a relationship's data. */
export const featuredMedia = (node) =>
  (((node.relationships || {}).field_featured_image || {}).data) || null

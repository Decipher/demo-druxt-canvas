<template>
  <section v-if="recipes.length" class="@container relative mx-auto flex flex-col items-stretch mt-0 mb-0 pt-0 pb-0 text-foreground cq-full">
    <div class="container mx-auto px-4 [&_.cq-full]:mx-0 [&_.cq-full]:w-full">
      <div class="@container relative mx-auto flex flex-col items-stretch lg:max-w-full">
        <div class="grid w-full min-w-0 gap-4 @sm:gap-6 @3xl:gap-8 [&>*]:w-full [&>*]:min-w-0 [&_.view-content]:grid [&_.view-content]:w-full [&_.view-content]:min-w-0 [&_.view-content]:gap-4 [&_.view-content]:md:gap-6 [&_.view-content]:xl:gap-8 grid-cols-1 [&_.view-content]:sm:grid-cols-2 [&_.view-content]:lg:grid-cols-4">
          <div class="related-recipes pt-2 pb-10">
            <h2 class="mb-6 text-center font-serif text-2xl font-semibold md:text-3xl">Related recipes</h2>
            <div class="view view-recipes view-id-recipes view-display-id-related">
              <div class="view-content">
                <div v-for="node in recipes" :key="node.id" class="views-row"><DashiCard :node="node" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Dashi's related recipes: the four newest others in the recipe's category.
// Dashi's own view answers JSON:API with an error, so this asks JSON:API for
// the same recipes directly. It finds the four Dashi shows, in its order.
export default {
  props: { recipe: { type: Object, required: true } },
  data: () => ({ recipes: [] }),
  async fetch() {
    const category = (((this.recipe.relationships || {}).field_recipe_category || {}).data || [])[0]
    if (!category) return
    const collection = await this.$store.dispatch('druxt/getCollection', {
      type: 'node--recipe',
      query: `filter[status]=1&filter[field_recipe_category.id]=${category.id}&sort=-created&page[limit]=5`,
    })
    this.recipes = ((collection || {}).data || []).filter((node) => node.id !== this.recipe.id).slice(0, 4)
  },
}
</script>

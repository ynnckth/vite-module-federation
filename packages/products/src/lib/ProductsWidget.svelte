<script lang="ts">
  import ProductsCard from "./ProductsCard.svelte";
  import { products } from "./products";
</script>

<div style="border-style: dashed; border-color: blue">
  <h2>All Products [Products Remote Module]</h2>
  <div style="display: 'flex', flexWrap: 'wrap', gap: '35px">
    {#each products as product, i}
      <ProductsCard {product} />
    {/each}
  </div>
</div>

<!---->
<!--   return ( -->
<!--     <div -->
<!--       style={{ -->
<!--         borderStyle: "dashed", -->
<!--         borderColor: "var(--products-module-color)", -->
<!--       }} -->
<!--     > -->
<!--       <h2>All Products [Products Remote Module]</h2> -->
<!--       <div style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}> -->
<!--         {products.map((p) => ( -->
<!--           <ProductCard key={p.id} product={p} /> -->
<!--         ))} -->
<!--       </div> -->
<!--     </div> -->
<!--   ); -->
<!-- }; -->
<!-- export default ProductsWidget; -->

<style>
</style>

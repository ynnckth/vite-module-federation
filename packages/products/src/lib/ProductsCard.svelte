<script lang="ts">
  import { type Product } from "./products";

  export let product: Product;
</script>

<div
  style="max-width: '250px', padding: '20px', box-shadow: '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)'"
>
  <div>
    <strong>{product.name}</strong>
  </div>
  <p>{product.description}</p>
  <p>{`Unit price: $${product.unitPrice}`}</p>
</div>

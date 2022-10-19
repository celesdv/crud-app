<script>
  export let product;
</script>

<div class="col-md-6">
  {#if !product.image}
    <img
      src="https://www.adesso.com/wp-content/uploads/2018/04/no_products_found.png"
      alt="not found"
      class="img-fluid m-2"
    />
  {:else}
    <img src={product.image} alt="product" class="img-fluid m-2" />
  {/if}
</div>
<div class="col-md-6">
  <div class="card-body">
    <h5>
      <strong>
        {product.name}
      </strong>
      <span>
        <small>
          {product.category}
        </small>
      </span>
    </h5>
    <p class="card-text">{product.description}</p>
  </div>
</div>

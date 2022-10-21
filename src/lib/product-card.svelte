<script>
  export let product;
</script>

<div class="col-md-4">
  {#if !product.imageURL}
    <img
      src="https://www.adesso.com/wp-content/uploads/2018/04/no_products_found.png"
      alt="not found"
      class="img-fluid m-2"
    />
  {:else}
    <img src={product.imageURL} alt="product" class="img-fluid m-2 rounded" />
  {/if}
</div>
<div class="col-md-8">
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

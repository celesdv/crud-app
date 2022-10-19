<script>
  import ProductCard from "./lib/product-card.svelte";
  import { v4 as uuidv4 } from "uuid";

  let products = [];

  let product = {
    name: "",
    description: "",
    category: "",
    imageURL: "",
  };

  const cleanProduct = () => {
    product = {
      name: "",
      description: "",
      category: "",
      imageURL: "",
    };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4(),
      name: product.name,
      description: product.description,
      category: product.category,
      image: product.imageURL,
    };

    products = products.concat(newProduct);
    cleanProduct();

    console.log(products);
  };

  const deleteProduct = (id) => {
    console.log(id);
  };
</script>

<main>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-6">
        {#each products as product}
          <div class="card mb-2">
            <div class="row m-2">
              <ProductCard {product} />
              <div class="d-flex justify-content-end w-100">
                <button
                  class="btn btn-danger m-2"
                  on:click={deleteProduct(product.id)}>Delete</button
                >
                <button class="btn btn-secondary m-2">Edit</button>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <form on:submit={onSubmitHandler}>
              <div class="form-group">
                <input
                  bind:value={product.name}
                  type="text"
                  placeholder="Product name"
                  id="product-name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <textarea
                  bind:value={product.description}
                  id="product-description"
                  rows="3"
                  placeholder="Product description"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  bind:value={product.imageURL}
                  type="url"
                  id="product-img-url"
                  placeholder="https://web-url.com"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <select
                  bind:value={product.category}
                  id="product-category"
                  class="form-control"
                >
                  <option value="laptops">Laptokps</option>
                  <option value="peripherials">Peripherials</option>
                  <option value="servers">Servers</option>
                </select>
              </div>

              <button class="btn btn-success">Save Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>

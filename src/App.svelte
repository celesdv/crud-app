<script>
  import ProductCard from "./lib/product-card.svelte";
  import { v4 as uuidv4 } from "uuid";
  import Noty from "noty";
  import "noty/lib/noty.css";

  let products = [];
  let editStatus = false;

  let product = {
    id: "",
    name: "",
    description: "",
    category: "",
    imageURL: "",
  };

  const cleanProduct = () => {
    product = {
      id: "",
      name: "",
      description: "",
      category: "",
      imageURL: "",
    };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (editStatus) {
      updateProduct();
    } else {
      addProduct();
    }
  };

  const deleteProduct = (id) => {
    products = products.filter((product) => product.id !== id);
  };

  const editProduct = (productUpdated) => {
    editStatus = true;
    product = productUpdated;
  };

  const cancelEdit = () => {
    editStatus = false;
    cleanProduct();
  };

  const addProduct = () => {
    const newProduct = {
      id: uuidv4(),
      name: product.name,
      description: product.description,
      category: product.category,
      imageURL: product.imageURL,
    };

    products = products.concat(newProduct);
    cleanProduct();

    console.log(products);
    new Noty({
      theme: "sunset",
      type: 'success',
      text: "Product added successfuly",
      timeout: 3000,
    }).show();
  };

  const updateProduct = () => {
    let updatedProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      imageURL: product.imageURL,
    };

    const index = products.findIndex((p) => p.id === product.id);
    products[index] = updatedProduct;

    editStatus = false;
    cleanProduct();
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
                <button
                  class="btn btn-secondary m-2"
                  on:click={editProduct(product)}>Edit</button
                >
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

              {#if editStatus}
                <button class="btn btn-secondary">Edit Product</button>
                <button class="btn btn-danger" on:click={cancelEdit}
                  >Cancel Edit</button
                >
              {:else}
                <button class="btn btn-success">Save Product</button>
              {/if}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>

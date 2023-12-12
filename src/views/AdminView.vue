<template>
  <div class="container" py-4>
    <router-link :to="{name: 'Category'}">
    <button class="btn btn-primary btn-lg">Admin Category</button>
  </router-link>
  <br>
  <router-link :to="{name: 'AdminProduct'}">
    <button class="btn btn-primary btn-lg">Admin Product</button>
  </router-link>
  </div>
  <!-- <router-link :to = "{name: 'Category'}">
    <button class="btn btn-primary btn-lg">Admin Category</button>
  </router-link>
  <br>
  <router-link :to = "{name: 'Product'}">AdminProduct
    <button class="btn btn-primary btn-lg">Admin Sản phẩm</button>
  </router-link> -->
</template>

<script>
export default {

}
</script>

<style>
.btn{
  margin-bottom: 20px;
}
</style>
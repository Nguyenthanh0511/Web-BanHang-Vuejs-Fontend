<template>

<div class="card h-100 w-100">
  <div class="embed-responsive embed-responsive-16by9">
    <img
      class="card-img-top embed-responsive-item"
      :src="product.imageURL"
      alt="Card image cap"
    />
  </div>
  <div class="card-body d-flex flex-column justify-content-between">
    <router-link :to="{name: 'Showdetails', params: {id: product.id}}">
      <h5 class="card-title">{{ product.name }}</h5>
    </router-link>
    <p class="card-text">
      {{ product.description }} 
    </p>
    <p class="font-weight-bold">$<i>{{product.price}}</i></p>
    <router-link :to="{name: 'EditProduct', params: {id: product.id}}" v-show="$route.name == 'AdminProduct'">
      <button class="btn btn-primary mt-auto">Edit</button>
    </router-link>     
  </div>
</div>
  <!-- <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
        <img 
        class="card-img-top embed-responsive-item"
        :src="product.imageURL" 
        alt="Card image cap">
    </div>
  </div>
  <div class="card-body">
    <router-link :to="{name: 'Showdetails', params: {id: product.id}}">
      <h5 class="card-title">{{ product.Name }}</h5>
    </router-link>
    <p class="card-text">{{ product.description.substring(0, 65) }}...</p>
    <router-link :to="{name: 'Product', params: {id: product.id}}" v-show="$route.name == 'Product'">
        <button class="btn btn-primary">Edit</button>
      </router-link>     
  </div> -->
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"]
}
// export default {
//     name:"ProductBox",
//     props :["product"], // Điểm tựa để revice data 
//     // methods:{},
// }
</script>

<style>
.card-img-top {
  object-fit: cover;
}
</style>
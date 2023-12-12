<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your WishList</h4>
      </div>
    </div>

      <div class="row" v-if="!loading">
        <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="product"></ProductBox>
        </div>
      </div>
      <div v-else>
        <p>Fetching your wishlist items...</p>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductBox from '../../components/Product/ProductBox.vue';

export default {
  data() {
    return {
      products: null,
      token: null,
      loading: null,
    };
  },
  name: "WishList",
  props: ["baseURL", "categories"],
  components: {
    ProductBox, // Add this line to register the ProductBox component
  },
  methods: {
    async fetchWishlist() {
      this.loading = true;
      try {
        console.log('Base URL:', this.baseURL);
        const response = await axios.get(`http://limitless-lake-55070.herokuapp.com/wishlist/${this.token}`);
        this.products = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    console.log('Token Length:', this.token ? this.token.length : 'N/A');
    console.log('Token Preview:', this.token ? this.token.slice(0, 10) + '...' : 'N/A');

    if (this.token) {
      // Token exists, proceed with other operations
      this.fetchWishlist();
    } else {
      // Token is missing, handle accordingly
      console.error('Token is missing.');
    }
  },
};
</script>

<style>
  /* Add your custom styles here */
</style>

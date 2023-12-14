//ProductCart.vue 
<template>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha256-Qk/1Wk7YgUnb8wNJtt3g6jrgnQG8T4dx4kTtupv7eNU=" crossorigin="anonymous" />
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4>Our Products</h4>
        <router-link :to="{name: 'AddProducts'}" style="float: right"><button class="btn btn-dark">Add Product</button></router-link>
      </div>
    </div>
    <div class="row">
      <!-- display all the products in productbox component -->
      <div v-for="(product , index) in sliceProducts" :key="index" class="col-md-6 col-xl-4 col-12 d-flex">
        <div>
          <ProductBox :product="product"></ProductBox>
        </div>
      </div>
    <!-- display filtered products only when searchTerm is not empty -->
      <div v-for="(product, index) in filteredProduct" :key="index" class="col-md-6 col-xl-4 col-12 d-flex">
        <div v-if="searchTerm">
          <ProductBox :product="product"></ProductBox>
        </div>
    </div>
      <div class="col-md-12 col-xl-4 col-12 d-flex justify-content-center " style="width=250px;">
       <button class="btn btn-primary" @click="AgainMore">
          <i class="fas fa-chevron-left"></i> Prev
        </button>
        <button class="btn btn-primary" @click="loadMore">
        Next <i class="fas fa-chevron-right"></i>
      </button>
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from '../../components/Product/ProductBox.vue'
export default {
  components: {ProductBox},
  props: ["products","searchTerm"],
    // Other methods
  data() {
    return {
    pageSize : 9,
    currentPage : 1,
    // searchTerm:'',
    }
  },
  computed:{
    startIndex(){
      return (this.currentPage -1 )*this.pageSize;
    },
    sliceProducts(){
      return this.products.slice(this.startIndex,this.startIndex + this.pageSize);
    },
      
  },
  methods:{
   loadMore(){
        this.currentPage++;
      },
    AgainMore(){
        this.currentPage--;
    },
    
  },
  watch:{
    searchTerm(newTerm){
      console.log('receviced data product ',newTerm);
    }
  }
  
 
}
// import ProductBox from '../../components/Product/ProductBox.vue'
// export default {
//     name:'ProductChild', // đặt tên như này để tránh multipl-word
//     components:{ProductBox},
//     props:["products"],
//     data(){
//         return{
//             baseURL: "https://limitless-lake-55070.herokuapp.com/"
//         };
//     },
//     methods: {
//     },
//     mounted(){
//     }
//}
</script>

<style>

.btn-primary {
  background-color: #007bff; /* Màu nền */
  color: #fff; /* Màu chữ */
  border-color: #007bff; /* Màu viền */
}

.btn-primary:hover {
  background-color: #08121e; /* Màu nền khi hover */
  border-color: #abbccf; /* Màu viền khi hover */
}

/* h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-category {
  float: right;
  font-weight: 500;
} */
</style>
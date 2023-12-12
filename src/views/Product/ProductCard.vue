<template>
  <!-- <div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h4 class="pt-3">Sản phẩm</h4>
            <router-link :to="{name:'AddProducts'}" style="float:right">
                <button class="btn">Thêm sản phẩm</button>
            </router-link>
        </div>  
    </div>
    <div class="row">
      //display all the products in productbox component 
        <div
        v-for="product of products"
        :key ="product.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
        >
        <ProductBox :product="product"></ProductBox>
        </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4>Our Products</h4>
        <router-link :to="{name: 'AddProducts'}" style="float: right"><button class="btn">Add Product</button></router-link>
      </div>
    </div>
    <div class="row">
      <!-- display all the products in productbox component -->
      <div v-for="(product , index) in sliceProducts" :key="index" class="col-md-6 col-xl-4 col-12 d-flex">
        <div>
          <ProductBox :product="product"></ProductBox>
        </div>
      </div>
      <div class="col-md-6 col-xl-4 col-12 d-flex" style="width=250px;">
        <button style="width=250px;" @click = AgainMore>Load Again
        </button>  
        <button style="width=250px;" @click = loadMore>Load More
        </button>  
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/Product/ProductBox.vue'
export default {
  components: {ProductBox},
  props: ["products"],
    // Other methods
  data() {
    return {
    pageSize : 9,
    currentPage : 1,
    }
  },
  computed:{
    startIndex(){
      return (this.currentPage -1 )*this.pageSize;
    },
    sliceProducts(){
      return this.products.slice(this.startIndex,this.startIndex + this.pageSize);
    }
  },
  methods:{
   loadMore(){
        this.currentPage++;
      },
    AgainMore(){
        this.currentPage--;
    }
  },
 
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
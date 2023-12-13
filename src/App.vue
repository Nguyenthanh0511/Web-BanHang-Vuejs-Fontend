<template>
  <MainView
    v-if="!['SignUp,SignIn'].includes($router.name)"
  />
  <hr>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->


  <router-view v-if="categories && products" style="min-height: 60vh;"
  :baseURL ="baseURL" 
  :categories="categories"
  :products="products"

  @fetchData="fetchData"
  >
  </router-view>
  <hr>
  <!-- footer -->
  <FooterBox></FooterBox>
</template>

<script>
import MainView from './components/MainView.vue';
import FooterBox from './components/FooterBox.vue';
// import MainChila from './components/MainChila.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
  components: {
    MainView,
    FooterBox,
    // MainChila,
  },
  data(){
    return{
      baseURL : "http://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      cartCount: 0,     
    }
  },
  methods: {
    // api call to get all the categories
     async fetchData(){ //Không đồng bộ
      await axios.get(this.baseURL + "category/") // await với phưogn thức axios lấy http get api
      .then((res)=>(this.categories = res.data)) // gán dữ liệu vào categories 
      .catch((err)=> console.log('err',err)); // catch là xử lý không lấy được sản phẩm 

      // api call to get the products
      await axios.get(this.baseURL + "product/")
      .then((res)=>(this.products = res.data))
      .catch((err)=>console.log('err',err));
     
         //fetch cart items
      if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
     },
      loadMore(){
        this.currentPage++;
      },
  },
  watch:{
    currentPage:{
      handler :'fetchData',
      immediate:true,
    }
  },
  resetCartCount(){
    this.cartCount = 0 ;
  },
  mounted() {
    this.fetchData();
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: hsl(210, 29%, 24%);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

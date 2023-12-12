<template>
     <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float:right">Add Category</button>
        </router-link>
      </div>
      <!-- <div>{{ categories[0] }}</div> -->
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>
  </div>
</template>

<script>
//const axios = require("axios");
// import axios from "axios";
import CategoryBox from'../../components/Category/CategoryBox.vue'
export default {
    name:'CategoryChild',
    components: {CategoryBox},
    props:["categories"],
    data() {
      return {
        baseURL: "https://limitless-lake-55070.herokuapp.com",
       //categories: [],
      };
    },
     methods: {
      // async getCategories() {
      //   await axios
      //     .get(`${this.baseURL}/category/`)
      //     .then(res => this.categories = res.data)
      //     .catch(err => console.log(err));
      // },
    },
    mounted() {
      //this.getCategories();
        // if(this.$router.name==='AdminCategory'&&!localStorage.getItem('token')){
        //     this.$router.push({name: 'Signin'});
        // }
    },
};
</script>

<style>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-category {
  float: right;
  font-weight: 500;
}
</style>
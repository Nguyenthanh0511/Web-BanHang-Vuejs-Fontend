import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListProducts from '../views/Category/ListProducts';
import AddCategory from'../views/Category/AddCategory';
import Category from '../views/Category/Category';
import EditCategory from '../views/Category/EditCategory';
import ProductCard from '../views/Product/ProductCard';
import EditProduct from '../views/Product/EditProduct';
import AdminView from '../views/AdminView';
import AddProducts from '../views/Product/AddProducts';
import ShowDetails from '../views/Product/ShowDetails';
import WishList from '../views/Product/WishList';
import Cart from '../views/Cart.vue'
import Signup from '../views/Signup.vue'
import SignIn from '../views/Signin.vue'
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // category detail page
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  // category edit
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path:'/admin/product',
    name:'AdminProduct',
    component:ProductCard
  },
  // edit product
  {
    path: '/admin/product/:id',    
    name: 'EditProduct',
    component: EditProduct
  },
  //admin home page
  {
    path: '/admin/view',    
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/admin/product/new',    
    name: 'AddProducts',
    component: AddProducts
  },

  //show detail of products
  {
    path: '/product/show/:id',
    name: 'Showdetails',
    component: ShowDetails
  },
  // Đăng ký 
  {
    path:'/signUp',
    name:"SignUp",
    component: Signup
  },
  {
    path:'/signIn',
    name:"SignIn",
    component:SignIn
  },
  {
    path:'/wishList',
    name:"WishList",
    component:WishList
  },
  {
    path:'/cart',
    name:"Cart",
    component:Cart
  },
  {
    path:'/',
    redirect:'/Home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

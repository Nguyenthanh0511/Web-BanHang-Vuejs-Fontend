<template>
    <div class="container">
      <!-- Logo Div -->
      <div class="row">
        <div class="col-12 text-center pt-3">
          <router-link :to="{ name: 'Home' }">
            <img id="logo" src="../assets/LogoTech.png" />
          </router-link>
        </div>
      </div>
  
      <!-- Form Header -->
      <div class="row">
        <div class="col-12 justify-content-center d-flex flex-row pt-5">
          <div id="signup-div" class="flex-item" style="border: 2px solid black; border-radius: 12px;">
            <h2 class="pt-4 pl-4 text-center">Tạo tài khoản</h2>
            <form @submit="signup" class=" pt-4 pl-4 pr-4">
              <!-- Email Input -->
              <div class="form-group " style="margin-bottom: 10px;">
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  required
                  placeholder="Email" 
                />
              </div>
  
              <!-- First Name and Last Name Inputs -->
              <div class="form-row">
                <div class="col">
                  <div class="form-group" style="margin-bottom: 10px;">
                    <input
                      type="name"
                      class="form-control"
                      v-model="firstName"
                      required
                       placeholder="First name" 
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="margin-bottom: 10px;">
                    <input
                      type="name"
                      class="form-control"
                      v-model="lastName"
                      required
                       placeholder="Last Name" 
                    />
                  </div>
                </div>
              </div>
              <!-- Password Input -->
              <div class="form-group" style="margin-bottom: 10px;">
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  required
                   placeholder="Password" 
                />
              </div>
              <!-- Confirm Password Input -->
              <div class="form-group" style="margin-bottom: 10px;">
                <input
                  type="password"
                  class="form-control"
                  v-model="passwordConfirm"
                  required
                   placeholder="Password confirm" 
                />
              </div>
  
              <!-- Create Account Button -->
              
            </form>
            <div class = "text-center ">

              <button type="submit" class="btn btn-primary  ">
                  Create Account
                </button>
            </div>
            <!-- Horizontal Line -->
            <hr />
            <!-- Already Have an Account? Text -->
            <small class="form-text text-muted pt-2 pl-4 text-center">
              Already Have an Account?
            </small>
            <!-- Sign In Link (commented out) -->
            <p class="text-center">
              <!-- <router-link
                class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
                :to="{ name: 'Signin' }"
              >Signin Here</router-link> -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import swal from 'sweetalert';
  import axios from 'axios';
    export default {
      name: "SignupWebsite",
      props :  ["baseURL"],
      data(){
          return {
              email:null,
              firstName :null,
              lastName:null,
              password:null,
              passwordConfirm:null,
          };
      },
      methods:{
          async signup(e){
              e.preventDefault();
                  if(this.password ===this.passwordConfirm){
                      //You will make the post of user 
                      const user ={
                          email:this.email,
                          firstName : this.firstName,
                          lastName:this.lastName,
                          password:this.password,
                      }
                      //gọi tới api 
                      await axios 
                      .post(`${this.baseURL}user/signup`, user)
                      .then(()=>{
                          //redict to home page . it mean if you sign up a success then it redict to home page .
                          this.$router.replace("/");
                          //notification
                           swal({
                          text: "User signup successful. Please Login",
                          icon: "success",
                          closeOnClickOutside: false,
                          });
                      })
                      .catch((err) => {
                          console.log(err);
                      });
                  }
                  else{
                      //password doesn't match 
                       swal({
                          text: "Error! Passwords are not matching",
                          icon: "error",
                          closeOnClickOutside: false,
                      });
                  }
              }
          }
      }
  </script>
  <style scoped>
  #signup-div{
    width:500px;
    padding:10px;
  }
  lable{
    margin-right: 300px;
  }
  .form-group{
    padding-bottom:20px;
  }
  </style>
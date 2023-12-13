<template>
  <header :class="{'scrolled-nav': scrolledNav}">
    <nav>
      <div class="branding">
        <img id="logo" src="../assets/icon.png" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name: 'Category'}">Category</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Porfolio</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
          <li><router-link class="link" :to="{name: 'AdminView'}">Admin</router-link></li>
          <li><router-link class="link" :to="{name: 'SignIn'}">Log In</router-link></li>
          <li><router-link class="link" :to="{name: 'SignUp'}">Sign Up</router-link></li>
          <li><router-link class="link" :to="{name: 'WishList'}">Wish list</router-link></li>
        </ul>
      </transition>
      <div class="form">
        <form class="form-inline ml-auto mr-auto mb-2 mb-lg-0">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
      </div>
      <div class="row">
        <ul>
          <li class="wc-menu-item menu-item-align-right">
            <a href="https://webaoe.com/cart/" class="cart-contents shopping-cart has-svg-icon" title="View your shopping cart" data-wpel-link="internal"><span class="gp-icon shopping-cart">
            <svg viewBox="0 0 576 512" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" style="margin-left: 10px;">
              <path fill="none" d="M0 0h576v512H0z"></path>
              <path d="M181.54 409.6c-29.249 0-52.914 23.04-52.914 51.2 0 28.16 23.665 51.2 52.915 51.2 29.249 0 53.18-23.04 53.18-51.2 0-28.16-23.931-51.2-53.18-51.2zM22 0v51.2h53.18l95.725 194.304-35.897 62.464C115.598 342.272 141.124 384 181.54 384h319.08v-51.2h-319.08l29.249-51.2h198.096c19.943 0 37.492-10.496 46.533-26.368L550.61 89.088c9.838-16.896-2.925-37.888-23.133-37.888H133.944L108.95 0H22zm425.442 409.6c-29.25 0-52.915 23.04-52.915 51.2 0 28.16 23.665 51.2 52.915 51.2 29.249 0 53.18-23.04 53.18-51.2 0-28.16-23.931-51.2-53.18-51.2z"></path>
            </svg>
            </span><span class="number-of-items no-items"></span><span class="amount"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "MainChila",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;

    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return; 
    },
  },
  // data() {
  //   return {
  //     token: null,
  //   };
  // },
  // mounted() {
  //   console.log("Token :",this.token)
  //   this.token = localStorage.getItem('token');
  //   console.log("Token :",this.token)
  // },
};

</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0,0,0,0.8);
  z-index: 99;
  width: 100%;
  position:fixed;
  transition: .5s ease all;
  color:#fff;

  nav {
    position:relative;
    display:flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 1140px) {
      max-width: 1140px;
    }

    ul, .link {
      font-weight: 500;
      color:#fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color:#00afea;
        border-color:#00afea;
      }
    }

    .branding {
      display:flex;
      align-items:center;

      img {
        width:50px;
        transition: .5s ease all;
      }
    }

    .navigation {
      display:flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display:flex;
      align-items: center;
      position:absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: .8s ease all;

      }
    }

    .icon-active {
      transform:rotate(180deg);

    }

    .dropdown-nav {
      display:flex;
      flex-direction: column;
      position:fixed;
      width: 100%;
      max-width: 250px;
      height: 30%;
      background-color: #fff;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
        .link {
          color:#000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-form,
    .mobile-nav-leave-to {
      transform:translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform:translateX(0);
    }
  }
}
.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      }
    }
  }
}

</style>

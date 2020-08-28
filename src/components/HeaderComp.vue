<template>
  <header>
    <mq-layout mq="mobile">
      <div class="nav-mobile">
        <router-link to="/"
          ><img class="logo" src="../assets/logos/axcrypt_text.png" alt="Logo"
        /></router-link>
        <hamburger-menu />
      </div>
      <ul class="nav-mobile-links">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path">
            {{link.text}}
          </router-link>
        </li>
      </ul>
    </mq-layout>

    <!-- <mq-layout mq="desktop">
      <h1>desktop</h1>
    </mq-layout> -->
  </header>
</template>

<script>
import HamburgerMenu from './HamburgerMenu';
export default {
  components: {
    HamburgerMenu,
  },
  mounted(){
    console.log(this.$router.options.routes);
  },
  computed: {
    navLinks(){
      const routes = this.$router.options.routes;
      const returnValue = routes.map(obj => {
        // return obj.name.split('View')[0].replace(/([A-Z])/g, ' $1').trim();
        return { text: obj.name.split('View')[0].replace(/([A-Z])/g, ' $1').trim(),
                path: obj.path
        }
      })
      return returnValue.filter(item => 
        !item.text.includes('Page')
      );
    }
  }

};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.logo {
  width: 145px;
  margin: 30px 0;
}

.nav-mobile {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 767px;
  margin: auto;
  border-bottom: 1px $light-gray solid;
}

.nav-mobile-links {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 15px 25px;
    border-bottom: 1px $light-gray solid;
    a {
      font-size: 13px;
      font-weight: 300;
      color: $light-green;
      text-decoration: none;
    }
  }
}
</style>

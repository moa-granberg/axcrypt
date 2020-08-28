<template>
  <header>
    <mq-layout mq="mobile">
      <div class="nav-mobile">
        <router-link to="/">
          <img class="logo" src="../assets/logos/axcrypt_text.png" alt="Logo" />
        </router-link>
        <hamburger-menu v-on:toggle="toggleDropDownMenu" />
      </div>
      <div
        :class="show ? 'show drop-down-menu-mobile' : 'drop-down-menu-mobile'"
      >
        <ul class="nav-mobile-links">
          <li v-for="link in navLinks" :key="link.path">
            <router-link :to="link.path">
              {{ link.text }}
            </router-link>
          </li>
        </ul>
        <language-bar />
      </div>
    </mq-layout>

    <!-- <mq-layout mq="desktop">
      <h1>desktop</h1>
    </mq-layout> -->
  </header>
</template>

<script>
import HamburgerMenu from './HamburgerMenu';
import LanguageBar from './LanguageBar';

export default {
  components: {
    HamburgerMenu,
    LanguageBar,
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    navLinks() {
      return this.$router.options.routes
        .map(obj => ({
          text: obj.name
            .split('View')[0]
            .replace(/([A-Z])/g, ' $1')
            .trim(),
          path: obj.path,
        }))
        .filter(item => !item.text.includes('Page') && item.text !== 'Home');
    },
  },

  methods: {
    toggleDropDownMenu() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.logo {
  width: 145px;
}

.nav-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 25px 20px;
  max-width: 767px;
  margin: auto;
  border-bottom: 1px $light-gray solid;
}

.drop-down-menu-mobile {
  margin-bottom: 10px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  max-height: 0;

  &.show {
    max-height: 600px;
  }
}

.nav-mobile-links {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 15px 25px;
    border-bottom: 1px $light-gray solid;
    &:last-of-type > a {
      font-weight: 400;
    }
    a {
      font-size: 13px;
      font-weight: 300;
      color: $light-green;
      text-decoration: none;
    }
  }
}
</style>

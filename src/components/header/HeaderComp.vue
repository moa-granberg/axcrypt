<template>
  <header :class="'header-wrapper ' + this.$mq">
    <div :class="'nav ' + this.$mq">
      <router-link to="/">
        <img class="logo" src="@/assets/logos/axcrypt_text.png" alt="Logo" />
      </router-link>
      <hamburger-menu
        v-if="$mq === 'mobile'"
        v-on:toggle="toggleDropDownMenu"
      />
    </div>
    <header-menu
      :showMobileMenu="showMobileMenu"
      v-on:hideMobileMenu="toggleDropDownMenu"
    />
  </header>
</template>

<script>
import HamburgerMenu from './HamburgerMenu';
import HeaderMenu from './HeaderMenu';

export default {
  components: {
    HamburgerMenu,
    HeaderMenu,
  },

  data() {
    return {
      showMobileMenu: false,
    };
  },

  methods: {
    toggleDropDownMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.logo {
  width: 145px;
}

.header-wrapper {
  &.desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    max-width: 1150px;
    height: $header-height;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 25px 20px;
  max-width: 767px;
  margin: auto;
  border-bottom: 1px $light-gray solid;

  &.desktop {
    border: none;
    margin: 0;
  }
}
</style>

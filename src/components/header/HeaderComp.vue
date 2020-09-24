<template>
  <header :class="'header ' + this.$mq">
    <section
      v-if="$mq === 'mobile'"
      :class="[{ show: showMobileMenu }, 'fade-layer', $mq]"
      @click="showMobileMenu = false"
    ></section>

    <section :class="'header-wrapper ' + this.$mq">
      <div :class="'nav ' + this.$mq">
        <router-link to="/" @click.native="showMobileMenu = false">
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
    </section>
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

.header {
  &.mobile {
    position: relative;
  }

  &.desktop {
    border-bottom: 1px solid $light-gray;
  }
}

.header-wrapper {
  background-color: $white;

  &.mobile {
    z-index: 2;
    position: relative;
  }

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
  border-bottom: 1px $light-gray solid;

  &.desktop {
    border: none;
    margin: 0;
  }
}

.fade-layer {
  z-index: 1;
  position: fixed;
  top: 0;

  &.show {
    height: 100vh;
    width: 100vw;
    background-color: rgba($black, 0.6);
  }
}
</style>

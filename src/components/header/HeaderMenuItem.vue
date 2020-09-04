<template>
  <li :class="'header-menu-item-wrapper ' + $mq">
    <div
      :class="'header-menu-item ' + $mq"
      @mouseover="handleShowSubmenuDesktop"
      @mouseleave="handleHideSubmenuDesktop"
    >
      <router-link
        @click.native="handleHideMenuMobile(link.children)"
        :to="link.path"
        class="header-menu-item-link"
        :class="[
          { 'router-link-active': subIsActive(link.children) },
          { 'router-link-disabled': link.children },
          $mq,
        ]"
      >
        {{ $t(link.phraseKey) }}
      </router-link>
      <div
        class="header-submenu-drop-down-btn"
        v-if="$mq === 'mobile' && link.children"
        @click="toggleSubmenuMobile"
      >
        <img
          src="@/assets/icons/keyboard_arrow_down.svg"
          alt="arrow"
          :class="{ rotated: showSubmenuMobile }"
        />
      </div>
    </div>

    <header-submenu
      :showMobile="showSubmenuMobile"
      :showDesktop="showSubmenuDesktop"
      :children="link.children"
      v-on:hideSubmenuDesktop="handleHideSubmenuDesktop"
      v-on:showSubmenuDesktop="handleShowSubmenuDesktop"
      v-on:hideMenuMobile="handleHideMenuMobile"
    />
  </li>
</template>

<script>
import HeaderSubmenu from './HeaderSubmenu';

export default {
  components: {
    HeaderSubmenu,
  },

  props: {
    link: {
      path: String,
      phraseKey: String,
    },
  },

  data() {
    return {
      showSubmenuMobile: false,
      showSubmenuDesktop: false,
    };
  },

  methods: {
    toggleSubmenuMobile() {
      this.showSubmenuMobile = !this.showSubmenuMobile;
    },

    handleHideSubmenuDesktop() {
      this.showSubmenuDesktop = false;
    },

    handleShowSubmenuDesktop() {
      this.showSubmenuDesktop = true;
    },

    handleHideMenuMobile(children) {
      if (!children) {
        this.$emit('hideMobileMenu');
      } else {
        this.toggleSubmenuMobile();
      }
    },

    subIsActive(input) {
      return input
        ? input.map(child => child.path).includes(this.$route.path)
        : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header-menu-item-wrapper {
  position: relative;

  &.mobile {
    border-bottom: 1px $light-gray solid;
  }
}

.header-menu-item {
  display: flex;
  align-items: center;

  &.mobile {
    justify-content: space-between;
    padding: 15px 0;
  }

  &.desktop {
    height: $header-height;
  }
}

.header-menu-item-link {
  font-size: 13px;
  font-weight: 300;
  text-decoration: none;

  &.router-link-disabled {
    pointer-events: none;
  }

  &.mobile {
    color: $dark-green;
    padding: 0 25px;
    width: 100vw;
  }

  &.desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $header-height;
    text-transform: uppercase;
    color: $gray;
    transition: color 0.3s;
    padding: 0 15px;

    &:hover {
      color: $light-green;
    }

    &.router-link-active {
      background-color: rgba(134, 185, 110, 0.2);
      border-bottom: 1px solid $light-green;
      color: $dark-green;
    }
  }
}

.header-submenu-drop-down-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    padding: 0 25px;
    width: 1.3em;
    opacity: 0.8;
    transform: rotate(0);
    transition: transform 0.4s;

    &.rotated {
      transform: rotate(180deg);
    }
  }
}
</style>

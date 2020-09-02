<template>
  <div :class="'header-menu-item-wrapper ' + $mq">
    <div
      :class="'header-menu-item ' + $mq"
      @mouseover="handleShowSubmenuDesktop"
      @mouseleave="handleHideSubmenuDesktop"
    >
      <router-link :to="link.path" :class="'header-menu-item-link ' + $mq">
        {{ $t(link.phraseKey) }}
      </router-link>
      <div
        class="header-submenu-drop-down-btn"
        v-if="$mq === 'mobile' && link.children"
        @click="toggleSubmenuMobile"
      >
        <img
          src="../assets/icons/keyboard_arrow_down.svg"
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
    />
  </div>
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
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

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
    padding: 0 15px;
    height: $header-height;
  }
}

.header-menu-item-link {
  font-size: 13px;
  font-weight: 300;
  text-decoration: none;

  &.mobile {
    color: $light-green;
    padding: 0 25px;
  }

  &.desktop {
    color: $gray;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover {
      color: $light-green;
    }
  }
}

.header-menu-wrapper > div:last-of-type .header-menu-item-link {
  font-weight: 400;
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

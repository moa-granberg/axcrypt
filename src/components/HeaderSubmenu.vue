<template>
  <div
    :class="'submenu-mouseover-div ' + $mq"
    @mouseover="handleShowSubmenuDesktop"
    @mouseleave="handleHideSubmenuDesktop"
  >
    <ul
      v-if="children"
      class="header-submenu-wrapper"
      :class="[{ 'show-mobile': showMobile, 'show-desktop': showDesktop }, $mq]"
    >
      <li
        v-for="child of children"
        :key="child.path"
        :class="'header-submenu-item ' + $mq"
      >
        <router-link
          @click.native="handleHideMenuMobile"
          :to="child.path"
          :class="'header-submenu-item-link ' + $mq"
        >
          {{ $t(child.phraseKey) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    children: Array, //{ path: string, phraseKey: string }
    showMobile: Boolean,
    showDesktop: Boolean,
  },

  methods: {
    handleHideSubmenuDesktop() {
      this.$emit('hideSubmenuDesktop');
    },

    handleShowSubmenuDesktop() {
      this.$emit('showSubmenuDesktop');
    },

    handleHideMenuMobile() {
      this.$emit('hideMenuMobile');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.submenu-mouseover-div {
  &.desktop {
    position: absolute;
    top: $header-height;
    pointer-events: none;
  }
}

.header-submenu-wrapper {
  padding: 0;
  
  &.mobile {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s;

    &.show-mobile {
      border-top: 1px solid $light-gray;
      max-height: 110px;
    }
  }

  &.desktop {
    width: 200px;
    max-height: 0;
    overflow: hidden;
    pointer-events: auto;
    opacity: 0;
    transition: max-height 0.1s, opacity 0.1s;

    &.show-desktop {
      max-height: 100px;
      opacity: 1;
      transition: max-height 0.3s, opacity 0.3s;
    }
  }
}

.header-submenu-wrapper > li:last-of-type {
  border-bottom: none;
}

.header-submenu-item {
  display: flex;
  align-items: center;

  &.mobile {
    padding: 15px 0;
    border-bottom: 1px solid $light-gray;
  }

  &.desktop {
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    padding: 10px 15px;
  }
}

.header-submenu-item-link {
  font-weight: 300;
  text-decoration: none;
  width: 100%;

  &.mobile {
    font-size: 13px;
    color: $light-green;
    padding: 0 45px;
  }

  &.desktop {
    font-size: 0.7em;
    color: $white;
    text-transform: uppercase;
  }
}
</style>

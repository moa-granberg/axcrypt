<template>
  <div :class="'header-menu-item-wrapper ' + $mq">
    <div :class="'header-menu-item ' + $mq">
      <router-link :to="link.path" :class="'header-menu-item-link ' + $mq">
        {{ $t(link.phraseKey) }}
      </router-link>
      <div
        class="header-submenu-drop-down-btn"
        v-if="$mq === 'mobile' && link.children"
      >
        <img src="../assets/icons/keyboard_arrow_down.svg" alt="arrow" />
      </div>
    </div>

    <header-submenu :children="link.children" />
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
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.header-menu-item-wrapper {
  position: relative;

  &.mobile {
    padding: 15px 0;
    border-bottom: 1px $light-gray solid;
  }
}

.header-menu-item {
  &.mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.desktop {
    padding: 15px;
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
  }
}
</style>

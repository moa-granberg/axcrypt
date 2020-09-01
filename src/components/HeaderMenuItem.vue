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
    <div v-if="link.children" :class="'header-submenu-wrapper ' + $mq">
      <li
        v-for="child of link.children"
        :key="child.path"
        :class="'header-submenu-item ' + $mq"
      >
        <router-link
          :to="child.path"
          :class="'header-submenu-item-link ' + $mq"
        >
          {{ $t(child.phraseKey) }}
        </router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
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

.header-submenu-wrapper {
  &.desktop {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 200px;
    top: 69px;
    // max-height: 0;
    // transition: max-height 0.4s;

    &.show {
      max-height: unset;
    }
  }
}

.header-submenu-item {
  &.mobile {
    padding: 15px 45px;
  }

  &.desktop {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    padding: 7px 15px;
  }
}

.header-submenu-item-link {
  font-weight: 300;
  text-decoration: none;

  &.mobile {
    font-size: 13px;
    color: $light-green;
  }

  &.desktop {
    font-size: 0.7em;
    color: $white;
    text-transform: uppercase;
  }
}

// .header-submenu-wrapper > li:last-of-type > a {
// font-weight: 300;
// }
</style>

<template>
  <div v-if="children" :class="'header-submenu-wrapper ' + $mq">
    <li
      v-for="child of children"
      :key="child.path"
      :class="'header-submenu-item ' + $mq"
    >
      <router-link :to="child.path" :class="'header-submenu-item-link ' + $mq">
        {{ $t(child.phraseKey) }}
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    children: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

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

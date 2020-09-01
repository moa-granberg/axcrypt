<template>
  <div :class="'submenu-mouseover-div ' + $mq" @mouseleave="hideSubmenuDesktop">
    <div
      v-if="children"
      class="header-submenu-wrapper"
      :class="[{ show: show, 'show-desktop': showDesktop }, $mq]"
    >
      <li
        v-for="child of children"
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
    children: Array, //{ path: string, phraseKey: string }
    show: Boolean,
    showDesktop: Boolean,
  },
  methods: {
    hideSubmenuDesktop() {
      this.$emit('hideSubmenuDesktop');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.submenu-mouseover-div {
  &.desktop {
    position: absolute;
    padding-top: 69px;
    top: 0;
    pointer-events: none;
  }
}

.header-submenu-wrapper {
  &.mobile {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s;

    &.show {
      border-top: 1px solid $light-gray;
      max-height: 110px;
    }
  }

  &.desktop {
    width: 200px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s;
    pointer-events: auto;

    &.show-desktop {
      max-height: 100px;
    }
  }
}

.header-submenu-wrapper > li:last-of-type {
  border-bottom: none;
}

.header-submenu-item {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  &.mobile {
    padding: 15px 45px;
    border-bottom: 1px solid $light-gray;
  }

  &.desktop {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    padding: 10px 15px;
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
</style>

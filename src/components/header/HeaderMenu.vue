<template>
  <ul class="header-menu-wrapper" :class="[{ show: showMobileMenu }, $mq]">
    <header-menu-item
      v-for="link of headerLinks"
      :key="link.path"
      :link="link"
      v-on:hideMobileMenu="handleHideMobileMenu"
    ></header-menu-item>
    <language-bar />
  </ul>
</template>

<script>
import LanguageBar from './LanguageBar';
import HeaderMenuItem from './HeaderMenuItem';
import headerLinks from '@/data/header/header-menu-links';

export default {
  components: {
    HeaderMenuItem,
    LanguageBar,
  },

  props: {
    showMobileMenu: Boolean,
  },

  data() {
    return {
      headerLinks,
    };
  },

  methods: {
    handleHideMobileMenu() {
      this.$emit('hideMobileMenu');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header-menu-wrapper {
  margin-bottom: 10px;
  list-style: none;
  @include no-margin-padding;

  &.mobile {
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    max-height: 0;

    &.show {
      max-height: 70vh;
      overflow-y: scroll;
    }
  }

  &.desktop {
    @include center-row;
  }
}
</style>

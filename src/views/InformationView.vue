<template>
  <main>
    <article :class="`information-header ${$mq}`">
      <h1 :class="`information-heading heading-jumbo ${$mq}`">
        {{ $t(getPageName) }}
      </h1>
    </article>

    <side-menu />

    <router-view />
  </main>
</template>

<script>
import SideMenu from '@/components/SideMenu';

export default {
  components: {
    SideMenu,
  },

  computed: {
    getPageName() {
      return this.$route.name.split('Page').join('LinkLabel');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.information-header {
  &.mobile {
    padding: 56px 0;
    background-image: url('~@/assets/hero-imgs/people-mobile.png');
  }

  &.desktop {
    padding: 74px 0 42px 0;
    background-image: url('~@/assets/hero-imgs/people-desktop.png');
  }
}

.information-heading {
  @include no-margin-padding;
  @include center-row;
  color: $white;
}
</style>

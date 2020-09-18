<template>
  <main>
    <article :class="`information-header ${$mq}`">
      <h1 :class="`information-heading heading-jumbo ${$mq}`">
        {{ $t(getPageName) }}
      </h1>
    </article>

    <side-menu
      v-if="$mq === 'desktop'"
      headingPhraseKey="InformationLinkLabel"
      :linkList="sideMenuLinks"
    />

    <router-view />
  </main>
</template>

<script>
import SideMenu from '@/components/SideMenu';

export default {
  components: {
    SideMenu,
  },

  data() {
    return {
      sideMenuLinks: [],
    };
  },

  computed: {
    getPageName() {
      return this.$route.name.split('Page').join('LinkLabel');
    },
  },

  methods: {
    async getSideMenuLinks() {
      const linkImport = await (
        await import('@/data/header/header-menu-links.json')
      ).default;

      this.sideMenuLinks = linkImport
        .find(item => item.path === '/information')
        .children.map(child => ({
          path: child.path,
          phraseKey: child.phraseKey,
        }));
    },
  },

  created() {
    this.getSideMenuLinks();
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.information-header {
  @include center-column;
  background-blend-mode: overlay;
  background-position: center;
  color: $white;

  &.mobile {
    background-image: url('~@/assets/hero-imgs/people-mobile.png');
  }

  &.desktop {
    background-image: url('~@/assets/hero-imgs/people-desktop.png');
  }
}

.information-heading {
  @include no-margin-padding;
  @include center-row;
  width: 100%;
  background-color: rgba(72, 119, 44, 0.7);
  text-shadow: $standard-text-shadow;
  font-weight: 400;

  &.mobile {
    padding: 56px 0;
  }

  &.desktop {
    padding: 74px 0;
  }
}
</style>

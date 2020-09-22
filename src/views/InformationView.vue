<template>
  <main :class="`information-view-wrapper ${$mq}`">
    <article :class="`information-header ${$mq}`">
      <div :class="['information-header-inner-wrapper', $mq]">
        <h1 :class="`information-heading heading-jumbo ${$mq}`">
          {{ $t(getPageName) }}
        </h1>

        <primary-button
          v-if="$route.name === 'ResellerPage'"
          :class="['information-header-button', $mq]"
          size="extra-small"
          phraseKey="ApplyNowLabel"
          path="/"
        />
      </div>
    </article>

    <section :class="`information-aside-content-wrapper ${$mq}`">
      <side-menu
        v-if="$mq === 'desktop'"
        headingPhraseKey="InformationLinkLabel"
        :linkList="sideMenuLinks"
      />

      <router-view />
    </section>
  </main>
</template>

<script>
import SideMenu from '@/components/SideMenu';
import PrimaryButton from '@/components/PrimaryButton';

export default {
  components: {
    SideMenu,
    PrimaryButton,
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
  background-size: cover;
  background-repeat: no-repeat;
  color: $white;

  &.mobile {
    background-image: url('~@/assets/hero-imgs/people-mobile.png');
    height: 145px;
  }

  &.desktop {
    background-image: url('~@/assets/hero-imgs/people-desktop.png');
    height: 200px;
  }
}

.information-header-inner-wrapper {
  @include center-column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  background-color: rgba(72, 119, 44, 0.7);
}

.information-header-button {
  text-transform: uppercase;
}

.information-aside-content-wrapper {
  display: flex;
  max-width: 1440px;
  margin: auto;
}

.information-heading {
  @include no-margin-padding;
  text-shadow: $standard-text-shadow;
  font-weight: 400;
}
</style>

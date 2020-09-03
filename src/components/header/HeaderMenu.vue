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
      headerLinks: [
        {
          path: '/download',
          phraseKey: 'DownloadLinkLabel',
        },
        {
          path: '',
          phraseKey: 'OurProductLinkLabel',
          children: [
            {
              path: '/business',
              phraseKey: 'BusinessLinkLabel',
            },
            {
              path: '/premium',
              phraseKey: 'PremiumLinkLabel',
            },
          ],
        },
        {
          path: '/pricing',
          phraseKey: 'PricingLinkLabel',
        },
        {
          path: '/information',
          phraseKey: 'InformationLinkLabel',
        },
        {
          path: '/support',
          phraseKey: 'SupportLinkLabel',
        },
        {
          path: '/about',
          phraseKey: 'AboutUsLinkLabel',
        },
        {
          path: '/sign-in',
          phraseKey: 'SignInLinkLabel',
        },
      ],
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
  margin: 0;
  padding: 0;

  &.mobile {
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    max-height: 0;

    &.show {
      max-height: 600px;
    }
  }

  &.desktop {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

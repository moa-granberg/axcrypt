<template>
  <section :class="'footer-sitemap-wrapper ' + $mq">
    <h3 :class="'footer-sitemap-title ' + $mq">
      {{ $t('SitemapHeading') }}
    </h3>
    <ul :class="'footer-sitemap-links-wrapper ' + $mq">
      <li
        v-for="link of footerLinks"
        :key="link.path"
        :class="'footer-sitemap-item ' + $mq"
      >
        <router-link :to="link.path" :class="'footer-sitemap-item-link'">
          {{ $t(link.phraseKey) }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          path: '/',
          phraseKey: 'HomeLinkLabel',
        },
        {
          path: '/pricing',
          phraseKey: 'PricingLinkLabel',
        },
        {
          path: '/information/get-started/:platform',
          phraseKey: 'GetStartedLinkLabel',
        },
        {
          path: '/information/reseller',
          phraseKey: 'ResellerLinkLabel',
        },
        {
          path: '/support/faq',
          phraseKey: 'FaqLinkLabel',
        },
        {
          path: '/support/forums',
          phraseKey: 'ForumsLinkLabel',
        },
        {
          path: '/support/blog',
          phraseKey: 'BlogLinkLabel',
        },
        {
          path: '/about',
          phraseKey: 'AboutUsLinkLabel',
        },
        {
          path: '/about/press',
          phraseKey: 'PressLinkLabel',
        },
        {
          path: '/information/privacy-policy',
          phraseKey: 'PrivacyPolicyLinkLabel',
        },
        {
          path: '/support/password-generator',
          phraseKey: 'PasswordGeneratorLinkLabel',
        },
        {
          path: '/sign-in',
          phraseKey: 'MyAxCryptIDLinkLabel',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.footer-sitemap-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 28px 0 0 0;
}
.footer-sitemap-title {
  font-size: 14px;
  line-height: 1rem;
  margin: 0 0 24px 0;
}
.footer-sitemap-links-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 0 34px 0;
  margin: 0;
  max-height: 135px;

  &.mobile {
    min-width: 300px;
    max-width: 500px;
    border-bottom: 1px solid $white;
  }
}

.footer-sitemap-item-link {
  text-decoration: none;
  color: $white;
  font-size: 0.75rem;
}
</style>

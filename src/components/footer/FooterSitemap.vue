<template>
  <section :class="'footer-sitemap-wrapper ' + $mq">
    <h3 :class="'footer-sitemap-heading ' + $mq">
      {{ $t('SitemapHeading') }}
    </h3>
    <ul :class="'footer-sitemap-links-wrapper ' + $mq">
      <li
        v-for="link of footerLinks"
        :key="link.path"
        :class="'footer-sitemap-item ' + $mq"
      >
        <router-link :to="link.path" :class="'footer-sitemap-item-link ' + $mq">
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

  &.mobile {
    align-items: center;
    background-color: $dark-green;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.desktop {
    min-width: 230px;
    margin: 0 20px;
  }
}

.footer-sitemap-heading {
  line-height: 1rem;

  &.mobile {
    margin: 16px 0;
    font-weight: 400;
  }

  &.desktop {
    font-size: 0.875rem;
    margin: 0 0 15px 0;
  }
}

.footer-sitemap-links-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;

  &.mobile {
    padding: 0 0 16px 0;
    min-width: 320px;
    max-height: 185px;
  }

  &.desktop {
    padding: 0 0 34px 0;
    max-height: 135px;
  }
}

.footer-sitemap-item {
  &.mobile {
    padding: 0 15px;
  }

  &.desktop {
    padding: 0 50px 0 0;
  }
}

.footer-sitemap-item-link {
  text-decoration: none;
  color: $white;
  &.mobile {
    font-weight: 300;
    line-height: 1.7rem;
    padding: 13px 10px;
  }

  &.desktop {
    font-size: 0.75rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

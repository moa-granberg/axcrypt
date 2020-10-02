<template>
  <section :class="'footer-sitemap-wrapper ' + $mq">
    <h3 :class="'footer-sitemap-heading body-text-large ' + $mq">
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
      <li :class="'footer-sitemap-item ' + $mq">
        <a
          href="https://account.axcrypt.net/en/Home/Login"
          :class="'footer-sitemap-item-link ' + $mq"
        >
          {{ $t('MyAxCryptIDLinkLabel') }}</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
import footerLinks from '@/data/footer/footer-sitemap-links';

export default {
  data() {
    return {
      footerLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.footer-sitemap-wrapper {
  @include center-column;

  &.desktop {
    align-items: flex-start;
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
    margin: 0 0 15px 0;
  }
}

.footer-sitemap-links-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  @include no-margin-padding;

  &.mobile {
    padding: 0 0 16px 0;
    min-width: 320px;
    max-height: 185px;
    border-bottom: 1px solid rgba($white, 0.7);
  }

  &.desktop {
    padding: 0 0 34px 0;
    max-height: 135px;
  }
}

.footer-sitemap-item {
  &.mobile {
    padding: 0 12px;
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

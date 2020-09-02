<template>
  <section :class="'footer-sitemap ' + $mq">
    <h3 :class="'footer-sitemap-title' + $mq">Sitemap</h3>
    <ul :class="'footer-sitemap-links-wrapper ' + $mq">
      <li v-for="link of footerLinks" :key="link.path">{{ $t(link.phraseKey) }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return {
      footerLinks: [
        {
          path: '/',
          phraseKey: 'HomeLinkLabel'
        },
        {
          path: '/pricing',
          phraseKey: 'PricingLinkLabel'
        },
        {
          path: '/information/get-started/:platform',
          phraseKey: 'GetStartedLinkLabel'
        },
        {
          path: '/information/reseller',
          phraseKey: 'ResellerLinkLabel'
        },
        {
          path: '/support/faq',
          phraseKey: 'FaqLinkLabel'
        },
        {
          path: '/support/blog',
          phraseKey: 'BlogLinkLabel'
        },
        {
          path: '/about',
          phraseKey: 'AboutUsLinkLabel'
        },
        {
          path: '/about/press',
          phraseKey: 'PressLinkLabel'
        },
        {
          path: '/information/privacy-policy',
          phraseKey: 'PrivacyPolicyLinkLabel'
        },
        {
          path: '/support/password-generator',
          phraseKey: 'PasswordGeneratorLinkLabel'
        },
        {
          path: '/sign-in',
          phraseKey: 'MyAxCryptIDLinkLabel'
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

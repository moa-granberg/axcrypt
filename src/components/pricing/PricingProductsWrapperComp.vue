<template>
  <section>
    <pricing-product-comp :product="free" />
    <!-- <pricing-product-comp :product="premium" :annualActive="annualActive" />
    <pricing-product-comp :product="business" :annualActive="annualActive" /> -->
  </section>
</template>

<script>
import PricingProductComp from './PricingProductComp';

export default {
  props: {
    annualActive: Boolean,
  },

  components: {
    PricingProductComp,
  },

  data() {
    return {
      free: {
        productClass: 'free',
        headingPhraseKey: 'Free',
        subheadingPhraseKey: 'For everyone',
        price: 0,
        currency: 'SEK',
        buttonLabelPhraseKey: 'Create account',
        url: 'https://account.axcrypt.net/en/Home/Register',
        readMoreUrl: '#',
        readMorePhraseKey: 'Ta bort den här',
        featureList: [
          {
            feature: 'PricingFeatureListViewer',
            mac: true,
            pc: true,
          },
          {
            feature: 'PricingFeatureListAES128',
            mac: false,
            pc: true,
          },
          {
            feature: 'PricingFeatureListAccountKey',
            mac: false,
            pc: true,
          },
          {
            feature: 'PricingFeatureListOpenShared',
            mac: false,
            pc: true,
          },
          {
            feature: 'PricingFeatureListCommunitySupport',
            mac: false,
            pc: true,
          },
          {
            feature: 'PricingFeatureListAES256',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListMobileApps',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListSecuredFolders',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListIncludeSubfolders',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListKeySharing',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListCloudStorage',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListPasswordManagement',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListFileWipe',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListAnonymousFile',
            mac: false,
            pc: false,
          },
          {
            feature: 'PasswordGeneratorLinkLabel',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListDirectSupport',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListBusinessAdmin',
            mac: false,
            pc: false,
          },
          {
            feature: 'PricingFeatureListMoreUpcoming',
            mac: false,
            pc: false,
          },
        ],
      },
    };
  },
};
</script>

<style></style>

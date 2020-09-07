<template>
  <section :class="'product-try-it-for-free-wrapper ' + $mq">
    <h1 :class="'product-try-it-for-free-heading ' + $mq">
      {{ $t('ProductTryItForFreeYouGet') }}
    </h1>
    <article :class="'product-try-it-for-free-items-wrapper ' + $mq">
      <div
        :class="'product-try-it-for-free-item ' + $mq"
        v-for="item of premiumSellingPointItems"
        :key="item.src"
      >
        <img :src="require(`@/assets/view/premium/${item.src}`)" alt="" />
        <p>{{ $t(item.phraseKey) }}</p>
      </div>
      <h2 :class="'product-try-it-for-free-and-much-more ' + $mq">
        {{ $t('ProductTryItForFreeAndMuch') }}
      </h2>
    </article>

    <article :class="'product-try-it-for-free-billing-wrapper ' + $mq">
      <h2 :class="'product-try-it-for-free-subheading ' + $mq">
        {{ $t('ProductTryItForFreeCostAfterTrial') }}
      </h2>
      <button :class="'product-try-it-for-free-annual-btn ' + $mq">
        {{ $t('ProductTryItForFreeAnnualButtonLabel') }}
      </button>
      <button :class="'product-try-it-for-free-monthly-btn ' + $mq">
        {{ $t('ProductTryItForFreeMonthlyButtonLabel') }}
      </button>
      <h1 :class="'product-try-it-for-free-pricing ' + $mq">41.25 SEK</h1>
      <h3 :class="'product-try-it-for-free-per-month ' + $mq">
        {{ $t('ProductTryItForFreePerMonth') }}
      </h3>
      <button :class="'product-try-it-for-free-start-btn ' + $mq">
        {{ $t('ProductTryItForFreeStartButtonLabel') }}
      </button>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      premiumSellingPointItems: [
        {
          src: 'automatically-encrypt.png',
          phraseKey: 'PremiumTryItForFreeSellingPointAutomaticallyEncrypt',
        },
        {
          src: 'stronger-encryption.png',
          phraseKey: 'PremiumTryItForFreeSellingPointStrongerEncryption',
        },
        {
          src: 'share-your.png',
          phraseKey: 'PremiumTryItForFreeSellingPointShareYour',
        },
        {
          src: 'view-your.png',
          phraseKey: 'PremiumTryItForFreeSellingPointViewYour',
        },
        {
          src: 'secure-files.png',
          phraseKey: 'PremiumTryItForFreeSellingPointSecureFiles',
        },
      ],
    };
  },
};
</script>

<style></style>

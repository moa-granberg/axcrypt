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
      <div :class="'product-try-it-for-free-pricing-btn-wrapper ' + $mq">
        <button
          :class="[{ active: annualActive }, $mq]"
          @click="annualActive = true"
        >
          {{ $t('ProductTryItForFreeAnnualButtonLabel') }}
        </button>
        <button
          :class="[{ active: !annualActive }, $mq]"
          @click="annualActive = false"
        >
          {{ $t('ProductTryItForFreeMonthlyButtonLabel') }}
        </button>
      </div>
      <h1
        class="product-try-it-for-free-pricing"
        :class="[{ annual: annualActive }, $mq]"
      >
        41.25 <span>SEK</span>
      </h1>
      <h3 :class="'product-try-it-for-free-per-month ' + $mq">
        {{ $t('ProductTryItForFreePerMonth') }}
      </h3>
      <primary-button-comp phraseKey="ProductTryItForFreeStartButtonLabel" size="large" />
    </article>
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';

export default {

  components: {
    PrimaryButtonComp
  },

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
      annualActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-try-it-for-free-wrapper {
  color: $white;
  background: linear-gradient(
    to bottom,
    rgba(73, 119, 44, 0.7) 0%,
    rgba(73, 119, 44, 0.8) 70%,
    rgba(33, 80, 6, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-try-it-for-free-heading {
  font-size: 1.125rem;
}

.product-try-it-for-free-items-wrapper {
  display: grid;
  grid: 1fr 1fr 1fr/ 1fr 1fr;
  align-items: flex-start;
  gap: 50px 10px;
}

.product-try-it-for-free-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 134px;
  }

  p {
    max-width: 130px;
    margin: 0;
    font-size: 0.875rem;
    text-align: center;
  }
}

.product-try-it-for-free-and-much-more {
  max-width: 130px;
  margin: auto;
  font-size: 1.125rem;
  text-align: center;
}

.product-try-it-for-free-billing-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-try-it-for-free-subheading {
  font-size: 1.125rem;
  padding: 10px 0;
  margin: 0;
  border-top: 2px solid $white;
}

.product-try-it-for-free-pricing-btn-wrapper {
  button {
    width: 146px;
    height: 35px;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid $dark-green;

    color: $dark-green;

    &.active {
      background-color: $dark-green;
      color: $white;
    }

    &:first-of-type {
      border-radius: 2px 0 0 2px;
    }

    &:last-of-type {
      border-radius: 0 2px 2px 0;
    }
  }
}

.product-try-it-for-free-pricing {
  font-size: 2.25rem;
  margin: 10px 0 0 0;
  &.annual {
    color: #ad3f38;
  }
  span {
    font-size: 2.25rem * 0.75;
  }
}

.product-try-it-for-free-per-month {
  font-size: 2.25rem * 0.4;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
}
</style>

<template>
  <article :class="'product-selling-points-items-wrapper ' + $mq">
    <div
      :class="'product-selling-points-item ' + $mq"
      v-for="item of premiumSellingPointItems"
      :key="item.src"
    >
      <img
        :class="'product-selling-points-item ' + $mq"
        :src="require(`@/assets/view/premium/${item.src}`)"
        alt=""
      />
      <p :class="'product-selling-points-item-paragraph ' + $mq">
        {{ $t(item.phraseKey) }}
      </p>
    </div>
    <h2 :class="'product-selling-points-and-much-more ' + $mq">
      {{ $t('ProductTryItForFreeAndMuch') }}
    </h2>
  </article>
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

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-selling-points-items-wrapper {
  &.mobile {
    display: grid;
    grid: 1fr 1fr 1fr/ 1fr 1fr;
    align-items: flex-start;
    gap: 50px 10px;
  }
}

.product-selling-points-item {
  display: flex;
  align-items: center;
  justify-content: center;

  &.mobile {
    flex-direction: column;
  }

  &.desktop {
    flex-direction: row;
    padding: 10px 0;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }

    > * {
      width: 50%;
    }
  }
}

.product-selling-points-item-img {
  &.mobile {
    width: 134px;
  }
}

.product-selling-points-item-paragraph {
  margin: 0;
  text-align: center;

  &.mobile {
    max-width: 130px;
    font-size: 0.875rem;
  }

  &.desktop {
    max-width: 185px;
    font-size: 1.125rem;
    padding: 10px;
  }
}

.product-selling-points-and-much-more {
  margin: auto;
  font-size: 1.125rem;
  text-align: center;

  &.mobile {
    max-width: 130px;
  }

  &.desktop {
    padding: 0 0 20px 0;
  }
}
</style>

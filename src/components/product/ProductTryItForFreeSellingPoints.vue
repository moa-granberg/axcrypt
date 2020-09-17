<template>
  <article :class="'product-selling-points-items-wrapper ' + $mq">
    <div
      :class="'product-selling-points-item ' + $mq"
      v-for="item of product === 'premium'
        ? premiumSellingPointItems
        : businessSellingPointItems"
      :key="item.src"
    >
      <img
        :class="'product-selling-points-item-img ' + $mq"
        :src="require(`@/assets/view/product/${item.src}`)"
        alt=""
      />
      <p :class="'product-selling-points-item-paragraph body-text ' + $mq">
        {{ $t(item.phraseKey) }}
      </p>
    </div>
    <h2 :class="`product-selling-points-and-much-more ${$mq} ${product}`">
      {{ $t('ProductTryItForFreeAndMuch') }}
    </h2>
  </article>
</template>

<script>
export default {
  props: {
    product: String,
  },

  data() {
    return {
      premiumSellingPointItems: [],
      businessSellingPointItems: [],
    };
  },

  methods: {
    async getSellingPoints() {
      this.premiumSellingPointItems = await (
        await import('@/data/product/premium-selling-points.json')
      ).default;
      this.businessSellingPointItems = await (
        await import('@/data/product/business-selling-points.json')
      ).default;
    },
  },

  created() {
    this.getSellingPoints();
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-selling-points-items-wrapper {
  &.mobile {
    display: grid;
    grid: auto / 1fr 1fr;
    align-items: flex-start;
    gap: 50px 10px;
  }
}

.product-selling-points-item {
  @include center-row;

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
  }

  &.desktop {
    max-width: 185px;
    padding: 10px;
  }
}

.product-selling-points-and-much-more {
  margin: auto;
  font-size: 1.125rem;
  text-align: center;

  &.mobile {
    &.premium {
      max-width: 130px;
    }
    &.business {
      grid-column-start: 1;
      grid-column-end: 3;
      padding: 0 0 6px 0;
    }
  }

  &.desktop {
    padding: 0 0 20px 0;
  }
}
</style>

<template>
  <section :class="['reseller-wrapper', $mq]">
    <article :class="['reseller-info-wrapper', $mq]">
      <div :class="['reseller-info-text-wrapper', $mq]">
        <h1 :class="['reseller-info-heading heading-medium-green', $mq]">
          {{ $t('ResellerInfoHeading') }}
        </h1>
        <p :class="['body-text', $mq]">{{ $t('ResellerInfoText1') }}</p>
        <p :class="['body-text', $mq]">{{ $t('ResellerInfoText2') }}</p>
        <p v-html="$t('ResellerInfoText3')" :class="['body-text', $mq]"></p>
      </div>
      <img src="@/assets/view/information/reseller/resell.png" alt="resell" />
    </article>

    <article :class="['reseller-benefits-wrapper', $mq]">
      <h1 :class="['reseller-benefits-heading heading-small', $mq]">
        {{ $t('ResellerBenefitsHeading') }}
      </h1>
      <p :class="['reseller-benefits-text body-text', $mq]">
        {{ $t('ResellerBenefitsText') }}
      </p>

      <h2 :class="['reseller-benefits-offer-heading body-text-large', $mq]">
        {{ $t('WeOfferLabel') }}
      </h2>
      <ul :class="['reseller-benefits-offers-wrapper', $mq]">
        <li
          :class="['reseller-benefits-offers-items', $mq]"
          v-for="item of benefits"
          :key="item.phraseKey"
        >
          <img
            :class="['reseller-benefits-offers-img', $mq]"
            :src="require(`@/assets/icons/${item.src}`)"
            alt=""
          />
          <p :class="['reseller-benefits-offer-text body-text', $mq]">
            {{ $t(item.phraseKey) }}
          </p>
        </li>
      </ul>

      <primary-button
        :class="['reseller-benefits-button', $mq]"
        phraseKey="ApplyNowLabel"
        size="small"
        path="/information/resellers-application"
      />
    </article>
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';

export default {
  components: {
    PrimaryButton,
  },

  data() {
    return {
      benefits: [
        {
          phraseKey: 'FeaturesBestEncryption',
          src: 'check.svg',
        },
        {
          phraseKey: 'FeaturesMadeInSweden',
          src: 'outlined_flag.svg',
        },
        {
          phraseKey: 'FeaturesProgressiveMargins',
          src: 'monetization_on.svg',
        },
        {
          phraseKey: 'FeaturesRecurringRevenue',
          src: 'repeat.svg',
        },
        {
          phraseKey: 'FeaturesChangeToManage',
          src: 'markunread_mailbox.svg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.reseller-wrapper {
  width: 100%;
}

.reseller-info-wrapper {
  &.mobile {
    @include center-column;
  }

  &.desktop {
    @include center-row;
  }
}

.reseller-info-text-wrapper {
  max-width: $max-text-width;

  &.mobile {
    margin: $margin-mobile;
  }

  &.desktop {
    margin: $margin-top-aside-content;
  }
}

.reseller-info-heading {
  margin: 0 0 18px 0;
}

.reseller-benefits-wrapper {
  @include standard-padding;
  background-color: rgba($black, 0.8);
  @include center-column;
}

.reseller-benefits-heading {
  width: 100%;
  color: $white;
  text-align: center;
}

.reseller-benefits-text {
  max-width: $max-text-width;
  color: $white;
  text-align: center;

  &.mobile {
    margin: 0 0 $margin-mobile 0;
  }

  &.desktop {
    margin: 0 0 58px 0;
  }
}

.reseller-benefits-offer-heading {
  color: $white;
}

.reseller-benefits-offers-wrapper {
  @include no-margin-padding;
  list-style: none;
  background-color: $white;
  border-radius: 5px;

  li:last-of-type {
    border: none;
  }

  &.desktop {
    max-width: 500px;
  }
}

.reseller-benefits-offers-items {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $light-gray;

  &.mobile {
    padding: 18px;
  }

  &.desktop {
    padding: 20px;
  }
}

.reseller-benefits-offer-text {
  @include no-margin-padding;
}

.reseller-benefits-offers-img {
  width: 30px;

  &.mobile {
    margin: 0 10px 0 0;
  }

  &.desktop {
    margin: 0 20px 0 0;
  }
}

.reseller-benefits-button {
  @include standard-margin;
  text-transform: uppercase;
}
</style>

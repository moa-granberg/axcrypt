<template>
  <section :class="['features', $mq]">
    <article :class="['features-wrapper', $mq]">
      <p :class="['choose-plan-text body-text', $mq]">
        {{ $t('FeaturesChoosePlanHeading') }}
      </p>

      <div :class="['plan-buttons-wrapper', $mq]">
        <features-plan-button
          @click.native="activePlan = 'free'"
          :active="activePlan === 'free'"
          phraseKey="FreeLabel"
          plan="free"
        />

        <features-plan-button
          @click.native="activePlan = 'premium'"
          :active="activePlan === 'premium'"
          phraseKey="PremiumLabel"
          plan="premium"
        />

        <features-plan-button
          @click.native="activePlan = 'business'"
          :active="activePlan === 'business'"
          phraseKey="BusinessLabel"
          plan="business"
        />
      </div>

      <p :class="['click-feature-text body-text', $mq]">
        {{
          $mq === 'mobile'
            ? $t('FeaturesClickFeatureText')
            : $t('FeaturesHoverFeatureText')
        }}
      </p>

      <div :class="['divider', $mq]" />

      <div :class="['feature-items-wrapper', $mq]">
        <features-feature-item
          v-for="feature of currentFeatureList"
          :key="feature.featureNamePhraseKey"
          :item="feature"
        />
      </div>
    </article>
    <features-more-features :plan="activePlan" />
  </section>
</template>

<script>
import FeaturesFeatureItem from '@/components/information/features/FeaturesFeatureItem';
import FeaturesPlanButton from '@/components/information/features/FeaturesPlanButton';
import FeaturesMoreFeatures from '@/components/information/features/FeaturesMoreFeatures';
import FeatureListJson from '@/data/information/features/features-features';

export default {
  components: {
    FeaturesFeatureItem,
    FeaturesPlanButton,
    FeaturesMoreFeatures,
  },

  data() {
    return {
      featureList: FeatureListJson,
      activePlan: 'free',
    };
  },

  computed: {
    currentFeatureList() {
      if (this.activePlan === 'free') {
        return this.featureList.filter(item => item.free === true);
      } else if (this.activePlan === 'premium') {
        return this.featureList.filter(item => item.premium === true);
      } else if (this.activePlan === 'business') {
        return this.featureList.filter(item => item.business === true);
      } else {
        return null;
      }
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.features {
  @include no-margin-padding;
  box-sizing: border-box;
  width: 100%;
}

.features-wrapper {
  @include no-margin-padding;
  @include center-column;

  box-sizing: border-box;
  background-color: rgba($black, 0.9);
  box-shadow: $standard-box-shadow;
  width: 100%;

  &.mobile {
    padding: $margin-mobile 0;
  }

  &.desktop {
    padding: $margin-top-aside-content;
  }
}

.choose-plan-text {
  @include no-margin-padding;
  color: $white;
  font-weight: 600;
}

.plan-buttons-wrapper {
  @include center-row;
  margin: 16px 0 0 0;

  &.mobile {
    gap: 4px;
  }

  &.desktop {
    gap: 20px;
  }
}

.click-feature-text {
  color: $white;
  font-style: italic;
}

.divider {
  width: 60%;
  border: 1px solid $green;
}

.feature-items-wrapper {
  margin: 16px 0 0 0;
  &.desktop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1vw;
  }
}
</style>

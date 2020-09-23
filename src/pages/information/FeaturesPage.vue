<template>
  <section :class="['features', $mq]">
    <article :class="['features-wrapper', $mq]">
      <p
        :class="['choose-plan-text body-text', $mq]"
        v-html="$t('FeaturesChoosePlanHeading')"
      />

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

      <p
        :class="['click-feature-text body-text', $mq]"
        v-html="
          $mq === 'mobile'
            ? $t('FeaturesClickFeatureText')
            : $t('FeaturesHoverFeatureText')
        "
      />

      <div :class="['divider', $mq]" />

      <div :class="['feature-items-wrapper', $mq]">
        <features-feature-item
          v-for="feature of currentFeatureList"
          :key="feature.src"
          :item="feature"
        />
      </div>
    </article>

    <article :class="['more-features-wrapper', $mq]">
      <h1 :class="['more-features-heading', $mq]">
        {{ $t('MoreFeaturesLabel') }}
      </h1>

      <div :class="['more-features-table-wrapper', $mq]">
        <div :class="['more-features-table-headings-wrapper', $mq]">
          <p :class="['more-features-table-heading', $mq]">
            {{ $t('FeatureLabel') }}
          </p>

          <p :class="['more-features-table-heading', $mq]">
            {{ $t('DescriptionLabel') }}
          </p>
        </div>

        <div
          :class="['more-features-item-wrapper', $mq]"
          v-for="item of moreFeaturesList"
          :key="item.featurePhraseKey"
        >
          <p :class="['more-features-item-label', $mq]">
            {{ $t(item.featurePhraseKey) }}
          </p>

          <p :class="['more-features-item-description', $mq]">
            {{ $t(item.descriptionPhraseKey) }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import FeaturesFeatureItem from '@/components/information/features/FeaturesFeatureItem';
import FeaturesPlanButton from '@/components/information/features/FeaturesPlanButton';
import FeatureListJson from '@/data/information/features/features-features';
import MoreFeaturesListJson from '@/data/information/features/features-morefeatures';

export default {
  components: {
    FeaturesFeatureItem,
    FeaturesPlanButton,
  },

  data() {
    return {
      featureList: FeatureListJson,
      moreFeaturesList: MoreFeaturesListJson,
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
  padding: 24px;
  box-sizing: border-box;
  background-color: rgba($black, 0.9);
  box-shadow: $standard-box-shadow;
  width: 100%;
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
    justify-content: space-around;
    gap: 1vw;
  }
}

.more-features-wrapper {
}

.more-features-heading {
}

.more-features-table-wrapper {
}

.more-features-table-headings-wrapper {
}

.more-features-table-heading {
}

.more-features-item-wrapper {
}

.more-features-item-label {
}

.more-features-item-description {
}
</style>

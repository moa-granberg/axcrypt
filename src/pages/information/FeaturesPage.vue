<template>
  <section>
    <article :class="['features-wrapper', $mq]">
      <p
        :class="['choose-plan-heading', $mq]"
        v-html="$t('FeaturesChoosePlanHeading')"
      />

      <div :class="['plan-buttons-wrapper', $mq]">
        <div :class="['plan-button', $mq]">
          <p :class="['plan-button-label', $mq]" v-html="$t('FreeLabel')" />
        </div>

        <div :class="['plan-button', $mq]">
          <p :class="['plan-button-label', $mq]" v-html="$t('PremiumLabel')" />
        </div>

        <div :class="['plan-button', $mq]">
          <p :class="['plan-button-label', $mq]" v-html="$t('BusinessLabel')" />
        </div>
      </div>

      <p
        :class="['click-feature-text', $mq]"
        v-html="$t('FeaturesClickFeatureText')"
      />

      <div :class="['divider', $mq]" />

      <div
        :class="['feature-item-wrapper', $mq]"
        v-for="item of featureList"
        :key="item.src"
      >
        <div :class="['feature-item-img-name-wrapper', $mq]">
          <img
            :class="['feature-item-img', $mq]"
            :src="require(`@/assets/view/information/${item.src}`)"
            :alt="item.src"
          />

          <p
            :class="['feature-item-name', $mq]"
            v-html="$t(item.featureNamePhraseKey)"
          />
        </div>

        <p
          :class="['feature-item-description', $mq]"
          v-html="$t(item.featureDescriptionPhraseKey)"
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
export default {
  data() {
    return {
      featureList: [],
      moreFeaturesList: [],
    };
  },

  methods: {
    async getData() {
      this.featureList = await (
        await import('@/data/information/features/features-features.json')
      ).default;
      this.moreFeaturesList = await (
        await import('@/data/information/features/features-morefeatures.json')
      ).default;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

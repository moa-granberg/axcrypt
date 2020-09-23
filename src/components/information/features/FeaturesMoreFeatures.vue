<template>
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
</template>

<script>
import MoreFeaturesListJson from '@/data/information/features/features-more-features';

export default {
  data() {
    return {
      moreFeaturesList: MoreFeaturesListJson,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

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

<template>
  <article :class="['more-features-wrapper', $mq]">
    <h1 :class="['more-features-heading', $mq]">
      {{ $t('MoreFeaturesLabel') }}
    </h1>

    <ul :class="['more-features-table-wrapper', $mq]">
      <li :class="['more-features-table-headings-wrapper', $mq]">
        <p :class="['more-features-table-heading', $mq]">
          {{ $t('FeatureLabel') }}
        </p>

        <p :class="['more-features-table-heading', $mq]">
          {{ $t('DescriptionLabel') }}
        </p>
      </li>

      <li
        :class="['more-features-item-wrapper', $mq]"
        v-for="item of currentList"
        :key="item.featurePhraseKey"
      >
        <p :class="['more-features-item-label body-text', $mq]">
          {{ $t(item.featurePhraseKey) }}
        </p>

        <p :class="['more-features-item-description body-text', $mq]">
          {{ $t(item.descriptionPhraseKey) }}
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
import MoreFeaturesListJson from '@/data/information/features/features-more-features';

export default {
  props: {
    plan: String,
  },

  data() {
    return {
      moreFeaturesList: MoreFeaturesListJson,
    };
  },

  computed: {
    currentList() {
      if (this.plan === 'free') {
        return this.moreFeaturesList.filter(item => item.free === true);
      } else if (this.plan === 'premium') {
        return this.moreFeaturesList.filter(item => item.premium === true);
      } else if (this.plan === 'business') {
        return this.moreFeaturesList.filter(item => item.business === true);
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

$list-grid: 1fr / 1fr 2fr;

.more-features-wrapper {
  margin: 36px 24px;
}

.more-features-heading {
  &.mobile {
    @include no-margin-padding;
    padding: 16px;
    border-radius: 5px 5px 0 0;
    border: 1px solid $light-gray;
    border-bottom: none;
    background-color: $green;
    color: $white;
    text-align: center;
    font-weight: 400;
  }

  &.desktop {
    color: $green;
  }
}

.more-features-table-wrapper {
  @include no-margin-padding;
  list-style: none;

  &.mobile {
    border: 1px solid $light-gray;
    border-radius: 0 0 5px 5px;
    padding: 12px;
    box-shadow: $standard-box-shadow;
  }

  &.desktop {
    border: 1px solid $light-gray;
    border-radius: 5px;
  }
}

.more-features-table-headings-wrapper {
  &.mobile {
    display: none;
  }
  &.desktop {
    display: grid;
    grid: $list-grid;
    border-radius: 5px 5px 0 0;
    padding: 0 24px;
    background-color: $green;
  }
}

.more-features-table-heading {
  &.desktop {
    color: $white;
    font-weight: 600;
  }
}

.more-features-item-wrapper {
  border-bottom: 1px solid $gray;

  &:last-of-type {
    border: none;
  }

  &.mobile {
    padding: 12px;
  }

  &.desktop {
    padding: 12px;
    margin: 0 12px;
    display: grid;
    grid: $list-grid;
  }
}

.more-features-item-label {
  @include no-margin-padding;
  font-weight: 600;

  &.mobile {
    margin: 0 0 10px 0;
  }
}

.more-features-item-description {
  @include no-margin-padding;
}
</style>

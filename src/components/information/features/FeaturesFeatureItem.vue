<template>
  <div :class="['feature-item-wrapper', $mq]">
    <div
      :class="['feature-item-name-wrapper', $mq]"
      @mouseenter="descriptionOpen = true"
      @mouseleave="descriptionOpen = false"
    >
      <p
        :class="['feature-item-name body-text', $mq]"
        v-html="$t(item.featureNamePhraseKey)"
      />
    </div>

    <p
      :class="[{ show: descriptionOpen }, 'feature-item-description', $mq]"
      v-html="$t(item.featureDescriptionPhraseKey)"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      src: String,
      featureNamePhraseKey: String,
      featureDescriptionPhraseKey: String,
      free: Boolean,
      premium: Boolean,
      business: Boolean,
    },
  },

  data() {
    return {
      descriptionOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.feature-item-wrapper {
  background-color: $white;
  margin: 0 0 16px 0;
  cursor: default;

  &.mobile {
    border-radius: 2px;
  }

  &.desktop {
    max-width: 250px;
    position: relative;
    border-radius: 5px;
  }
}

.feature-item-name-wrapper {
  @include center-row;

  &.mobile {
    align-items: center;
    grid: 70px / 2fr 4fr;
  }

  &.desktop {
    grid: 1fr / 1fr 3fr;
    place-items: center;
    padding: 5px;
  }
  min-height: 60px;
  min-width: 200px;
}

.feature-item-name {
  font-weight: 600;

  &.desktop {
    margin: auto;
  }
}

.feature-item-description {
  @include no-margin-padding;

  &.mobile {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding: 0 16px;
    transition: max-height 0.3s, opacity 0.1s, padding 0.3s;

    &.show {
      max-height: 300px;
      padding: 16px;
      opacity: 1;
    }
  }

  &.desktop {
    background-color: $dark-green;
    color: $white;
    border-radius: 5px;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    pointer-events: none;
    max-width: 100%;
    transition: max-height 0.3s, opacity 0.3s;

    padding: 20px;

    position: absolute;
    top: 110%;

    &.show {
      max-height: 200px;
      opacity: 1;
    }
  }
}
</style>

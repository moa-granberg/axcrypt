<template>
  <div :class="`try-links-wrapper ${$mq}`">
    <router-link
      to="/premium"
      class="try-wrapper premium"
      :class="[{ transparent }, $mq]"
    >
      <h2 :class="`try-preheading body-text-large ${$mq}`">
        {{ $t('TryPremiumPreHeading') }}
      </h2>

      <h1 :class="`try-heading heading-large ${$mq}`">
        {{ $t('TryPremiumHeading') }}
      </h1>

      <p v-if="subheading" :class="`try-subheading body-text-large ${$mq}`">
        {{ $t('ReadMoreButtonLabel') }}
      </p>
    </router-link>

    <router-link
      to="/business"
      class="try-wrapper business"
      :class="[{ transparent }, $mq]"
    >
      <h2 :class="`try-preheading body-text-large ${$mq}`">
        {{ $t('TryBusinessPreHeading') }}
      </h2>

      <h1 :class="`try-heading heading-large ${$mq}`">
        {{ $t('TryBusinessHeading') }}
      </h1>

      <p v-if="subheading" :class="`try-subheading body-text-large ${$mq}`">
        {{ $t('ReadMoreButtonLabel') }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    subheading: Boolean,
    transparent: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.try-links-wrapper {
  display: flex;
  height: 100%;

  a:first-of-type {
    &.mobile {
      border-radius: 3px 0 0 3px;
    }

    &.desktop {
      border-radius: 5px 0 0 5px;
    }
  }
  a:last-of-type {
    &.mobile {
      border-radius: 0 3px 3px 0;
    }

    &.desktop {
      border-radius: 0 5px 5px 0;
    }
  }
}

.try-wrapper {
  @include center-column;
  height: 100%;
  width: 50%;
  box-shadow: $standard-box-shadow;

  color: $white;
  text-decoration: none;
  text-shadow: $standard-text-shadow;

  &.premium {
    background-color: $dark-green;

    &.transparent {
      background-color: rgba($dark-green, 0.7);
    }
  }

  &.business {
    background-color: $gray;

    &.transparent {
      background-color: rgba($black, 0.7);
    }
  }
}

.try-preheading,
.try-subheading {
  font-weight: 300;
  @include no-margin-padding;
}

.try-subheading {
  font-style: italic;
}

.try-heading {
  text-transform: uppercase;
  @include no-margin-padding;
}
</style>

<template>
  <div :class="`try-links-wrapper ${$mq}`">
    <router-link
      to="/premium-trial"
      class="try-wrapper premium"
      :class="[{ transparent }, $mq]"
    >
      <h2 :class="`try-preheading ${$mq}`">
        {{ $t('TryPremiumPreHeading') }}
      </h2>

      <h1 :class="`try-heading ${$mq}`">
        {{ $t('TryPremiumHeading') }}
      </h1>

      <p v-if="subheading" :class="`try-subheading ${$mq}`">
        {{ $t('ReadMoreButtonLabel') }}
      </p>
    </router-link>

    <router-link
      to="/business-trial"
      class="try-wrapper business"
      :class="[{ transparent }, $mq]"
    >
      <h2 :class="`try-preheading ${$mq}`">
        {{ $t('TryBusinessPreHeading') }}
      </h2>

      <h1 :class="`try-heading ${$mq}`">
        {{ $t('TryBusinessHeading') }}
      </h1>

      <p v-if="subheading" :class="`try-subheading ${$mq}`">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  color: $white;
  text-decoration: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  margin: 0;

  &.mobile {
    font-size: 0.875rem;
  }

  &.desktop {
    font-size: 1.125rem;
  }
}

.try-subheading {
  font-style: italic;
}

.try-heading {
  text-transform: uppercase;
  margin: 0;

  &.mobile {
    font-size: 1.125rem;
  }

  &.desktop {
    font-size: 1.875rem;
  }
}
</style>

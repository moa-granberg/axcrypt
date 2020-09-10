<template>
  <article :class="`try-buttons-wrapper ${$mq}`">
    <router-link to="/premium-trial" :class="`try-button-wrapper ${$mq}`">
      <button :class="`try-button premium ${$mq}`">
        <h2 :class="`try-button-preheading ${$mq}`">
          {{ $t('TryButtonPreheadingPremium') }}
        </h2>
        <h1 :class="`try-button-heading ${$mq}`">
          {{ $t('TryButtonHeadingPremium') }}
        </h1>
        <p :class="`try-button-subheading ${$mq}`">
          {{ $t('ReadMoreButtonLabel') }}
        </p>
      </button>
    </router-link>
    <router-link to="/business-trial">
      <button :class="`try-button business ${$mq}`">
        <h2 :class="`try-button-preheading ${$mq}`">
          {{ $t('TryButtonPreheadingBusiness') }}
        </h2>
        <h1 :class="`try-button-heading ${$mq}`">
          {{ $t('TryButtonHeadingBusiness') }}
        </h1>
        <p :class="`try-button-subheading ${$mq}`">
          {{ $t('ReadMoreButtonLabel') }}
        </p>
      </button>
    </router-link>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.try-buttons-wrapper {
  a:first-of-type > button {
    border-radius: 3px 0 0 3px;
  }
  a:last-of-type > button {
    border-radius: 0 3px 3px 0;
  }
}

.try-button {
  border: none;
  color: $white;
  font-family: $standard-font;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 28px;

  &.premium {
    background-color: $green;
  }
  &.business {
    background-color: $gray;
  }
}

.try-button-heading {
  font-size: 0.875rem;
  text-transform: uppercase;
  margin: 0;
}

.try-button-preheading,
.try-button-subheading {
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
}

.try-button-subheading {
  font-style: italic;
}
</style>

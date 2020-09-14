<template>
  <div :class="`try-links-wrapper ${$mq}`">
    <router-link
      to="/premium-trial"
      :class="`try-premium-wrapper try-wrapper ${$mq}`"
    >
      <h1 :class="`try-preheading ${$mq}`">
        {{ $t('TryPremiumPreHeading') }}
      </h1>

      <h2 :class="`try-heading ${$mq}`">
        {{ $t('TryPremiumHeading') }}
      </h2>
    </router-link>

    <router-link
      to="/business-trial"
      :class="`try-business-wrapper try-wrapper ${$mq}`"
    >
      <h1 :class="`try-preheading ${$mq}`">
        {{ $t('TryBusinessPreHeading') }}
      </h1>

      <h2 :class="`try-heading ${$mq}`">
        {{ $t('TryBusinessHeading') }}
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.try-links-wrapper {
  display: flex;
  height: 100%;
}

.try-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: $white;
  height: 100%;
  width: 50%;
}

.try-premium-wrapper {
  background-color: rgba(72, 119, 44, 0.7);
}

.try-business-wrapper {
  background-color: rgba(0, 0, 0, 0.7);
}

.try-preheading {
  font-weight: 300;
  margin: 0 0 10px 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.mobile {
    font-size: 0.875rem;
  }

  &.desktop {
    font-size: 1.125rem;
  }
}

.try-heading {
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;

  &.mobile {
    font-size: 1.125rem;
  }

  &.desktop {
    font-size: 1.875rem;
  }
}
</style>

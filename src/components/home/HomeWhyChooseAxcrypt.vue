<template>
  <section :class="`home-why-choose-axcrypt-wrapper ${$mq}`">
    <h1 :class="`home-why-choose-axcrypt-heading heading-medium ${$mq}`">
      {{ $t('WhyChooseAxcrypt') }}
    </h1>

    <home-why-choose-axcrypt-selling-points />
  </section>
</template>

<script>
import HomeWhyChooseAxcryptSellingPoints from '@/components/home/HomeWhyChooseAxcryptSellingPoints';

export default {
  components: {
    HomeWhyChooseAxcryptSellingPoints,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-why-choose-axcrypt-wrapper {
  @include center-column;
  background-color: rgba(6, 9, 3, 0.9);

  &.mobile {
    padding: 30px 0;
  }

  &.desktop {
    padding: 0 2rem;
    height: clamp(400px, 49vh, 650px);
  }
}

.home-why-choose-axcrypt-heading {
  color: $white;
  font-weight: 400;

  &.desktop {
    margin: 0 0 2rem 0;
    padding: 0;
  }
}
</style>

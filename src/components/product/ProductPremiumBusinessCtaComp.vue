<template>
  <section>
    <h2> {{$t('PremiumBusinessCtaPreHeading')}} </h2>
    <h1> {{$t('PremiumBusinessCtaHeading')}} </h1>
    <primary-button-comp phraseKey="ReadMoreButtonLabel" size="small" />
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';

export default {
  components: {
    PrimaryButtonComp
  }
}
</script>

<style>

</style>
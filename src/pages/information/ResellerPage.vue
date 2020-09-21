<template>
  <main :class="['reseller-wrapper', $mq]">
    <article :class="['reseller-info-wrapper', $mq]">
      <div :class="['reseller-info-text-wrapper', $mq]">
        <h1 :class="['reseller-info-heading heading-small', $mq]">
          {{ $t('ResellerInfoHeading') }}
        </h1>
        <p :class="['body-text', $mq]">{{ $t('ResellerInfoText1') }}</p>
        <p :class="['body-text', $mq]">{{ $t('ResellerInfoText2') }}</p>
        <p v-html="$t('ResellerInfoText3')" :class="['body-text', $mq]"></p>
      </div>
      <img src="@/assets/view/reseller/resell.png" alt="resell" />
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.reseller-wrapper {
  &.mobile {
    margin: auto; //remove??
  }
}

.reseller-info-wrapper {
  &.mobile {
    @include center-column;
  }

  &.desktop {
    @include center-row;
  }
}

.reseller-info-text-wrapper {
  max-width: 600px;

  &.mobile {
    margin: 24px;
  }

  &.desktop {
    margin: 34px;
  }
}

.reseller-info-heading {
  font-weight: 400;
  color: $green;
}
</style>

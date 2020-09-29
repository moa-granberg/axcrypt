<template>
  <section :class="['text-view-wrapper press-wrapper', $mq]">
    <article :class="['press-releases-wrapper', $mq]">
      <h1 :class="[$mq]">{{ $t('PressReleasesLabel') }}</h1>
      <div :class="['press-release-item', $mq]">
        <p :class="[$mq]">{{ $t('PressReleaseMessage230816') }}</p>
        <p :class="[$mq]">
          <a href="pdfs/PressRelease_AxCrypt2.pdf">English</a> /
          <a href="pdfs/Pressmeddelande_AxCrypt2.pdf">Svenska</a>
        </p>
      </div>
      <div :class="['press-release-item', $mq]">
        <p :class="[$mq]">{{ $t('PressReleaseMessage070416') }}</p>
        <p :class="[$mq]">
          <a href="pdfs/PressRelease_AxCrypt.pdf">English</a> /
          <a href="pdfs/Pressmeddelande_AxCrypt.pdf">Svenska</a>
        </p>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.press-wrapper {
  @include no-margin-padding;
  text-align: center;

  > article {
    @include standard-padding;
  }
}

.press-release-item {
  &.mobile {
    margin: $margin-mobile 0 0 0;
  }

  &.desktop {
    margin: $margin-desktop 0 0 0;
  }
}
</style>

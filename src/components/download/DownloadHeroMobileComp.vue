<template>
  <article :class="`download-hero-mobile-wrapper ${$mq}`">
    <div :class="`download-hero-mobile-text-wrapper ${$mq}`">
      <h1 :class="`download-hero-heading ${$mq}`">
        {{ $t('DownloadMobileHeading') }}
      </h1>
      <p
        :class="`download-hero-paragraph ${$mq}`"
        v-html="$t('DownloadMobileBodyText')"
      ></p>
    </div>

    <article :class="`download-hero-mobile-images-wrapper ${$mq}`">
      <div :class="`download-hero-mobile-badge-wrapper ${$mq}`">
        <img
          :class="`download-hero-mobile-badge ${$mq}`"
          src="@/assets/view/download/google-play-badge.png"
          alt="google play badge"
        />
        <img
          :class="`download-hero-mobile-badge ${$mq}`"
          src="@/assets/view/download/app_store_badge.svg"
          alt="app store badge"
        />
      </div>

      <div :class="`download-hero-mobile-img-wrapper ${$mq}`">
        <img
          :class="`download-hero-mobile-img ${$mq}`"
          src="@/assets/view/download/mobile_application.svg"
          alt=""
        />
      </div>
    </article>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/downloadView.scss';

.download-hero-mobile-wrapper {
  color: $white;
  margin: 24px 24px 0 24px;
}

.download-hero-mobile-text-wrapper {
  max-width: 600px;
  margin: auto;
}

.download-hero-mobile-images-wrapper {
  max-width: 600px;
  display: flex;
  margin: auto;
  justify-content: space-between;
}

.download-hero-mobile-badge-wrapper {
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.download-hero-mobile-badge {
  height: 30px;
  margin: 6px 0;
}

.download-hero-mobile-img-wrapper {
  align-self: flex-end;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.download-hero-mobile-img {
  max-width: 125%;
}
</style>

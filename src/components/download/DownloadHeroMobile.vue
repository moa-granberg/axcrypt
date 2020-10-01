<template>
  <article :class="`download-hero-mobile-wrapper ${$mq}`">
    <div :class="`download-hero-mobile-text-wrapper ${$mq}`">
      <h1 :class="`download-hero-heading heading-medium ${$mq}`">
        {{ $t('DownloadMobileHeading') }}
      </h1>
      <p :class="`download-hero-paragraph body-text ${$mq}`">
        {{ $t('DownloadMobileBodyText1') }}
      </p>
      <p
        :class="`download-hero-paragraph body-text ${$mq}`"
        v-html="
          $t('DownloadMobileBodyText2', {
            url: '#/information/get-started/mobile',
          })
        "
      />
    </div>

    <article :class="`download-hero-mobile-images-wrapper ${$mq}`">
      <div :class="`download-hero-mobile-badge-wrapper ${$mq}`">
        <a
          href="https://play.google.com/store/apps/details?id=net.axcrypt.axcrypt2x"
        >
          <img
            :class="`download-hero-mobile-badge ${$mq}`"
            src="@/assets/view/download/google-play-badge.png"
            alt="google play badge"
          />
        </a>
        <a href="https://apps.apple.com/us/app/axcrypt/id1157695909">
          <img
            :class="`download-hero-mobile-badge ${$mq}`"
            src="@/assets/view/download/app_store_badge.svg"
            alt="app store badge"
          />
        </a>
      </div>

      <div :class="`download-hero-mobile-img-wrapper ${$mq}`">
        <img
          :class="`download-hero-mobile-img ${$mq}`"
          src="@/assets/view/download/mobile_application.png"
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

  &.mobile {
    margin: $margin-mobile;
    margin-bottom: 0;
  }

  &.desktop {
    flex-grow: 1;
    margin: 80px 80px 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.download-hero-mobile-text-wrapper {
  max-width: $max-text-width;

  &.mobile {
    margin: auto;
  }

  &.desktop {
    margin: 0 80px 0 0;
  }
}

.download-hero-mobile-images-wrapper {
  max-width: $max-text-width;
  display: flex;
  justify-content: space-between;

  &.mobile {
    margin: auto;
  }
}

.download-hero-mobile-badge-wrapper {
  align-self: flex-start;
  display: flex;

  &.mobile {
    flex-direction: column;
  }
}

.download-hero-mobile-badge {
  height: 30px;

  &.mobile {
    margin: 6px 0;
  }

  &.desktop {
    margin: 0 6px 0 0;
  }
}

.download-hero-mobile-img-wrapper {
  align-self: flex-end;
  display: flex;
  align-items: flex-end;
}

.download-hero-mobile-img {
  &.mobile {
    max-width: 30vw;
  }
}
</style>

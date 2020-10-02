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

    <article :class="['press-images-wrapper', $mq]">
      <h1 :class="[$mq]">{{ $t('PressImagesLabel') }}</h1>
      <p :class="[$mq]">{{ $t('PressImagesDescription') }}</p>

      <div :class="['press-images-image-wrapper', $mq]">
        <div :class="[$mq]">
          <img
            :class="['press-img', $mq]"
            src="@/assets/team-photos/zebastian-500x500.jpg"
            alt="Zebastian"
          />
          <h2 :class="['name-heading heading-small', $mq]">
            Zebastian Victorin
          </h2>
          <p :class="[$mq]">Co-founder / CEO</p>
        </div>

        <div :class="[$mq]">
          <img
            :class="['press-img', $mq]"
            src="@/assets/team-photos/mans-500x500.jpg"
            alt="Måns"
          />
          <h2 :class="['name-heading heading-small', $mq]">Måns Hansson</h2>
          <p :class="[$mq]">Co-founder / Creative director</p>
        </div>
      </div>
    </article>

    <article :class="['branding-guidelines-wrapper', $mq]">
      <h1 :class="[$mq]">{{ $t('BrandingGuidelinesLabel') }}</h1>
      <div :class="['branding-guidelines-content-wrapper', $mq]">
        <div :class="['branding-guidelines-text-wrapper', $mq]">
          <p :class="[$mq]">{{ $t('BrandingGuidelinesDescription') }}</p>
          <ul :class="['branding-guidelines-list', $mq]">
            <li :class="[$mq]">
              <p :class="[$mq]">{{ $t('AboutUsLinkLabel') }}</p>
            </li>
            <li :class="[$mq]">
              <p :class="[$mq]">{{ $t('BrandToneLabel') }}</p>
            </li>
            <li :class="[$mq]">
              <p :class="[$mq]">{{ $t('LogoAndIconLabel') }}</p>
            </li>
            <li :class="[$mq]">
              <p :class="[$mq]">{{ $t('ColorPaletteLabel') }}</p>
            </li>
            <li :class="[$mq]">
              <p :class="[$mq]">{{ $t('TypographyLabel') }}</p>
            </li>
          </ul>
          <a
            :class="['standard-button small dark-green download-button', $mq]"
            href="https://www.axcrypt.net/downloads/15808/"
          >
            {{ $t('DownloadLinkLabel') }} {{ $t('BrandingGuidelinesLabel') }}</a
          >
        </div>
        <img
          :class="['logo', $mq]"
          src="@/assets/logos/axcrypt_transparent.png"
          alt=""
        />
      </div>
    </article>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.press-wrapper {
  @include no-margin-padding;
  text-align: center;

  > article {
    @include standard-padding;
    margin: auto;
  }

  &.desktop {
    max-width: $sidemenu-served-content-width !important;
    border-right: 1px solid $white;
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

.press-images-wrapper {
  background-color: $light-gray;
}

.press-images-image-wrapper {
  &.desktop {
    margin: $margin-desktop 0 0 0;
    @include center-row;
    gap: $margin-desktop;
  }
}

.press-images-image-wrapper p {
  @include no-margin-padding;
}

.press-images-image-wrapper .name-heading {
  font-weight: 600;
}

.press-img {
  &.mobile {
    max-width: 80vw;
    margin: $margin-mobile 0 0 0;
  }

  &.desktop {
    max-width: 100%;
  }
}

.branding-guidelines-wrapper {
  display: flex;
  flex-direction: column;
}

.download-button {
  color: $white;
  text-transform: uppercase;

  &.mobile {
    margin: $margin-mobile 0;
  }

  &.desktop {
    margin: $margin-desktop 0;
  }
}

.branding-guidelines-content-wrapper {
  &.mobile {
    margin: auto;
  }

  &.desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.branding-guidelines-text-wrapper {
  max-width: $max-text-width;

  &.mobile {
    @include center-column;
  }

  &.desktop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}

.logo {
  &.mobile {
    max-width: 80vw;
  }

  &.desktop {
    max-width: 250px;
  }
}
</style>

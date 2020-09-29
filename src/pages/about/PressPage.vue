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
    margin: auto;
  }

  &.desktop {
    max-width: $sidemenu-served-content-width !important;
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
</style>

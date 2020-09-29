<template>
  <section :class="['about-axcrypt-wrapper', $mq]">
    <article :class="['history-wrapper', $mq]">
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText1') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText2') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText3') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText4') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText5') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText6') }}</p>
    </article>

    <article :class="['vision-wrapper', $mq]">
      <h1 :class="['about-axcrypt-heading heading-large', $mq]">
        {{ $t('OurVisionLabel') }}
      </h1>
      <div :class="['vision-item', $mq]">
        <img src="@/assets/icons/secure_cloud.png" alt="secure" />
        <div :class="['vision-text-wrapper', $mq]">
          <h2 :class="['about-axcrypt-subheading heading-medium', $mq]">
            {{ $t('SecurityLinkLabel') }}
          </h2>
          <p :class="['body-text', $mq]">
            {{ $t('AboutAxcryptVisionSecurityText') }}
          </p>
        </div>
      </div>

      <div :class="['vision-item', $mq]">
        <img src="@/assets/icons/chain.png" alt="reliable" />
        <div :class="['vision-text-wrapper', $mq]">
          <h2 :class="['about-axcrypt-subheading heading-medium', $mq]">
            {{ $t('ReliabilityLabel') }}
          </h2>
          <p :class="['body-text', $mq]">
            {{ $t('AboutAxcryptVisionReliabilityText') }}
          </p>
        </div>
      </div>

      <div :class="['vision-item', $mq]">
        <img src="@/assets/icons/mouse.png" alt="simple" />
        <div :class="['vision-text-wrapper', $mq]">
          <h2 :class="['about-axcrypt-subheading heading-medium', $mq]">
            {{ $t('SimplicityLabel') }}
          </h2>
          <p :class="['body-text', $mq]">
            {{ $t('AboutAxcryptVisionSimplicityText') }}
          </p>
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

.about-axcrypt-wrapper {
  @include standard-margin;

  &.desktop {
    margin-top: $margin-top-aside-content;
  }
}

.about-axcrypt-heading {
  font-weight: 400;
}

.about-axcrypt-subheading {
  font-weight: 400;
  color: $green;
}

.history-wrapper {
  &.desktop {
    max-width: $max-content-width;
    margin: auto;
    column-count: 2;
  }

  p:first-of-type {
    margin-top: 0;
  }
}

.vision-wrapper {
  @include standard-padding;
  background-color: $light-gray;

  .about-axcrypt-heading {
    @include no-margin-padding;
    text-align: center;
  }

  &.desktop {
    div:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
}

.vision-item {
  @include center-row;

  &.mobile {
    gap: 14px;
    margin: 14px 0;

    img {
      width: 70px;
    }
  }

  &.desktop {
    gap: 50px;
    max-width: $max-text-width;
    margin: 24px auto;

    img {
      width: 150px;
    }
  }
}
</style>

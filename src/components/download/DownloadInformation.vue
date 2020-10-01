<template>
  <section :class="`download-information-wrapper ${$mq}`">
    <section :class="`download-information-inner-wrapper ${$mq}`">
      <article :class="`download-information-text-wrapper ${$mq}`">
        <h1 :class="`download-information-heading heading-medium ${$mq}`">
          {{ $t('InformationLinkLabel') }}
        </h1>

        <h2
          :class="`body-text ${$mq}`"
          v-html="
            $t('DownloadInformationSubheading', {
              url: '#/information/release-notes',
            })
          "
        ></h2>

        <dash-list :list="informationList" />
      </article>

      <primary-button
        phraseKey="DownloadInformationButtonLabel"
        path="/information/release-notes"
        size="small"
        color="dark-green"
      />

      <div :class="`download-information-img-wrapper ${$mq}`">
        <img
          :class="`download-information-img ${$mq}`"
          src="@/assets/view/download/online_information.svg"
          alt=""
        />
      </div>
    </section>
  </section>
</template>

<script>
import PrimaryButton from '../PrimaryButton';
import DashList from '../DashList';

export default {
  components: {
    DashList,
    PrimaryButton,
  },

  data() {
    return {
      informationList: [
        'DownloadInformationListNoBackdoors',
        'DownloadInformationListOfficialDownload',
        'DownloadInformationListKeepInMind',
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.download-information-wrapper {
  background-color: #ececec;
}

.download-information-inner-wrapper {
  display: grid;
  align-items: flex-start;
  max-width: 1400px;
  margin: auto;

  > a {
    text-transform: uppercase;
  }

  &.mobile {
    grid: 70% 30% / 1fr 1fr;
    grid-template-areas: 'text text' 'btn img';
    justify-items: center;
    padding: $margin-mobile;
    padding-bottom: 0;
  }

  &.desktop {
    grid: 1fr 120px / 1fr 1fr;
    grid-template-areas: 'text img' 'btn img';
    justify-items: flex-start;
    padding: 72px 80px 0 80px;

    a {
      margin: 10px 0 0 0;
    }
  }
}

.download-information-text-wrapper {
  grid-area: text;
  max-width: $max-text-width;
}

.download-information-heading {
  font-weight: 400;
  @include no-margin-padding;
}

.download-information-img-wrapper {
  grid-area: img;
  align-self: flex-end;

  @include center-row;

  &.desktop {
    justify-self: flex-end;
  }
}

.download-information-img {
  width: 90%;
  max-width: 270px;
}
</style>

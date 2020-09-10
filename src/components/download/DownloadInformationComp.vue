<template>
  <section :class="`download-information-wrapper ${$mq}`">
    <article :class="`download-information-text-wrapper ${$mq}`">
      <h1 :class="`download-information-heading ${$mq}`">
        {{ $t('InformationLinkLabel') }}
      </h1>

      <h2
        :class="`download-information-subheading ${$mq}`"
        v-html="$t('DownloadInformationSubheading')"
      ></h2>

      <dash-list-comp :list="informationList" />
    </article>

    <primary-button-comp
      phraseKey="DownloadInformationButtonLabel"
      path="/information/release-notes"
      size="small"
      color="dark"
    />

    <div :class="`download-information-img-wrapper ${$mq}`">
      <img
        :class="`download-information-img ${$mq}`"
        src="@/assets/view/download/online_information.svg"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import PrimaryButtonComp from '../PrimaryButtonComp';
import DashListComp from '../DashListComp';

export default {
  components: {
    DashListComp,
    PrimaryButtonComp,
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

  display: grid;
  align-items: flex-start;

  &.mobile {
    grid: 70% 30% / 1fr 1fr;
    grid-template-areas: 'text text' 'btn img';
    justify-items: center;
    padding: 24px 24px 0 24px;
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
  max-width: 600px;
}

.download-information-heading {
  font-weight: 400;
  margin: 0;

  &.mobile {
    font-size: 0.875rem;
  }

  &.desktop {
    font-size: 1.5rem;
  }
}

.download-information-subheading {
  &.mobile {
    font-size: 0.75rem;
  }

  &.desktop {
    font-size: 0.875rem;
  }

  a {
    color: $green;
  }
}

.download-information-img-wrapper {
  grid-area: img;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;

  &.desktop {
    justify-self: flex-end;
  }
}

.download-information-img {
  width: 90%;
  max-width: 270px;
}
</style>

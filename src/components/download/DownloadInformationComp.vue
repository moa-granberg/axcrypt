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

    <article :class="`download-information-bottom-wrapper ${$mq}`">
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
    </article>
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
}

.download-information-text-wrapper {
  padding: 24px;
  max-width: 600px;
  margin: auto;
}

.download-information-heading {
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
}

.download-information-subheading {
  font-size: 0.75rem;

  a {
    color: $green;
  }
}

.download-information-bottom-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  max-width: 600px;

  a {
    min-width: 166px;
    margin: 0 0 0 24px;
  }
}

.download-information-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.download-information-img {
  width: 90%;
  max-width: 270px;
}
</style>

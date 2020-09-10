<template>
  <section :class="`home-get-started-wrapper ${$mq}`">
    <h1 :class="`home-get-started-heading ${$mq}`">
      {{ $t('HomeGetStartedHeading') }}
    </h1>
    <ul :class="`home-get-started-list ${$mq}`">
      <li :class="`home-get-started-list-item ${$mq}`">
        <img
          :class="`home-get-started-list-item-icon ${$mq}`"
          src="@/assets/icons/cloud_download.svg"
          alt="cloud_download"
        />
        <div :class="`home-get-started-list-item-text-wrapper ${$mq}`">
          <h2 :class="`home-get-started-list-item-text-heading ${$mq}`">
            1. {{$t('HomeGetStartedListDownloadHeading')}}
          </h2>
          <p :class="`home-get-started-list-item-text-paragraph ${$mq}`">
            {{$t('HomeGetStartedListDownloadParagraph')}}
          </p>
        </div>
      </li>

      <li :class="`home-get-started-list-divider ${$mq}`"></li>

      <li :class="`home-get-started-list-item ${$mq}`">
        <img
          :class="`home-get-started-list-item-icon ${$mq}`"
          src="@/assets/icons/security_checked.svg"
          alt="security_checked"
        />
        <div :class="`home-get-started-list-item-text-wrapper ${$mq}`">
          <h2 :class="`home-get-started-list-item-text-heading ${$mq}`">
            2. {{$t('HomeGetStartedListEncryptHeading')}}
          </h2>
          <p :class="`home-get-started-list-item-text-paragraph ${$mq}`">
            {{$t('HomeGetStartedListEncryptParagraph')}}
          </p>
        </div>
      </li>

      <li :class="`home-get-started-list-divider ${$mq}`"></li>

      <li :class="`home-get-started-list-item ${$mq}`">
        <img
          :class="`home-get-started-list-item-icon ${$mq}`"
          src="@/assets/icons/cloud.svg"
          alt="cloud"
        />
        <div :class="`home-get-started-list-item-text-wrapper ${$mq}`">
          <h2 :class="`home-get-started-list-item-text-heading ${$mq}`">
            3. {{$t('HomeGetStartedListShareHeading')}}
          </h2>
          <p :class="`home-get-started-list-item-text-paragraph ${$mq}`">
            {{$t('HomeGetStartedListShareParagraph')}}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-get-started-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-get-started-heading {
  color: $green;
  font-weight: 400;
  font-size: 1.125rem;
}
.home-get-started-list {
  list-style: none;
  padding: 0;
}

.home-get-started-list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.home-get-started-list-divider {
  height: 35px;
  border-left: 1px solid $gray;
  margin: 5px 0 5px 22px;
}

.home-get-started-list-item-icon {
  height: 24px;
  padding: 10px;
  border: 1px solid $gray;
  border-radius: 50%;
}
.home-get-started-list-item-text-wrapper {
  max-width: 14rem;
  margin: 0 0 0 1rem;
}
.home-get-started-list-item-text-heading {
  color: $green;
  font-size: 0.875rem;
  margin: 0;
}
.home-get-started-list-item-text-paragraph {
  font-size: 0.6rem;
  margin: 0;
}
</style>

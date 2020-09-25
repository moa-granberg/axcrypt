<template>
  <section>
    <div :class="`header-wrapper ${$mq}`">
      <h2 :class="`nav-heading body-text-large ${$mq}`">
        {{ $t('OtherPlatformsLabel') }}
      </h2>
      <ul :class="`nav-wrapper ${$mq}`">
        <li>
          <router-link
            to="/information/get-started/windows"
            :class="`nav-link ${$mq}`"
          >
            Windows
          </router-link>
        </li>
        <li>
          <router-link
            to="/information/get-started/mac"
            :class="`nav-link ${$mq}`"
          >
            Mac
          </router-link>
        </li>
        <li>
          <router-link
            to="/information/get-started/mobile"
            :class="`nav-link ${$mq}`"
          >
            Mobile
          </router-link>
        </li>
      </ul>
    </div>

    <get-started-desktop v-if="$route.params.platform === 'windows'" />
    <get-started-desktop v-if="$route.params.platform === 'mac'" />
    <get-started-mobile v-if="$route.params.platform === 'mobile'" />
  </section>
</template>

<script>
import GetStartedDesktop from '@/components/information/get-started/GetStartedDesktop';
import GetStartedMobile from '@/components/information/get-started/GetStartedMobile';

export default {
  components: {
    GetStartedDesktop,
    GetStartedMobile,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header-wrapper {
  @include center-column;
  background-color: rgba($black, 0.9);

  &.mobile {
    gap: 16px;
    padding: 16px 0;
  }

  &.desktop {
    gap: 24px;
    padding: $margin-top-aside-content;
  }
}

.nav-heading {
  @include no-margin-padding;
  color: $white;
}

.nav-wrapper {
  @include center-row;
  @include no-margin-padding;
  list-style: none;

  &.mobile {
    gap: 50px;
  }

  &.desktop {
    gap: 60px;
  }
}

.nav-link {
  font-size: 0.875rem;
  text-decoration: none;
  color: $white;

  &.router-link-active {
    color: $light-green;
    font-weight: 600;
  }
}
</style>

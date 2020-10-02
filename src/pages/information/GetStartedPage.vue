<template>
  <section>
    <div :class="`header-wrapper ${$mq}`">
      <ul :class="`nav-wrapper ${$mq}`">
        <li>
          <router-link
            to="/information/get-started/windows"
            :class="`nav-link body-text-large ${$mq}`"
          >
            Windows
          </router-link>
        </li>
        <li>
          <router-link
            to="/information/get-started/mac"
            :class="`nav-link body-text-large ${$mq}`"
          >
            Mac
          </router-link>
        </li>
        <li>
          <router-link
            to="/information/get-started/mobile"
            :class="`nav-link body-text-large ${$mq}`"
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
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &.mobile {
    gap: 16px;
    padding: $margin-mobile 0;
  }

  &.desktop {
    gap: 24px;
    padding: $margin-desktop 0;
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
  text-decoration: none;
  color: $white;

  &.router-link-active {
    color: $light-green;
    font-weight: 600;
  }
}
</style>

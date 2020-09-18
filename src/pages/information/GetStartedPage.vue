<template>
  <main>
    This is Get Started with param {{ $route.params }}
    <!-- <div
      v-if="$mq === 'mobile' && getPageName === 'GetStartedLinkLabel'"
      :class="`information-get-started-platform-wrapper`"
    >
      <h2 :class="`body-text-large ${$mq}`">
        {{ $t('OtherPlatformsLabel') }}
      </h2>
      <ul :class="`get-started-nav-wrapper ${$mq}`">
        <li :class="[{ active: activePlatform }, $mq]">Windows</li>
        <li>Mac</li>
        <li>Mobile</li>
      </ul>
    </div> -->
  </main>
</template>

<script>
export default {};
</script>

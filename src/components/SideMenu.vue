<template>
  <aside class="side-menu-wrapper">
    <h1 :class="`side-menu-heading body-text-large ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>

    <ul class="side-menu-links-wrapper">
      <li
        v-for="link of linkList"
        :key="link.path"
        :class="`side-menu-link-item body-text ${$mq}`"
      >
        <router-link :to="link.path">
          {{ $t(link.phraseKey) }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    headingPhraseKey: String,
    linkList: Array, // { path: String, phraseKey: String }
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

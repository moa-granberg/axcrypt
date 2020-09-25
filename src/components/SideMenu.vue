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

.side-menu-wrapper {
  padding: $margin-top-aside-content;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $light-gray;
  width: 240px;
  box-sizing: border-box;
}

.side-menu-heading {
  margin: 0 0 18px 0;
  color: $green;
  font-weight: 400;
}

.side-menu-links-wrapper {
  @include no-margin-padding;
  list-style: none;
}

.side-menu-link-item {
  padding: 5px 0;

  a {
    color: $gray;
    font-weight: 400;

    &.router-link-active {
      font-weight: 600;
      color: $green;
    }
  }
}
</style>

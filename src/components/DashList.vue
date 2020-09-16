<template>
  <ul :class="`dash-list-wrapper ${$mq}`">
    <li
      v-for="phraseKey of list"
      :key="phraseKey"
      :class="`dash-list-item ${$mq}`"
    >
      <p :class="`dash-list-item-dash body-text ${$mq}`">-</p>
      <p :class="`dash-list-item-paragraph body-text ${$mq}`">
        {{ $t(phraseKey) }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array, // phraseKey
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.dash-list-wrapper {
  margin: 0 0 20px 0;
  padding: 0;
  max-width: 600px;
}

.dash-list-item {
  list-style: none;
  display: flex;
  margin: 8px 0;
}

.dash-list-item-dash {
  margin: 0 10px 0 0;
}

.dash-list-item-paragraph {
  margin: 0;
}
</style>

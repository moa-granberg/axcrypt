<template>
  <section :class="`feature-list-wrapper ${$mq}`">
    <h1 :class="`feature-list-header heading-medium ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>
    <ul :class="`feature-list-items-wrapper ${$mq}`">
      <li
        v-for="item of list"
        :key="item.src"
        :class="`feature-list-item body-text ${$mq}`"
      >
        <div :class="`feature-list-item-img-wrapper ${$mq}`">
          <img
            :src="require(`@/assets${item.src}`)"
            alt=""
            :class="`feature-list-item-img ${$mq}`"
          />
        </div>
        <p :class="`feature-list-item-paragraph ${$mq}`">
          {{ $t(item.phraseKey) }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    headingPhraseKey: String,
    list: Array, // list: [{ src: String, phraseKey: String }],
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.feature-list-wrapper {
  &.mobile {
    max-width: 350px;
    padding: 32px 0;
    margin: auto;
  }

  &.desktop {
    margin: 32px;
  }
}

.feature-list-header {
  color: $green;
  font-weight: 400;

  &.mobile {
    margin: 0 32px;
  }

  &.desktop {
    @include no-margin-padding;
  }
}

.feature-list-items-wrapper {
  padding: 0;
  margin: 0 10px;

  li:last-of-type {
    border: none;
  }
}

.feature-list-item {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid $light-gray;
  padding: 5px 0;

  &.mobile {
    justify-content: space-between;
  }
}

.feature-list-item-img-wrapper {
  @include center-row;
  width: 40px;
}

.feature-list-item-paragraph {
  &.mobile {
    width: 250px;
  }

  &.desktop {
    margin: 1rem 0 1rem 2rem;
  }
}
</style>

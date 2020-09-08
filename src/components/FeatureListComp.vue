<template>
  <section :class="`feature-list-wrapper ${$mq}`">
    <h1 :class="`feature-list-header ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>
    <ul :class="`feature-list-items-wrapper ${$mq}`">
      <li
        v-for="item of list"
        :key="item.src"
        :class="`feature-list-item ${$mq}`"
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
  max-width: 350px;
  margin: auto;
  padding: 32px 0;
}

.feature-list-header {
  color: $green;
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
  margin: 0 32px;
}

.feature-list-items-wrapper {
  padding: 0;
  margin: 0 10px;

  li:last-of-type {
    border: none;
  }
}

.feature-list-item {
  font-size: 0.75rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid $light-gray;
  padding: 5px 0;
}

.feature-list-item-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}

.feature-list-item-paragraph {
  width: 250px;
}
</style>

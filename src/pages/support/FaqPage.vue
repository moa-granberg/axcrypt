<template>
  <section :class="['text-view-wrapper', $mq]">
    <article v-for="item of data" :key="item.heading" :class="$mq">
      <h1 :class="$mq">{{ $t(item.heading) }}</h1>

      <div
        v-for="question of item.questions"
        :key="question.heading"
        :class="['faq-list-item', $mq]"
      >
        <div :class="['faq-list-question-wrapper', $mq]">
          <img
            v-if="showItem === question.heading"
            :class="['faq-list-img', $mq]"
            src="@/assets/icons/remove_circle_outline.svg"
            alt="hide"
            @click="showItem = ''"
          />

          <img
            v-else
            :class="['faq-list-img', $mq]"
            src="@/assets/icons/add_circle_outline.svg"
            alt="show"
            @click="showItem = question.heading"
          />

          <h2
            :class="['question-heading body-text-large', $mq]"
            @click="
              showItem = showItem === question.heading ? '' : question.heading
            "
          >
            {{ $t(question.heading) }}
          </h2>
        </div>
        <div
          :class="[{ show: showItem === question.heading }, 'faq-answer', $mq]"
        >
          <p
            v-for="answer of question.answer"
            :key="answer.text"
            v-html="
              answer.url ? $t(answer.text, { url: answer.url }) : $t(answer)
            "
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import data from '@/data/support/faq/data';

export default {
  data() {
    return {
      data,
      showItem: '',
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.text-view-wrapper :first-child {
  padding-top: 0;
}

.faq-list-item {
  margin: 20px 0;
}

.faq-list-question-wrapper {
  display: flex;
  align-items: flex-start;

  cursor: pointer;
}

.faq-list-img {
  margin: 2px 10px 0 0;

  &.mobile {
    width: 20px;
  }

  &.desktop {
    width: 24px;
  }
}

.question-heading {
  @include no-margin-padding;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
}

.faq-answer {
  height: 0;
  overflow: hidden;

  &.show {
    height: auto;
    border-bottom: 1px solid $light-gray;
  }
}
</style>

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
            :key="answer"
            v-html="$t(answer)"
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
};
</script>

<style lang="scss" scoped>
.text-view-wrapper :first-child {
  padding-top: 0;
}

.faq-list-question {
  display: flex;
}

.faq-list-img {
  width: 24px;
  margin: 0 10px 0 0;
}

.question {
  font-weight: 400;
}

.faq-list-answer {
}
</style>

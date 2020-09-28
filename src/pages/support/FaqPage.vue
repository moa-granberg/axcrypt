<template>
  <section :class="['text-view-wrapper', $mq]">
    <article :class="$mq">
      <h1 :class="$mq">List heading</h1>

      <div :class="['faq-list', $mq]">
        <div :class="['faq-list-item', $mq]">
          <div :class="['faq-list-question', $mq]">
            <img
              :class="['faq-list-img', $mq]"
              src="@/assets/icons/add_circle_outline.svg"
              alt="show"
            />
            <h3 :class="['question', $mq]">Item heading (question)</h3>
          </div>
          <div :class="['faq-list-answer', $mq]">
            <p>text (answer)</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
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

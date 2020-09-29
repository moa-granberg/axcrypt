<template>
  <article :class="`business-card-wrapper ${$mq}`">
    <img
      :src="require(`@/assets${person.src}`)"
      alt="Angélique"
      :class="`business-card-img ${$mq}`"
    />
    <div :class="`business-card-text-wrapper ${$mq}`">
      <h1 :class="`business-card-heading body-text ${$mq}`">
        {{ person.name }}
      </h1>
      <p :class="`business-card-paragraph body-text ${$mq}`">
        {{ person.jobTitle }}
      </p>
      <p :class="`business-card-paragraph body-text ${$mq}`">
        {{ person.email }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    person: {
      src: String,
      name: String,
      jobTitle: String,
      email: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.business-card-wrapper {
  display: flex;
  align-items: center;
  margin: 28px;
}

.business-card-img {
  width: 119px;
}

.business-card-text-wrapper {
  margin: 0 0 0 10px;
}

.business-card-heading,
.business-card-paragraph {
  @include no-margin-padding;
}
</style>

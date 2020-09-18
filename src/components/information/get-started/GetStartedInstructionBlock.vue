<template>
  <article :class="`instruction-block-wrapper ${$mq}`">
    <div :class="`instruction-wrapper ${$mq}`">
      <h1 :class="`heading-small ${$mq}`">
        {{ $t(data.heading) }}
      </h1>

      <p :class="`body-text ${$mq}`" v-html="$t(data.ingress)" />

      <iframe
        v-if="$mq === 'mobile'"
        :class="`iframe ${$mq}`"
        :title="data.videoTitle"
        :src="data.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <ol :class="`instructions-wrapper ${$mq}`">
        <li v-for="item of data.list" :key="item">
          <p :class="`body-text ${$mq}`" v-html="$t(item)" />
        </li>
      </ol>
    </div>

    <iframe
      v-if="$mq === 'desktop'"
      :class="`iframe ${$mq}`"
      :title="data.videoTitle"
      :src="data.videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </article>
</template>

<script>
export default {
  props: {
    data: {
      heading: String,
      ingress: String,
      videoUrl: String,
      videoTitle: String,
      list: Array, // Strings
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

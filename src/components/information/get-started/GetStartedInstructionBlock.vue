<template>
  <article :class="[{ reverse }, 'instruction-wrapper', $mq]">
    <div :class="[{ reverse }, 'instruction-text-wrapper', $mq]">
      <h1 :class="`instruction-heading heading-small ${$mq}`">
        {{ $t(data.heading) }}
      </h1>

      <p :class="`body-text ${$mq}`" v-html="$t(data.ingress)" />

      <div
        :class="[{ reverse }, 'iframe-wrapper', $mq]"
        v-if="$mq === 'mobile'"
      >
        <iframe
          :class="`iframe ${$mq}`"
          :title="data.videoTitle"
          :src="data.videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <ol :class="`instruction-list-wrapper ${$mq}`">
        <li :class="`list-item ${$mq}`" v-for="item of data.list" :key="item">
          <p :class="`body-text ${$mq}`" v-html="$t(item)" />
        </li>
      </ol>
    </div>

    <div :class="`iframe-wrapper ${$mq}`" v-if="$mq === 'desktop'">
      <iframe
        :class="`iframe ${$mq}`"
        :title="data.videoTitle"
        :src="data.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
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
    reverse: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.instruction-wrapper {
  @include standard-padding;

  &.desktop {
    display: grid;
    grid: 1fr / 1fr 1fr;
    align-items: flex-start;
    gap: $margin-desktop;
    margin: auto;

    &.reverse {
      grid-template-areas: 'video text';
    }
  }
}

.instruction-text-wrapper {
  &.mobile {
    text-align: center;
  }

  &.desktop {
    justify-self: flex-end;

    &.reverse {
      grid-area: text;
    }
  }
}

.instruction-heading {
  @include no-margin-padding;
  color: $green;
  font-weight: 400;
}

.iframe-wrapper {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  box-shadow: $standard-box-shadow;

  &.mobile {
    margin: 20px 0;
  }

  &.desktop {
    &.reverse {
      grid-area: video;
    }
  }
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $gray;
}

.instruction-list-wrapper {
  @include no-margin-padding;
  list-style: none;
  counter-reset: list-item;

  &.mobile {
    text-align: start;
  }

  &.desktop {
    border-top: 1px solid $green;
  }
}

.list-item {
  display: flex;
  margin: 10px 0;
  counter-increment: list-item;

  &::before {
    content: counter(list-item);
    color: $green;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
  }

  p {
    @include no-margin-padding;
    margin: 1px 0 0 10px;
  }
}
</style>

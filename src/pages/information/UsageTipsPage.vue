<template>
  <section :class="['usage-tips-wrapper', $mq]">
    <p :class="['usage-tips-description', $mq]">
      {{ $t('UsageTipsDescription') }}
    </p>

    <article :class="['usage-tips-article', $mq]">
      <h1 :class="['heading-medium', $mq]">
        {{ $t('UsageTipsTargetUseHeading') }}
      </h1>
      <ul :class="['usage-tips-list', $mq]">
        <li
          v-for="item of targetUseList"
          :key="item"
          :class="['usage-tips-list-item', $mq]"
        >
          <p :class="['body-text', $mq]">{{ $t(item) }}</p>
        </li>
      </ul>
    </article>

    <article :class="['usage-tips-article', $mq]">
      <h1 :class="['heading-medium', $mq]">
        {{ $t('UsageTipsPersonalPrivacyHeading') }}
      </h1>
      <ul :class="['usage-tips-list', $mq]">
        <li
          v-for="item of personalPrivacyList"
          :key="item"
          :class="['usage-tips-list-item', $mq]"
        >
          <p :class="['body-text', $mq]">{{ $t(item) }}</p>
        </li>
      </ul>
    </article>

    <article
      v-for="obj of infoBlockList"
      :key="obj.heading"
      :class="['usage-tips-article', $mq]"
    >
      <h1 :class="['heading-medium', $mq]">{{ $t(obj.heading) }}</h1>
      <p v-for="text of obj.texts" :key="text" :class="['body-text', $mq]">
        {{ $t(text) }}
      </p>
    </article>
  </section>
</template>

<script>
import data from '@/data/information/usage-tips/data';

export default {
  data() {
    return {
      targetUseList: data.targetUseList,
      personalPrivacyList: data.personalPrivacyList,
      infoBlockList: data.infoBlockList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.usage-tips-wrapper {
  max-width: 900px;

  &.mobile {
    padding: 24px;
  }
}

.usage-tips-description {
  text-align: center;
  max-width: 600px;

  &.mobile {
    margin: 0 auto 14px auto;
  }

  &.desktop {
    margin: 58px auto 0 auto;
  }
}

.usage-tips-article {
  &.mobile {
    padding: 14px 0;
  }

  &.desktop {
    padding: 20px 0;
  }

  h1 {
    @include no-margin-padding;
    color: $green;
    font-weight: 400;
  }
}

.usage-tips-list {
  @include no-margin-padding;
  list-style: none;
}

.usage-tips-list-item {
  @include list-bullet;
}
</style>

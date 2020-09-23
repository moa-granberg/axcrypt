<template>
  <section :class="['usage-tips-wrapper', $mq]">
    <p :class="['usage-tips-description', $mq]">
      {{ $t('UsageTipsDescription') }}
    </p>

    <article :class="['usage-tips-article', $mq]">
      <h1>{{ $t('UsageTipsTargetUseHeading') }}</h1>
      <ul :class="['usage-tips-list', $mq]">
        <li
          v-for="item of targetUseList"
          :key="item"
          :class="['usage-tips-list-item', $mq]"
        >
          <p>{{ $t(item) }}</p>
        </li>
      </ul>
    </article>

    <article :class="['usage-tips-article', $mq]">
      <h1>{{ $t('UsageTipsPersonalPrivacyHeading') }}</h1>
      <ul :class="['usage-tips-list', $mq]">
        <li
          v-for="item of personalPrivacyList"
          :key="item"
          :class="['usage-tips-list-item', $mq]"
        >
          <p>{{ $t(item) }}</p>
        </li>
      </ul>
    </article>

    <article
      v-for="obj of infoBlockList"
      :key="obj.heading"
      :class="['usage-tips-article', $mq]"
    >
      <h1>{{ $t(obj.heading) }}</h1>
      <p v-for="text of obj.texts" :key="text">{{ $t(text) }}</p>
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
}

.usage-tips-description {
}

.usage-tips-article {
}

.usage-tips-list {
}

.usage-tips-list-item {
}
</style>

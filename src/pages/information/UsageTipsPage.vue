<template>
  <section :class="['text-view-wrapper', $mq]">
    <p :class="['description', $mq]">
      {{ $t('UsageTipsDescription') }}
    </p>

    <article :class="$mq">
      <h1 :class="$mq">
        {{ $t('UsageTipsTargetUseHeading') }}
      </h1>
      <ul :class="$mq">
        <li v-for="item of targetUseList" :key="item" :class="$mq">
          <p :class="$mq">{{ $t(item) }}</p>
        </li>
      </ul>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">
        {{ $t('UsageTipsPersonalPrivacyHeading') }}
      </h1>
      <ul :class="$mq">
        <li v-for="item of personalPrivacyList" :key="item" :class="$mq">
          <p :class="$mq">{{ $t(item) }}</p>
        </li>
      </ul>
    </article>

    <article v-for="obj of infoBlockList" :key="obj.heading" :class="$mq">
      <h1 :class="$mq">{{ $t(obj.heading) }}</h1>
      <p v-for="text of obj.texts" :key="text" :class="$mq">
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

<template>
  <section :class="['service-status-wrapper text-view-wrapper', $mq]">
    <article :class="['service-status-info-wrapper', $mq]">
      <p :class="['info-text', $mq]">{{ $t('ServiceStatusDescription') }}</p>

      <a
        href="https://status.axcrypt.net/"
        :class="['standard-button small service-status-button', $mq]"
      >
        {{ $t('ServerStatusLabel') }}</a
      >
    </article>

    <article :class="$mq">
      <h1 :class="['incident-heading', $mq]">
        {{ $t('PastIncidentsHeading') }}
      </h1>

      <div
        v-for="item of incidents"
        :key="item.time"
        :class="['incident-wrapper', $mq]"
      >
        <p :class="['date', $mq]">{{ item.date }}</p>
        <p :class="['time', $mq]">{{ item.time }}</p>
        <p
          :class="['error', $mq]"
          v-for="error of item.errors"
          :key="error.url"
        >
          {{ error.siteTitle }} ( <a :href="error.url"> {{ error.url }} </a>)
          was unavailable
        </p>
        <p :class="['comment', $mq]">{{ item.comment }}</p>
      </div>
    </article>
  </section>
</template>

<script>
import incidents from '@/data/support/service-status/data';

export default {
  data() {
    return {
      incidents,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.service-status-wrapper {
  :first-child {
    padding-top: 0;
  }
}

.service-status-info-wrapper {
  &.mobile {
    @include center-column;
  }

  &.desktop {
    display: flex;
    justify-content: space-between;
  }
}

.service-status-button {
  color: $white;
  text-transform: uppercase;
}

.info-text {
  &.desktop {
    @include no-margin-padding;
    max-width: $max-text-width;
  }
}

.incident-heading {
  padding: 0 0 24px 0;
  border-bottom: 6px solid $light-gray;
}

.incident-wrapper {
  padding: 12px 0;
  border-bottom: 6px solid $light-gray;

  .date {
    margin: 0 0 20px 0;
  }

  .time,
  .error {
    @include no-margin-padding;
  }

  .comment {
    font-style: italic;
  }
}
</style>

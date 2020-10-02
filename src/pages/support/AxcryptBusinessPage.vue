<template>
  <section :class="['text-view-wrapper', $mq]">
    <article :class="['no-description', $mq]">
      <h1 :class="$mq">{{ $t('AxcryptBusinessBlock1Heading') }}</h1>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock1Text1') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock1Text2') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock1Text3') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock1Text4') }}</p>
      <p
        :class="$mq"
        v-html="
          $t('AxcryptBusinessBlock1Text5', {
            url: '#/information/terms-of-use',
          })
        "
      />
      <p
        :class="$mq"
        v-html="$t('AxcryptBusinessBlock1Text6', { url: '#/pricing' })"
      />
      <p :class="$mq">{{ $t('AxcryptBusinessBlock1Text7') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('AxcryptBusinessBlock2Heading') }}</h1>
      <p
        :class="$mq"
        v-html="
          $t('AxcryptBusinessBlock2Text1', {
            url: 'https://account.axcrypt.net/Business/CreateSubscription',
          })
        "
      />
      <p :class="$mq">{{ $t('AxcryptBusinessBlock2Text2') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock2Text3') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock2Text4') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock2Text5') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock2Text6') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('AxcryptBusinessBlock3Heading') }}</h1>
      <p
        :class="$mq"
        v-html="
          $t('AxcryptBusinessBlock3Text1', {
            url:
              'https://account.axcrypt.net/en/Business/ManageSubscriptionMembers',
          })
        "
      />
      <p :class="$mq">{{ $t('AxcryptBusinessBlock3Text2') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock3Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('AxcryptBusinessBlock4Heading') }}</h1>
      <p
        :class="$mq"
        v-html="
          $t('AxcryptBusinessBlock4Text1', {
            url:
              'https://account.axcrypt.net/en/Business/SubscriptionInformation',
          })
        "
      />
      <p :class="$mq">{{ $t('AxcryptBusinessBlock4Text2') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock4Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('AxcryptBusinessBlock5Heading') }}</h1>
      <p
        :class="$mq"
        v-html="
          $t('AxcryptBusinessBlock5Text1', {
            url: 'https://account.axcrypt.net/en/Business/TopupSubscription',
          })
        "
      />
      <p :class="$mq">{{ $t('AxcryptBusinessBlock5Text2') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock5Text3') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock5Text4') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock5Text5') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('AxcryptBusinessBlock6Heading') }}</h1>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock6Text1') }}</p>
      <p
        :class="$mq"
        v-html="$t('AxcryptBusinessBlock6Text2', { url: '#/pricing' })"
      />
      <p :class="$mq">{{ $t('AxcryptBusinessBlock6Text3') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock6Text4') }}</p>
      <p :class="$mq">{{ $t('AxcryptBusinessBlock6Text5') }}</p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.no-description {
  padding-top: 0 !important;
}
</style>

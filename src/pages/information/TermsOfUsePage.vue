<template>
  <section :class="['text-view-wrapper', $mq]">
    <p :class="['description', $mq]">{{ $t('TermsOfUseDescription') }}</p>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock1Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock1Text1') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock1Text2') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock1Text3') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock1Text4') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock2Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock2Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock3Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock3Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock4Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock4Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock5Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock5Text1') }}</p>
      <p
        :class="$mq"
        v-html="$t('TermsOfUseBlock5Text2', { url: '#/pricing' })"
      />
      <p :class="$mq">{{ $t('TermsOfUseBlock5Text3') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock5Text4') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock6Heading') }}</h1>
      <p
        :class="$mq"
        v-html="$t('TermsOfUseBlock6Text1', { url: '#/pricing' })"
      />
      <p :class="$mq">{{ $t('TermsOfUseBlock6Text2') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock6Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock7Heading') }}</h1>
      <p
        :class="$mq"
        v-html="
          $t('TermsOfUseBlock7Text1', {
            url: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
          })
        "
      />
      <p :class="$mq">{{ $t('TermsOfUseBlock7Text2') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock8Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock8Text1') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock8Text2') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock9Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock9Text1') }}</p>
      <p
        :class="$mq"
        v-html="
          $t('TermsOfUseBlock9Text2', { url: '#/information/privacy-policy' })
        "
      />
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock10Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock10Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock11Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock11Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock12Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock12Text1') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock12Text2') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock12Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock13Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock13Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock14Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock14Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock15Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock15Text1') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock15Text2') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock16Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock16Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock17Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock17Text1') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock17Text2') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock17Text3') }}</p>
      <p
        :class="$mq"
        v-html="
          $t('TermsOfUseBlock17Text4', {
            mailUrl: 'mailto:support@axcrypt.net',
            techUrl: '#/information/technical-details',
            securityUrl: '#/information/security',
          })
        "
      />
      <p :class="$mq">{{ $t('TermsOfUseBlock17Text5') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock17Text6') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock17Text7') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TermsOfUseBlock18Heading') }}</h1>
      <p :class="$mq">{{ $t('TermsOfUseBlock18Text1') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock18Text2') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock18Text3') }}</p>
      <p :class="$mq">{{ $t('TermsOfUseBlock18Text4') }}</p>
    </article>
  </section>
</template>

<script>
export default {
  
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>
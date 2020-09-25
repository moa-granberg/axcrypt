<template>
  <section :class="['text-view-wrapper', $mq]">
    <article :class="['no-description', $mq]">
      <h1 :class="$mq">{{ $t('GdprBlock1Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock1Text1') }}</p>
      <p :class="$mq">{{ $t('GdprBlock1Text2') }}</p>
      <p :class="$mq">{{ $t('GdprBlock1Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock2Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock2Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock3Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock3Text1') }}</p>
      <p :class="$mq">{{ $t('GdprBlock3Text2') }}</p>
      <p :class="$mq">{{ $t('GdprBlock3Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock4Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock4Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock5Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock5Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock6Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock6Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock7Heading') }}</h1>
      <p :class="$mq" v-html="$t('GdprBlock7Text1')" />
      <p :class="$mq">{{ $t('GdprBlock7Text2') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock8Heading') }}</h1>
      <p :class="$mq">{{ $t('GdprBlock8Text1') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('GdprBlock9Heading') }}</h1>
      <a
        href="http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&amp;toc=OJ:L:2016:119:TOC"
        :class="$mq"
        >{{ $t('GdprBlock9LinkLabel1') }}</a
      >
      <a href="http://www.eugdpr.org/" :class="$mq">{{
        $t('GdprBlock9LinkLabel2')
      }}</a>
      <a href="https://www.eugdpr.org/article-summaries.html" :class="$mq">{{
        $t('GdprBlock9LinkLabel3')
      }}</a>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.no-description {
  padding-top: 0 !important;
}
</style>

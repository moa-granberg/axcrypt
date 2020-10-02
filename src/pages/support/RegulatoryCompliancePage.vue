<template>
  <section :class="['text-view-wrapper', $mq]">
    <article :class="['no-description', $mq]">
      <h1 :class="$mq">{{ $t('RegulatoryComplianceBlock1Heading') }}</h1>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock1Text1') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock1Text2') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock1Text3') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock1Text4') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock1Text5') }}</p>
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
    <article :class="$mq">
      <h1 :class="$mq">{{ $t('RegulatoryComplianceBlock2Heading') }}</h1>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock2Text1') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock2Text2') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock2Text3') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock2Text4') }}</p>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock2Text5') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('RegulatoryComplianceBlock2ListItem1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('RegulatoryComplianceBlock2ListItem2') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('RegulatoryComplianceBlock2ListItem3') }}</p>
        </li>
      </ul>
      <p :class="$mq">{{ $t('RegulatoryComplianceBlock2Text6') }}</p>
    </article>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.no-description {
  padding-top: 0 !important;
}
</style>

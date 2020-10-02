<template>
  <section :class="['text-view-wrapper', $mq]">
    <p :class="['description', $mq]">
      {{ $t('SecurityDescriptionText') }}
    </p>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock1Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock1Text') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock2Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock2Text') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock3Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock3Text1') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock3Text2') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock3ListItem1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock3ListItem2') }}</p>
        </li>
      </ul>
      <p :class="$mq">{{ $t('SecurityBlock3Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock4Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock4Text1') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock4Text2') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List1Item1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List1Item2') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List1Item3') }}</p>
        </li>
      </ul>
      <p :class="$mq">{{ $t('SecurityBlock4Text3') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List2Item1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List2Item2') }}</p>
        </li>
      </ul>
      <p :class="$mq">{{ $t('SecurityBlock4Text4') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List3Item1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock4List3Item2') }}</p>
        </li>
      </ul>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock5Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock5Text1') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock5Text2') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock5Text3') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock6Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock6Text1') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text2') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text3') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text4') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text5') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text6') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text7') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock6Text8') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('SecurityBlock7Heading') }}</h1>
      <p :class="$mq">{{ $t('SecurityBlock7Text1') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock7Text2') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock7Text3') }}</p>
      <p :class="$mq">{{ $t('SecurityBlock7Text4') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock7ListItem1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock7ListItem2') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('SecurityBlock7ListItem3') }}</p>
        </li>
      </ul>
      <p :class="$mq">{{ $t('SecurityBlock7Text5') }}</p>
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
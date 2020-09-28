<template>
  <section :class="['text-view-wrapper', $mq]">
    <p :class="['description', $mq]">{{ $t('PrivacyPolicyDescription') }}</p>

    <article :class="$mq">
      <p :class="$mq" v-html="$t('PrivacyPolicyBlock1Text1')" />
      <p :class="$mq">{{ $t('PrivacyPolicyBlock1Text2') }}</p>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock1Text3') }}</p>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock1Text4') }}</p>

      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List1Item1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List1Item2') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List1Item3') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List1Item4') }}</p>
        </li>
      </ul>

      <p :class="$mq">{{ $t('PrivacyPolicyBlock1Text5') }}</p>

      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List2Item1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List2Item2') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List2Item3') }}</p>
        </li>
      </ul>

      <p :class="$mq">{{ $t('PrivacyPolicyBlock1Text6') }}</p>

      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List3Item1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock1List3Item2') }}</p>
        </li>
      </ul>

      <p :class="$mq">{{ $t('PrivacyPolicyBlock1Text7') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('BusinessLinkLabel') }}</h1>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock2Text1') }}</p>
      <ul :class="$mq">
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock2ListItem1') }}</p>
        </li>
        <li :class="$mq">
          <p :class="$mq">{{ $t('PrivacyPolicyBlock2ListItem2') }}</p>
        </li>
      </ul>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock2Text2') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('BusinessLinkLabel') }}</h1>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock3Text1') }}</p>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock3Text2') }}</p>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock3Text3') }}</p>
      <p :class="$mq">{{ $t('PrivacyPolicyBlock3Text4') }}</p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('PrivacyPolicyBlock4Heading') }}</h1>
      <p :class="$mq" v-html="$t('PrivacyPolicyBlock4Text1')" />
      <p :class="$mq" v-html="$t('PrivacyPolicyBlock4Text2')" />
    </article>
  </section>
</template>

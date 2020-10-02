<template>
  <section :class="['text-view-wrapper', $mq]">
    <p :class="['description', $mq]">
      {{ $t('TechnicalDetailsDescription') }}
    </p>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TechnicalDetailsV2PDFLinkLabel') }} (PDF)</h1>
      <a :class="$mq" href="https://www.axcrypt.net/downloads/3432/">{{
        $t('TechnicalDetailsV1PDFLinkLabel')
      }}</a>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">{{ $t('TechnicalDetailsV2PDFLinkLabel') }} (PDF)</h1>
      <a :class="$mq" href="https://www.axcrypt.net/downloads/3871/">{{
        $t('TechnicalDetailsV1PDFLinkLabel')
      }}</a>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">
        {{ $t('TechnicalDetailsSourceCodeHeading') }}
      </h1>
      <p
        :class="$mq"
        v-html="
          $t('TechnicalDetailsSourceCodeText', {
            url: 'mailto:support@axcrypt.net',
          })
        "
      ></p>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">
        {{ $t('TechnicalDetailsStoredOnServerHeading') }}
      </h1>
      <p :class="$mq">
        {{ $t('TechnicalDetailsStoredOnServerText1') }}
      </p>

      <ul :class="$mq">
        <li
          :class="$mq"
          v-for="phraseKey of storedOnServerList"
          :key="phraseKey"
        >
          <p :class="$mq">{{ $t(phraseKey) }}</p>
        </li>
      </ul>

      <p :class="$mq">
        {{ $t('TechnicalDetailsStoredOnServerText2') }}
      </p>
      <p
        :class="$mq"
        v-html="
          $t('TechnicalDetailsStoredOnServerText3', {
            url: '#/information/privacy-policy/',
          })
        "
      ></p>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      storedOnServerList: [
        'TechnicalDetailsStoredOnServerListText1',
        'TechnicalDetailsStoredOnServerListText2',
        'TechnicalDetailsStoredOnServerListText3',
        'TechnicalDetailsStoredOnServerListText4',
        'TechnicalDetailsStoredOnServerListText5',
      ],
    };
  },
};
</script>

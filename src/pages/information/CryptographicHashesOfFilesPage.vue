<template>
  <section :class="['text-view-wrapper', $mq]">
    <article :class="$mq">
      <h1 :class="$mq">SSL Certificate SHA1 Thumbprints</h1>
      <p :class="$mq">{{ $t('CryptographicHashesOfFilesSLLText') }}</p>
      <div :class="$mq">
        <h2 :class="['crypto-subheading body-text-large', $mq]">
          www.axcrypt.net
        </h2>
        <p :class="$mq">
          2f fc 5c e8 c6 87 ff ae 23 18 6f 16 47 f9 ef a7 22 d7 0a 99
        </p>
        <p :class="$mq">
          Valid to: ‎Sunday, ‎November ‎26, ‎2017 1:59:59 AM UTC+2
        </p>
      </div>
      <div :class="$mq">
        <h2 :class="['crypto-subheading body-text-large', $mq]">
          account.axcrypt.net
        </h2>
        <p :class="$mq">
          8e 2e ab 61 83 6b 17 62 6b 94 1f ae b5 74 5c ce 95 db 78 aa
        </p>
        <p :class="$mq">
          Valid to: Monday, ‎November ‎26, ‎2018 1:59:59 AM UTC+2
        </p>
      </div>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">SHA256 File Hashes</h1>

      <p :class="$mq">
        {{ $t('CryptographicHashesOfFilesSHA256Text') }}
      </p>
      <div
        :class="['hash-wrapper', $mq]"
        v-for="item of fileHashList"
        :key="item.hash"
      >
        <h2 :class="['crypto-subheading body-text-large', $mq]">
          {{ item.name }}
        </h2>
        <p :class="['hash', $mq]">{{ item.hash }}</p>
      </div>
    </article>
  </section>
</template>

<script>
import fileHashList from '@/data/information/cryptographic-hashes-of-files/data';

export default {
  data() {
    return {
      fileHashList,
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.hash-wrapper {
  margin: 30px 0;
}

.crypto-subheading {
  font-weight: 400;
}

.hash {
  width: 80vw;
  word-wrap: break-word;
}
</style>

<template>
  <section :class="['text-view-wrapper', $mq]">
    <article :class="['info-block', $mq]">
      <h1 :class="$mq">
        {{ $t('PasswordGeneratorHeading') }}
      </h1>

      <p :class="$mq">
        {{ $t('PasswordGeneratorText1') }}
      </p>

      <p :class="$mq">
        {{ $t('PasswordGeneratorText2') }}
      </p>

      <button :class="['standard-button small', $mq]" @click="getNewPasswords">
        {{ $t('PasswordGeneratorButtonLabel') }}
      </button>
    </article>

    <article :class="$mq">
      <div :class="['label-input-wrapper', $mq]">
        <label :class="$mq" for="password-suggestion-strong">
          {{ $t('StrongPasswordLabel') }}
        </label>
        <input
          v-model="strong"
          :class="$mq"
          type="text"
          id="password-suggestion-strong"
        />
      </div>

      <div :class="['label-input-wrapper', $mq]">
        <label :class="$mq" for="password-suggestion-medium">{{
          $t('MediumPasswordLabel')
        }}</label>
        <input
          v-model="medium"
          :class="$mq"
          type="text"
          id="password-suggestion-medium"
        />
      </div>

      <div :class="['label-input-wrapper', $mq]">
        <label :class="$mq" for="password-suggestion-weak">{{
          $t('WeakPasswordLabel')
        }}</label>
        <input
          v-model="weak"
          :class="$mq"
          type="text"
          id="password-suggestion-weak"
        />
      </div>
    </article>

    <a href="https://account.axcrypt.net/Secrets/" target="_blank">
      {{ $t('PasswordGeneratorSavePasswordLinkLabel') }}
    </a>
  </section>
</template>

<script>
import { getPasswords } from '@/utils/password-generator/getPasswordSuggestions';

export default {
  data() {
    return {
      weak: '',
      medium: '',
      strong: '',
    };
  },

  methods: {
    async getNewPasswords() {
      const newPasswords = await getPasswords();

      this.weak = newPasswords.weak;
      this.medium = newPasswords.medium;
      this.strong = newPasswords.strong;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

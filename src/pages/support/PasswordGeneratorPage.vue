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

      <button
        :class="['standard-button small', $mq]"
        @click="getNewPasswords"
      >
        {{ $t('PasswordGeneratorButtonLabel') }}
      </button>
    </article>

    <article :class="['passwords-wrapper', $mq]">
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
      <p :class="$mq">{{ $t('PasswordGeneratorSavePasswordLinkLabel') }}</p>
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

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.text-view-wrapper {
  @include center-column;
}

.info-block {
  padding: 0 !important;
}

.passwords-wrapper {
  background-color: $green;
  width: 100%;
  border-radius: 5px;
  box-shadow: $standard-box-shadow;

  &.mobile {
    @include center-column;
    gap: 16px;
    padding: 24px 0;
  }

  &.desktop {
    @include center-row;
    justify-content: space-around;
    padding: 36px 0;
  }
}

.standard-button {
  margin: 24px auto;
  cursor: pointer;
  outline: none;
}

.label-input-wrapper {
  @include center-column;

  label {
    margin: 0 0 4px 0;
    text-shadow: $standard-text-shadow;
    color: $white;
  }

  input {
    border: none;
    border-radius: 2px;
    padding: 5px;

    &:focus {
      box-shadow: $standard-box-shadow;
    }
  }
}
</style>

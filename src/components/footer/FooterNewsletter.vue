<template>
  <section :class="'footer-newsletter-wrapper ' + $mq">
    <h6 :class="'footer-newsletter-heading ' + $mq">
      {{ $t('FooterNewsletterSignUpHeading') }}
    </h6>
    <div :class="'footer-newsletter-form ' + $mq">
      <input
        type="text"
        placeholder="email@example.com"
        v-model="userEmail"
        :class="'footer-newsletter-input ' + $mq"
      />
      <button :class="'footer-newsletter-button ' + $mq">
        <img src="@/assets/icons/mail_icon.svg" alt="Submit" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.footer-newsletter-wrapper {
  &.mobile {
    padding: 18px;
  }
  &.desktop {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}

.footer-newsletter-heading {
  &.mobile {
    margin: 0 0 14px 0;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }

  &.desktop {
    margin: 0 0 3px 0;
    font-size: 12px;
  }
}

.footer-newsletter-form {
  display: flex;
  align-items: center;

  &.mobile {
    margin: auto;
    position: relative;
    max-width: 400px;
  }

  &.desktop {
    margin: 0 0 8px 0;
  }
}

.footer-newsletter-input {
  width: 160px;
  height: 31px;
  padding: 0 0 0 8px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  color: $gray;

  &::placeholder {
    font-style: italic;
    opacity: 0.5;
  }

  &.mobile {
    width: 100%;
  }

  &.desktop {
    font-size: 10px;
  }
}

.footer-newsletter-button {
  height: 29px;
  width: 42px;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border: none;
  margin: 0 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $dark-green;

  &.mobile {
    position: absolute;
    right: 1px;
  }

  img {
    height: 16px;
  }
}
</style>

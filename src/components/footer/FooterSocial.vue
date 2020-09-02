<template>
  <section :class="'footer-social ' + $mq">
    <h6>{{$t('FooterSocialSignUpHeading')}}</h6>
    <div>
      <input type="text" v-model="userEmail">
      <button class="footer-social-newsletter-button">
        <img src="@/assets/icons/mail_icon.svg" alt="Submit">
      </button>
    </div>
    <div class="footer-social-socialmedia">
      <a href="https://facebook.com/axcrypt">
        <img src="@/assets/icons/facebook_icon.png" alt="Facebook">
      </a>
      <a href="https://twitter.com/axcrypt">
        <img src="@/assets/icons/twitter_icon.svg" alt="Twitter">
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="language-bar-wrapper">
    <img
      v-if="this.$mq === 'desktop'"
      @click="toggleLanguageSelector"
      :src="require(`@/assets/flags/${this.$i18n.locale}.png`)"
      alt="flag"
    />
    <div
      :class="
        showLanguageSelector ? 'show language-selector' : 'language-selector'
      "
    >
      <a
        v-for="lang of this.$i18n.availableLocales"
        :key="lang"
        @click="setCurrentLocale(lang)"
      >
        <img :src="require(`@/assets/flags/${lang}.png`)" :alt="lang" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLanguageSelector: false,
    };
  },
  methods: {
    toggleLanguageSelector() {
      if (this.$mq === 'desktop') {
        this.showLanguageSelector = !this.showLanguageSelector;
      }
    },
    setCurrentLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.language-bar-wrapper {
  border-bottom: 1px $light-gray solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  flex-wrap: wrap;
  position: relative;

  img {
    margin: 2.5px;
  }
}
@media (min-width: 950px) {
  .language-selector {
    display: none;
    position: absolute;
    top: 69px;
    margin-right: 3em;
    padding: 10px;
    border: 1px solid #efefef;
    background-color: rgba(255, 255, 255, 0.95);
  }
  .show {
    display: flex;
  }
}
</style>

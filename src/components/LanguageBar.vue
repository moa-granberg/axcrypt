<template>
  <article :class="'language-bar-wrapper ' + $mq">
    <img
      v-if="this.$mq === 'desktop'"
      @click="toggleLanguageSelector"
      :src="require(`@/assets/flags/${this.$i18n.locale}.png`)"
      alt="flag"
    />
    <div
      class="language-selector"
      :class="[{ show: showLanguageSelector }, $mq]"
    >
      <a
        :class="'language-selector-flag ' + $mq"
        v-for="lang of this.$i18n.availableLocales"
        :key="lang"
        @click="setCurrentLocale(lang)"
      >
        <img :src="require(`@/assets/flags/${lang}.png`)" :alt="lang" />
      </a>
    </div>
  </article>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;

  &.mobile {
    border-bottom: 1px $light-gray solid;
    flex-wrap: wrap;
  }

  &.desktop {
    position: relative;
  }

  img {
    margin: 2.5px;
  }
}

.language-selector {
  display: flex;
  justify-content: center;
  align-items: center;

  &.mobile {
    flex-direction: row;
  }

  &.desktop {
    display: none;
    position: absolute;
    top: 67px;
    margin-right: 3em;
    padding: 10px;
    border: 1px solid #efefef;
    background-color: rgba(255, 255, 255, 0.95);

    &.show {
      display: flex;
    }
  }
}

.language-selector-flag {
  display: flex;
  justify-content: center;
  align-items: center;

  &.mobile {
    flex-direction: row;
  }
}
</style>

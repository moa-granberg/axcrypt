<template>
  <li :class="'language-bar-wrapper ' + $mq">
    <img
      :class="['flag', $mq]"
      v-if="this.$mq === 'desktop'"
      @click="toggleLanguageSelector"
      :src="require(`@/assets/flags/${this.$i18n.locale}.svg`)"
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
        <img
          :class="['flag', $mq]"
          :src="require(`@/assets/flags/${lang}.svg`)"
          :alt="lang"
        />
      </a>
    </div>
  </li>
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
      this.showLanguageSelector = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.language-bar-wrapper {
  @include center-row;
  padding: 15px 25px;

  &.mobile {
    border-bottom: 1px $light-gray solid;
    flex-wrap: wrap;
  }

  &.desktop {
    position: relative;
    height: $header-height;
    box-sizing: border-box;
  }

  img {
    margin: 2.5px;
  }
}

.language-selector {
  @include center-row;

  &.mobile {
    flex-direction: row;
  }

  &.desktop {
    display: none;
    position: absolute;
    top: $header-height;
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
  @include center-row;
}

.flag {
  height: 1rem;
}
</style>

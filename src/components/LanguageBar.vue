<template>
  <div class="language-bar-wrapper">
    <img
      v-if="this.$mq === 'desktop'"
      @click="toggleLanguageSelector"
      src="../assets/us.png"
      alt="flag"
    />
    <div
      :class="
        showLanguageSelector ? 'show language-selector' : 'language-selector'
      "
    >
      <img src="../assets/us.png" alt="flag" />
      <img src="../assets/de.png" alt="flag" />
      <img src="../assets/us.png" alt="flag" />
      <img src="../assets/de.png" alt="flag" />
      <img src="../assets/us.png" alt="flag" />
      <img src="../assets/de.png" alt="flag" />
      <img src="../assets/us.png" alt="flag" />
      <img src="../assets/de.png" alt="flag" />
      <img src="../assets/us.png" alt="flag" />
      <img src="../assets/de.png" alt="flag" />
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
    margin-right: 207px;
    padding: 10px;
    border: 1px solid #efefef;
    background-color: rgba(255, 255, 255, 0.95);
  }
  .show {
    display: flex;
  }
}
</style>

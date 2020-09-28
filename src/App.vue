<template>
  <div id="app">
    <header-comp />
    <router-view />
    <footer-comp />
    <fixed-side-button />
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp';
import FooterComp from './components/footer/FooterComp';
import FixedSideButton from './components/FixedSideButton';

export default {
  name: 'App',
  components: {
    FixedSideButton,
    HeaderComp,
    FooterComp,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
@import './scss/variables.scss';
@import './scss/fonts.scss';
@import './scss/viewWithSidemenu.scss';
@import './scss/text-view.scss';

body {
  font-family: $standard-font;
  color: $gray;
  @include no-margin-padding;
}
</style>

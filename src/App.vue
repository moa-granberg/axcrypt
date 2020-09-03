<template>
  <div id="app">
    <header-comp />
    <router-view />
    <footer-comp />
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp';
import FooterComp from './components/footer/FooterComp';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
@import './scss/variables.scss';

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  color: $gray;
}
</style>

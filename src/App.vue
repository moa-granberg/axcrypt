<template>
  <div id="app">
    <header-comp />
    <router-view />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp';
export default {
  name: 'App',
  components: { HeaderComp },
};
</script>

<style></style>

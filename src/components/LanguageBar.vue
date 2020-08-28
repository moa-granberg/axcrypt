<template>
  <div class="language-bar-wrapper">
    <img src="../assets/de.png" alt="flag" />
    <img src="../assets/de.png" alt="flag" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.language-bar-wrapper {
  border-bottom: 1px $light-gray solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;

  img {
    margin: 0 2.5px;
  }
}
</style>

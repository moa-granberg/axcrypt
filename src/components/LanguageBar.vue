<template>
  <div class="language-bar-wrapper">
    <mq-layout mq="mobile">
      <img src="../assets/us.png" alt="flag" />
      <img src="../assets/de.png" alt="flag" />
    </mq-layout>
    <mq-layout mq="desktop">
      <img src="../assets/us.png" alt="flag" />
    </mq-layout>
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
  flex-wrap: wrap;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: 2.5px;
  }
}
</style>

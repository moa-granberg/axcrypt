<template>
  <section>
    <get-started-instruction-block :data="installingAxcryptData" />
    <get-started-instruction-block :data="howToUseData" :reverse="true" />
    <get-started-instruction-block :data="keySharingData" />
    <get-started-instruction-block
      :data="passwordManagementData"
      :reverse="true"
    />
  </section>
</template>

<script>
import GetStartedInstructionBlock from './GetStartedInstructionBlock';

export default {
  components: {
    GetStartedInstructionBlock,
  },

  data() {
    return {
      installingAxcryptData: {},
      howToUseData: {},
      keySharingData: {},
      passwordManagementData: {},
    };
  },

  methods: {
    async getInstructionsData() {
      const data = await (
        await import('@/data/information/get-started/instructions-windows.json')
      ).default;

      this.installingAxcryptData = data.installingAxcrypt;
      this.howToUseData = data.howToUse;
      this.keySharingData = data.keySharing;
      this.passwordManagementData = data.passwordManagement;
    },
  },

  created() {
    this.getInstructionsData();
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

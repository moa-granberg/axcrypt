<template>
  <section>
    <get-started-instruction-block :data="installingAxcryptData" />

    <article :class="['information-note-wrapper', $mq]">
      <h1 :class="['information-note-heading heading-small', $mq]">
        {{ $t(infoNoteData1.heading) }}
      </h1>
      <img
        :class="['information-note-img', $mq]"
        src="@/assets/view/get-started/information-note-img1.svg"
        alt=""
      />
      <ul :class="['information-note-list-wrapper', $mq]">
        <li
          :class="['information-note-list-item', $mq]"
          v-for="item of infoNoteData1.list"
          :key="item"
        >
          <p v-html="$t(item)" :class="['body-text', $mq]"></p>
        </li>
      </ul>
    </article>

    <get-started-instruction-block :data="howToUseData" :reverse="true" />
    <get-started-instruction-block :data="keySharingData" />
    <get-started-instruction-block
      :data="passwordManagementData"
      :reverse="true"
    />

    <article :class="['information-note-wrapper', $mq]">
      <h1 :class="['information-note-heading heading-small', $mq]">
        {{ $t(infoNoteData2.heading) }}
      </h1>
      <img
        :class="['information-note-img', $mq]"
        src="@/assets/view/get-started/information-note-img2.svg"
        alt=""
      />
      <p
        v-for="item of infoNoteData2.texts"
        :key="item"
        v-html="$t(item)"
        :class="['body-text', $mq]"
      ></p>
    </article>
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
      infoNoteData1: {
        heading: 'GetStartedInfoNote1Heading',
        list: [
          'GetStartedInfoNote1ListItem1',
          'GetStartedInfoNote1ListItem2',
          'GetStartedInfoNote1ListItem3',
        ],
      },
      infoNoteData2: {
        heading: 'SupportLinkLabel',
        texts: ['GetStartedInfoNote2Text1', 'GetStartedInfoNote2Text2'],
      },
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

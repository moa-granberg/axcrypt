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
      <div :class="['information-note-inner-wrapper', $mq]">
        <ul :class="['information-note-list-wrapper', $mq]">
          <li
            :class="['information-note-list-item', $mq]"
            v-for="item of infoNoteData1.list"
            :key="item"
          >
            <p v-html="$t(item)" :class="['body-text', $mq]"></p>
          </li>
        </ul>
      </div>
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
      <div :class="['information-note-inner-wrapper', $mq]">
        <p
          v-for="item of infoNoteData2.texts"
          :key="item"
          v-html="$t(item)"
          :class="['body-text', $mq]"
        ></p>
      </div>
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

.information-note-wrapper {
  display: grid;
  background-color: $dark-green;
  box-shadow: $standard-box-shadow;

  &.mobile {
    grid: auto 1fr / 2fr 1fr;
    grid-template-areas: 'heading img' 'content content';

    padding: 24px;
  }

  &.desktop {
    grid: auto 1fr / 1fr 1fr;
    grid-template-areas: 'img heading' 'img content';

    padding: 34px;
  }
}

.information-note-inner-wrapper {
  grid-area: content;

  background-color: $white;
  border-radius: 5px;
  padding: 20px;
  margin: 16px 0 0 0;
}

.information-note-heading {
  grid-area: heading;
  @include no-margin-padding;
  color: $white;
  font-weight: 400;
}

.information-note-img {
  grid-area: img;
  justify-self: center;

  &.mobile {
    width: 100px;
    margin: -56px 0 0 0;
  }

  &.desktop {
    align-self: center;
    width: 180px;
  }
}

.information-note-list-wrapper {
  @include no-margin-padding;
  list-style: none;
}

.information-note-list-item {
  @include list-bullet;
}
</style>

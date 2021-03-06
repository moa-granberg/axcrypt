<template>
  <section>
    <get-started-instruction-block :data="installingAxcryptData" />

    <article
      v-if="$route.params.platform === 'windows'"
      :class="['information-note-wrapper', $mq]"
    >
      <h1 :class="['information-note-heading heading-small', $mq]">
        {{ $t(infoNoteData1.heading) }}
      </h1>
      <img
        :class="['information-note-img', $mq]"
        src="@/assets/view/information/get-started/information-note-img1.svg"
        alt=""
      />
      <div :class="['information-note-inner-wrapper', $mq]">
        <ul :class="['information-note-list-wrapper', $mq]">
          <li
            :class="['information-note-list-item', $mq]"
            v-for="item of infoNoteData1.list"
            :key="item.phraseKey"
          >
            <p
              v-html="
                item.url ? $t(item.phraseKey, { url: item.url }) : $t(item)
              "
              :class="['body-text', $mq]"
            ></p>
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

    <article :class="['information-note-wrapper reverse', $mq]">
      <h1 :class="['information-note-heading heading-small', $mq]">
        {{ $t(infoNoteData2.heading) }}
      </h1>
      <img
        :class="['information-note-img', $mq]"
        src="@/assets/view/information/get-started/information-note-img2.svg"
        alt=""
      />
      <div :class="['information-note-inner-wrapper', $mq]">
        <p
          v-for="item of infoNoteData2.texts"
          :key="item.phraseKey"
          v-html="item.url ? $t(item.phraseKey, { url: item.url }) : $t(item)"
          :class="['body-text', $mq]"
        ></p>
      </div>
    </article>
  </section>
</template>

<script>
import GetStartedInstructionBlock from './GetStartedInstructionBlock';
import dataWindows from '@/data/information/get-started/instructions-windows';
import dataMac from '@/data/information/get-started/instructions-mac';

export default {
  components: {
    GetStartedInstructionBlock,
  },

  data() {
    return {
      infoNoteData1: {
        heading: 'GetStartedInfoNote1Heading',
        list: [
          {
            phraseKey: 'GetStartedInfoNote1ListItem1',
            url: 'https://account.axcrypt.net/Home/Register',
          },
          'GetStartedInfoNote1ListItem2',
          'GetStartedInfoNote1ListItem3',
        ],
      },
      infoNoteData2: {
        heading: 'SupportLinkLabel',
        texts: [
          { phraseKey: 'GetStartedInfoNote2Text1', url: '#/support/faq' },
          'GetStartedInfoNote2Text2',
        ],
      },
    };
  },

  computed: {
    installingAxcryptData() {
      return this.$route.params.platform === 'windows'
        ? dataWindows.installingAxcrypt
        : dataMac.installingAxcrypt;
    },

    howToUseData() {
      return this.$route.params.platform === 'windows'
        ? dataWindows.howToUse
        : dataMac.howToUse;
    },

    keySharingData() {
      return this.$route.params.platform === 'windows'
        ? dataWindows.keySharing
        : dataMac.keySharing;
    },

    passwordManagementData() {
      return this.$route.params.platform === 'windows'
        ? dataWindows.passwordManagement
        : dataMac.passwordManagement;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.information-note-wrapper {
  @include standard-padding;
  display: grid;
  background-color: $dark-green;
  box-shadow: $standard-box-shadow;

  &.mobile {
    grid: auto 1fr / 2fr 1fr;
    grid-template-areas: 'heading img' 'content content';
  }

  &.desktop {
    grid: auto 1fr / 1fr 1fr;
    grid-template-areas: 'img heading' 'img content';

    &.reverse {
      grid-template-areas: 'heading img' 'content img';
    }
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
    margin: -50px 0 0 0;
  }

  &.desktop {
    align-self: center;
    width: 280px;
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

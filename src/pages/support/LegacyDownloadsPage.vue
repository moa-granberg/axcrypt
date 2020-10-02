<template>
  <section :class="['text-view-wrapper', 'legacy-downloads-wrapper', $mq]">
    <div :class="['warning-wrapper', $mq]">
      <img src="@/assets/icons/report_problem.svg" alt="warning" />
      <p>{{ $t('LegacyDownloadsWarning') }}</p>
    </div>

    <primary-button
      :class="['legacy-downloads-button', $mq]"
      size="small"
      color="dark-green"
      phraseKey="DownloadAxcrypt2LinkLabel"
      path="/download"
    />

    <p v-html="$t('LegacyDownloadsDescription')" />

    <standard-table
      :headings="headings"
      :itemList="itemList"
      :class="['legacy-table', $mq]"
    />

    <article>
      <h1>{{ $t('LegacyDownloadsHowToVerifyHeading') }}</h1>
      <p
        v-html="
          $t('LegacyDownloadsHowToVerifyText', {
            url:
              'http://msdn.microsoft.com/en-us/library/ms537361(v=VS.85).aspx',
          })
        "
      />
    </article>
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';
import StandardTable from '@/components/StandardTable';

export default {
  components: {
    PrimaryButton,
    StandardTable,
  },

  data() {
    return {
      headings: [
        `${this.$t('OperatingSystemsLabel')}`,
        `${this.$t('DownloadLinkLabel')}`,
        `${this.$t('DescriptionLabel')}`,
      ],
      itemList: [
        [
          'Windows 32- and 64-bit',
          {
            string: 'AxCrypt-1.7.3233.0-Setup.zip',
            path: 'https://www.axcrypt.net/downloads/16356/',
          },
          'Executable AxCrypt 1.x: Current Setup. Vista or later',
        ],
        [
          'Windows 32- and 64-bit',
          {
            string: 'AxCrypt-1.7.3180.0-Setup.zip',
            path: 'https://www.axcrypt.net/downloads/16372/',
          },
          'Executable AxCrypt 1.x: Old Setup. Last version for XP',
        ],
        [
          'Windows 32-bit',
          {
            string: 'AxCrypt-1.6.4.4-Setup.zip',
            path: 'https://www.axcrypt.net/downloads/16388/',
          },
          'Executable AxCrypt 1.x: Very Old Full Setup. 95/98/ME/2000',
        ],
        [
          'Windows 32- and 64-bit',
          { string: 'AxCrypt2Go.zip', path: 'AxCrypt2Go.zip' },
          'Executable AxCrypt 1.x: Really Old Limited Portable',
        ],
        [
          'Windows 32- and 64-bit',
          { string: 'AxDecrypt.zip', path: 'AxDecrypt.zip' },
          'Executable AxCrypt 1.x: Really Old Limited Portable Decryption Only',
        ],
      ],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.legacy-downloads-wrapper {
  display: flex;
  flex-direction: column;
}

.warning-wrapper {
  display: flex;
  border: 1px solid $gray;
  border-radius: 5px;

  img {
    width: 32px;
    padding: 12px;
  }
}

.legacy-downloads-button {
  @include standard-margin;
  align-self: center;
  text-transform: uppercase;
}

.legacy-downloads-wrapper {
  .legacy-table {
    li {
      justify-items: flex-start;
      &.mobile {
        grid: 1fr / 1fr 1fr 2fr;
        gap: 2px;
      }

      &.desktop {
        grid: 1fr / 1fr 1fr 1fr;
      }
    }
  }
}
</style>

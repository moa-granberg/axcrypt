<template>
  <section>this is legacy downloads</section>
</template>

<script>
export default {};
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
};
</script>

<style></style>

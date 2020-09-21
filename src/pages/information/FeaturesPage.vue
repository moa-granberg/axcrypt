<template>
  <section>
    <article :class="['features-wrapper', $mq]">
      <h1 :class="['features-heading', $mq]">
        {{ $t('FeaturesLinkLabel') }}
      </h1>
      <div
        :class="['features-item-wrapper', $mq]"
        v-for="item of featureList"
        :key="item.src"
      >
        <img
          :class="['features-item-img', $mq]"
          :src="require(`@/assets/view/information/${item.src}`)"
          :alt="item.src.split('.png')[0]"
        />
        <h2 :class="['features-item-heading', $mq]">
          {{ $t(item.headingPhraseKey) }}
        </h2>
        <p :class="['features-item-text', $mq]">
          {{ $t(item.textPhraseKey) }}
        </p>
      </div>
    </article>
    <article :class="['more-features-wrapper', $mq]">
      <h1 :class="['more-features-heading', $mq]">
        {{ $t('MoreFeaturesLabel') }}
      </h1>
      <div :class="['more-features-table-wrapper', $mq]">
        <div :class="['more-features-table-headings-wrapper', $mq]">
          <p :class="['more-features-table-heading', $mq]">
            {{ $t('FeatureLabel') }}
          </p>
          <p :class="['more-features-table-heading', $mq]">
            {{ $t('DescriptionLabel') }}
          </p>
        </div>
        <div
          :class="['more-features-item-wrapper', $mq]"
          v-for="item of moreFeaturesList"
          :key="item.featurePhraseKey"
        >
          <p :class="['more-features-item-label', $mq]">
            {{ $t(item.featurePhraseKey) }}
          </p>
          <p :class="['more-features-item-description', $mq]">
            {{ $t(item.descriptionPhraseKey) }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      featureList: [
        {
          src: 'shield-256.png',
          headingPhraseKey: 'HomeSellingPointStrongEncryptionHeading',
          textPhraseKey: 'FeaturesFeatureListItem1Text',
        },
        {
          src: '123-circle.png',
          headingPhraseKey: 'FeaturesFeatureListItem2Heading',
          textPhraseKey: 'FeaturesFeatureListItem2Text',
        },
        {
          src: 'cloud.png',
          headingPhraseKey: 'HomeSellingPointCloudStorageAwarenessHeading',
          textPhraseKey: 'FeaturesFeatureListItem3Text',
        },
        {
          src: 'spin-key.png',
          headingPhraseKey: 'HomeSellingPointCollaborationHeading',
          textPhraseKey: 'FeaturesFeatureListItem4Text',
        },
        {
          src: 'folder-key.png',
          headingPhraseKey: 'HomeSellingPointPasswordManagementHeading',
          textPhraseKey: 'FeaturesFeatureListItem5Text',
        },
        {
          src: 'folder-eye.png',
          headingPhraseKey: 'FeaturesFeatureListItem6Heading',
          textPhraseKey: 'FeaturesFeatureListItem6Text',
        },
        {
          src: 'globe.png',
          headingPhraseKey: 'HomeSellingPointMultilingualHeading',
          textPhraseKey: 'HomeSellingPointMultilingualBody',
        },
      ],

      moreFeaturesList: [
        {
          featurePhraseKey: 'LightweightLabel',
          descriptionPhraseKey: 'LightweightText',
        },
        {
          featurePhraseKey: 'EasyInstallationLabel',
          descriptionPhraseKey: 'EasyInstallationText',
        },
        {
          featurePhraseKey: 'FastDownloadLabel',
          descriptionPhraseKey: 'FastDownloadText',
        },
        {
          featurePhraseKey: 'ConvenientToUseLabel',
          descriptionPhraseKey: 'ConvenientToUseText',
        },
        {
          featurePhraseKey: 'WindowsCompatibleLabel',
          descriptionPhraseKey: 'WindowsCompatibleText',
        },
        {
          featurePhraseKey: 'MacOsCompatibleLabel',
          descriptionPhraseKey: 'MacOsCompatibleText',
        },
        {
          featurePhraseKey: 'MobileAppLabel',
          descriptionPhraseKey: 'MobileAppText',
        },
        {
          featurePhraseKey: 'StandardsBasedLabel',
          descriptionPhraseKey: 'StandardsBasedText',
        },
        {
          featurePhraseKey: 'DataIntegrityLabel',
          descriptionPhraseKey: 'DataIntegrityText',
        },
        {
          featurePhraseKey: 'AutomaticFileUpdatingLabel',
          descriptionPhraseKey: 'AutomaticFileUpdatingText',
        },
        {
          featurePhraseKey: 'LocalDeviceSecurityLabel',
          descriptionPhraseKey: 'LocalDeviceSecurityText',
        },
        {
          featurePhraseKey: 'LargeFileSupportLabel',
          descriptionPhraseKey: 'LargeFileSupportText',
        },
        {
          featurePhraseKey: 'MetadataRetentionLabel',
          descriptionPhraseKey: 'MetadataRetentionText',
        },
        {
          featurePhraseKey: 'FileWipeLabel',
          descriptionPhraseKey: 'FileWipeText',
        },
        {
          featurePhraseKey: 'BruteForceResistantLabel',
          descriptionPhraseKey: 'BruteForceResistantText',
        },
        {
          featurePhraseKey: 'ScriptingEnabledLabel',
          descriptionPhraseKey: 'ScriptingEnabledText',
        },
        {
          featurePhraseKey: 'OpenSourceLabel',
          descriptionPhraseKey: 'OpenSourceText',
        },
        {
          featurePhraseKey: 'SupportLinkLabel',
          descriptionPhraseKey: 'SupportText',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

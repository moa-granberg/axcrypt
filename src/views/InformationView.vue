<template>
  <main :class="`view-wrapper ${$mq}`">
    <article :class="`header ${$mq}`">
      <div :class="['header-inner-wrapper green', $mq]">
        <h1 :class="`heading ${$mq}`">
          {{ $t(getPageName) }}
        </h1>

        <primary-button
          v-if="$route.name === 'ResellerPage'"
          :class="['header-button', $mq]"
          size="extra-small"
          phraseKey="ApplyNowLabel"
          path="/information/reseller-application"
        />
      </div>
    </article>

    <section :class="`aside ${$mq}`">
      <side-menu
        v-if="$mq === 'desktop'"
        headingPhraseKey="InformationLinkLabel"
        :linkList="sideMenuLinks"
      />

      <router-view />
    </section>
  </main>
</template>

<script>
import SideMenu from '@/components/SideMenu';
import PrimaryButton from '@/components/PrimaryButton';
import data from '@/data/header/header-menu-links';

export default {
  components: {
    SideMenu,
    PrimaryButton,
  },

  computed: {
    getPageName() {
      return this.$route.name.split('Page').join('LinkLabel');
    },

    sideMenuLinks() {
      return data
        .find(item => item.path === '/information')
        .children.map(child => ({
          path: child.path,
          phraseKey: child.phraseKey,
        }));
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

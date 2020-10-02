<template>
  <main :class="`view-wrapper ${$mq}`">
    <article :class="`header ${$mq}`">
      <div :class="['header-inner-wrapper', $mq]">
        <h1 :class="`heading ${$mq}`">
          {{ $t(getPageName) }}
        </h1>
      </div>
    </article>

    <section :class="`aside ${$mq}`">
      <side-menu
        v-if="$mq === 'desktop'"
        headingPhraseKey="AboutUsLinkLabel"
        :linkList="sideMenuLinks"
      />

      <router-view />
    </section>
  </main>
</template>

<script>
import SideMenu from '@/components/SideMenu';
import data from '@/data/header/header-menu-links';

export default {
  components: {
    SideMenu,
  },

  computed: {
    getPageName() {
      return this.$route.name.split('Page').join('LinkLabel');
    },

    sideMenuLinks() {
      return data
        .find(item => item.path === '/support')
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

<template>
  <header :class="this.$mq === 'desktop' ? 'desktop-header' : ''">
    <div class="nav">
      <router-link to="/">
        <img class="logo" src="../assets/logos/axcrypt_text.png" alt="Logo" />
      </router-link>
      <hamburger-menu
        v-if="$mq === 'mobile'"
        v-on:toggle="toggleDropDownMenu"
      />
    </div>
    <div :class="navClass">
      <ul class="nav-links">
        <li v-for="link of headerLinks" :key="link.path">
          <router-link :to="link.path">
            {{ $t(link.phraseKey) }}
          </router-link>
          <div v-if="link.children" :class="nav-link-submenu">
            <li v-for="child of link.children" :key="child.path">
              <router-link :to="child.path">
                {{ $t(child.phraseKey)}}
              </router-link>
            </li>
          </div>
        </li>
        <language-bar />
      </ul>
    </div>
  </header>
</template>

<script>
import HamburgerMenu from './HamburgerMenu';
import LanguageBar from './LanguageBar';

export default {
  components: {
    HamburgerMenu,
    LanguageBar,
  },

  data() {
    return {
      showMobileMenu: false,
      headerLinks: [
        {
          path: '/download',
          phraseKey: 'DownloadLinkLabel',
        },
        {
          path: '',
          phraseKey: 'OurProductLinkLabel',
          children: [
            {
              path: '/business',
              phraseKey: 'BusinessLinkLabel',
            },
            {
              path: '/premium',
              phraseKey: 'PremiumLinkLabel',
            }
          ]
        },
        {
          path: '/pricing',
          phraseKey: 'PricingLinkLabel',
        },
        {
          path: '/information',
          phraseKey: 'InformationLinkLabel',
        },
        {
          path: '/support',
          phraseKey: 'SupportLinkLabel',
        },
        {
          path: '/about',
          phraseKey: 'AboutUsLinkLabel',
        },
        {
          path: '/sign-in',
          phraseKey: 'SignInLinkLabel',
        },
      ],
    };
  },

  computed: {
    navClass() {
      return this.$mq === 'desktop'
        ? 'desktop-menu'
        : this.showMobileMenu
        ? 'show drop-down-menu-mobile'
        : 'drop-down-menu-mobile';
    },
  },

  methods: {
    toggleDropDownMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.logo {
  width: 145px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 25px 20px;
  max-width: 767px;
  margin: auto;
  border-bottom: 1px $light-gray solid;
}

.drop-down-menu-mobile {
  margin-bottom: 10px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  max-height: 0;

  &.show {
    max-height: 600px;
  }
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
  padding: 15px 0;
    border-bottom: 1px $light-gray solid;
    position: relative;
    &:last-of-type > a {
      font-weight: 400;
    }
    a {
      padding: 0 25px;
      font-size: 13px;
      font-weight: 300;
      color: $light-green;
      text-decoration: none;
    }
  }
}

.desktop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1150px;

  .nav {
    border: none;
    margin: 0;
  }
}

.desktop-menu {
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-links {
    display: flex;
    li {
      padding: 15px;
      border: none;
      a {
        text-transform: uppercase;
        color: $gray;
      }
    }
  }
  .nav-link-submenu {
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    width: 200px;
    top: 69px;
    max-height: 0;
    transition: max-height 0.4s;
    &.show {
      max-height: unset;
    }
    li {
      border-bottom: 1px solid rgba(255,255,255,0.25);
      padding: 7px 15px;
      a {
        color: $white;
        font-weight: 300;
        font-size: 0.7em;
      }
    }
  }
  .language-bar-wrapper {
    border: none;
  }
}

</style>

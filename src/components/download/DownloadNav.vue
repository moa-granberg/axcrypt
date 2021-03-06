<template>
  <section :class="`download-nav-wrapper ${$mq}`">
    <ul :class="`download-nav-items-wrapper ${$mq}`">
      <li
        v-for="item of platforms"
        :key="item.name"
        :class="`download-nav-item ${$mq}`"
        @click="handleClick(item.name)"
      >
        <apple-icon
          v-if="item.name === 'macOS'"
          class="download-nav-item-svg"
          :class="[{ active: activePlatform === item.name }, $mq]"
        />
        <windows-icon
          v-if="item.name === 'Windows'"
          class="download-nav-item-svg"
          :class="[{ active: activePlatform === item.name }, $mq]"
        />
        <p
          class="download-nav-item-paragraph body-text-large"
          :class="[{ active: activePlatform === item.name }, $mq]"
        >
          {{ item.name }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import AppleIcon from './AppleIcon';
import WindowsIcon from './WindowsIcon';

export default {
  props: {
    activePlatform: String,
  },

  components: {
    AppleIcon,
    WindowsIcon,
  },

  data() {
    return {
      platforms: [
        { name: 'Windows', src: 'windows_logo.svg' },
        { name: 'macOS', src: 'apple_logo.svg' },
      ],
    };
  },

  methods: {
    handleClick(platform) {
      if (this.activePlatform !== platform) {
        this.$emit('switchPlatform', platform);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.download-nav-wrapper {
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: $standard-box-shadow;
  color: white;
  @include center-column;

  &.mobile {
    padding: $margin-mobile 0;
  }

  &.desktop {
    padding: $margin-desktop 0;
  }
}

.download-nav-items-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;

  &.mobile {
    margin: 15px;
  }

  &.desktop {
    margin: 20px 0;
  }
}

.download-nav-item {
  list-style: none;
  @include center-row;
  min-width: 80px;

  &.mobile {
    margin: 0 5px;
  }

  &.desktop {
    margin: 0 30px;
    cursor: pointer;
  }
}

.download-nav-item-svg {
  max-width: 15px;
  fill: white;

  &.active {
    fill: $light-green;
  }
}

.download-nav-item-paragraph {
  &.mobile {
    margin: 0 6px;
  }

  &.desktop {
    margin: 0 12px;
  }

  &.active {
    font-weight: 600;
    color: $light-green;
  }
}
</style>

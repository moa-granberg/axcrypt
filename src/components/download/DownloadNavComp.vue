<template>
  <section :class="`download-nav-wrapper ${$mq}`">
    <h1 :class="`download-nav-heading ${$mq}`">
      {{ $t('DownloadNavHeading') }}
    </h1>
    <ul :class="`download-nav-items-wrapper ${$mq}`">
      <li
        v-for="item of platforms"
        :key="item.name"
        :class="`download-nav-item ${$mq}`"
        @click="handleClick(item.name)"
      >
        <apple-icon-comp
          v-if="item.name === 'macOS'"
          class="download-nav-item-svg"
          :class="[{ active: activePlatform === item.name }, $mq]"
        />
        <windows-icon-comp
          v-if="item.name === 'Windows'"
          class="download-nav-item-svg"
          :class="[{ active: activePlatform === item.name }, $mq]"
        />
        <p
          class="download-nav-item-paragraph"
          :class="[{ active: activePlatform === item.name }, $mq]"
        >
          {{ item.name }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import AppleIconComp from './AppleIconComp';
import WindowsIconComp from './WindowsIconComp';

export default {
  props: {
    activePlatform: String,
  },

  components: {
    AppleIconComp,
    WindowsIconComp,
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
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0 0;
}

.download-nav-heading {
  font-size: 0.875rem;
  margin: 0;
}

.download-nav-items-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 15px;
}

.download-nav-item {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
    min-width: 80px;

}

.download-nav-item-svg {
  max-width: 15px;
  fill: white;

  &.active {
    fill: $light-green;
  }
}

.download-nav-item-paragraph {
  font-size: 0.75rem;
  margin: 0 6px;

  &.active {
    font-weight: 600;
    color: $light-green;
  }
}
</style>

<template>
  <main>
    <home-hero />
    <home-why-choose-axcrypt />
    <home-get-started />
    <home-what-others-say />
  </main>
</template>

<script>
import HomeHero from '@/components/home/HomeHero';
import HomeWhyChooseAxcrypt from '@/components/home/HomeWhyChooseAxcrypt';
import HomeGetStarted from '@/components/home/HomeGetStarted';
import HomeWhatOthersSay from '@/components/home/HomeWhatOthersSay';

export default {
  components: {
    HomeHero,
    HomeWhyChooseAxcrypt,
    HomeGetStarted,
    HomeWhatOthersSay,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

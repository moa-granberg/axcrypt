<template>
  <main>
    <home-hero-comp />
    <home-why-choose-axcrypt-comp />
    <home-get-started-comp />
    <home-what-others-say-comp />
  </main>
</template>

<script>
import HomeHeroComp from '@/components/home/HomeHeroComp';
import HomeWhyChooseAxcryptComp from '@/components/home/HomeWhyChooseAxcryptComp';
import HomeGetStartedComp from '@/components/home/HomeGetStartedComp';
import HomeWhatOthersSayComp from '@/components/home/HomeWhatOthersSayComp';

export default {
  components: {
    HomeHeroComp,
    HomeWhyChooseAxcryptComp,
    HomeGetStartedComp,
    HomeWhatOthersSayComp,
  },
};
</script>

<style lang="scss" scoped></style>

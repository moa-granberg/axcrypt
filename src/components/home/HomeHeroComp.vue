<template>
  <section :class="`home-hero-wrapper ${$mq}`">
    <div :class="`home-hero-review-wrapper`">
      <h1 :class="`home-hero-heading ${$mq}`">
        {{$t('HomeHeroHeading')}}
      </h1>
      <h2 :class="`home-hero-subheading ${$mq}`">
        {{$t('HomeHeroSubheading')}}
      </h2>
      <h3 :class="`home-hero-under-subheading ${$mq}`">
        {{$t('HomeHeroUnderSubheading')}}
      </h3>
    </div>
    <div :class="`home-hero-try-links-wrapper ${$mq}`">
      <router-link to="/premium-trial" :class="`home-hero-try-premium-wrapper home-hero-try-wrapper ${$mq}`">
        <h1 :class="`home-hero-try-preheading ${$mq}`">
          {{$t('HomeHeroTryPremiumPreHeading')}}
        </h1>
        <h2 :class="`home-hero-try-heading ${$mq}`">{{$t('HomeHeroTryPremiumHeading')}}</h2>
      </router-link>
      <router-link to="/business-trial" :class="`home-hero-try-business-wrapper home-hero-try-wrapper ${$mq}`">
        <h1 :class="`home-hero-try-preheading ${$mq}`">{{$t('HomeHeroTryBusinessPreHeading')}}</h1>
        <h2 :class="`home-hero-try-heading ${$mq}`">{{$t('HomeHeroTryBusinessHeading')}}</h2>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-hero-wrapper {
  display: grid;
  grid: 2fr 1fr / 1fr;
  height: 400px;
  background-image: url('~@/assets/view/home/home-hero-mobile.png');
  background-position: bottom;
  color: $white;
  text-align: center;
}

.home-hero-review-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.home-hero-heading {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 10px 0;
}

.home-hero-subheading {
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0 0 10px 0;
}

.home-hero-under-subheading {
  font-size: 0.75rem;
  margin: 0 0 17px 0;
}

.home-hero-try-links-wrapper {
  display: flex;
}

.home-hero-try-wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: $white;
}

.home-hero-try-premium-wrapper {
  background-color: rgba(72,119,44,0.7);
}

.home-hero-try-business-wrapper {
  background-color: rgba(0,0,0,0.7);
}

.home-hero-try-preheading {
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0 0 10px 0;
}

.home-hero-try-heading {
  font-size: 1.125rem;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
}


</style>

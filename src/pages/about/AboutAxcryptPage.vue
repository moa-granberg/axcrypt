<template>
  <section :class="['about-axcrypt-wrapper', $mq]">
    <article :class="['history-wrapper', $mq]">
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText1') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText2') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText3') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText4') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText5') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText6') }}</p>
    </article>

    <article :class="['vision-wrapper', $mq]">
      <h1 :class="['about-axcrypt-heading heading-large', $mq]">
        {{ $t('OurVisionLabel') }}
      </h1>
      <div :class="['vision-item', $mq]">
        <img src="@/assets/icons/secure_cloud.png" alt="secure" />
        <div :class="['vision-text-wrapper', $mq]">
          <h2 :class="['about-axcrypt-subheading heading-medium', $mq]">
            {{ $t('SecurityLinkLabel') }}
          </h2>
          <p :class="['body-text', $mq]">
            {{ $t('AboutAxcryptVisionSecurityText') }}
          </p>
        </div>
      </div>

      <div :class="['vision-item', $mq]">
        <img src="@/assets/icons/chain.png" alt="reliable" />
        <div :class="['vision-text-wrapper', $mq]">
          <h2 :class="['about-axcrypt-subheading heading-medium', $mq]">
            {{ $t('ReliabilityLabel') }}
          </h2>
          <p :class="['body-text', $mq]">
            {{ $t('AboutAxcryptVisionReliabilityText') }}
          </p>
        </div>
      </div>

      <div :class="['vision-item', $mq]">
        <img src="@/assets/icons/mouse.png" alt="simple" />
        <div :class="['vision-text-wrapper', $mq]">
          <h2 :class="['about-axcrypt-subheading heading-medium', $mq]">
            {{ $t('SimplicityLabel') }}
          </h2>
          <p :class="['body-text', $mq]">
            {{ $t('AboutAxcryptVisionSimplicityText') }}
          </p>
        </div>
      </div>
    </article>

    <article :class="['info-wrapper', $mq]">
      <article :class="['our-team-wrapper', $mq]">
        <h1 :class="['about-axcrypt-heading heading-large', $mq]">
          {{ $t('OurTeamLabel') }}
        </h1>
        <div :class="['business-cards-wrapper', $mq]">
          <business-card
            :class="['business-card', $mq]"
            v-for="person of ourTeam"
            :key="person.name"
            :person="person"
          />
        </div>
      </article>

      <article :class="['partner-wrapper', $mq]">
        <h1 :class="['about-axcrypt-heading heading-large', $mq]">
          {{ $t('PartnerLabel') }}
        </h1>
        <p :class="['body-text', $mq]">
          {{ $t('AboutPartnerSting') }}
        </p>
        <a href="http://www.stockholminnovation.com/">
          <img src="@/assets/logos/sting.jpg" alt="sting" />
        </a>
      </article>

      <article :class="['company-info-wrapper', $mq]">
        <h1 :class="['about-axcrypt-heading heading-large', $mq]">
          {{ $t('CompanyInfoLabel') }}
        </h1>

        <div>
          <p :class="['body-text', $mq]">
            {{ $t('EmailLabel') }}:
            <a href="mailto:info@axcrypt.net">info@axcrypt.net</a>
          </p>
          <p :class="['body-text', $mq]">
            {{ $t('OrgNumberLabel') }}: 556967-6181
          </p>
          <p :class="['body-text', $mq]">
            {{ $t('TelLabel') }}: +46 (0)8 550 10 274
          </p>
        </div>

        <div>
          <h2 :class="['body-text about-axcrypt-minor-heading', $mq]">
            Stockholm
          </h2>
          <p :class="['body-text', $mq]">AxCrypt AB</p>
          <p :class="['body-text', $mq]">Birger Jarlsgatan 58</p>
          <p :class="['body-text', $mq]">114 29 Stockholm</p>
          <p :class="['body-text', $mq]">Sweden</p>
        </div>

        <div>
          <h2 :class="['body-text about-axcrypt-minor-heading', $mq]">
            Bangalore
          </h2>
          <p :class="['body-text', $mq]">AxCrypt Software Private Limited</p>
          <p :class="['body-text', $mq]">
            #131, SriKrupa, First Floor, 10th Cross
          </p>
          <p :class="['body-text', $mq]">CMH Road</p>
          <p :class="['body-text', $mq]">
            Indirangar, Bangalore, Karnataka 560038
          </p>
          <p :class="['body-text', $mq]">India</p>
        </div>
      </article>

      <article :class="['contact-wrapper', $mq]">
        <h1 :class="['about-axcrypt-heading heading-large', $mq]">
          {{ $t('ContactHeading') }}
        </h1>

        <h2 :class="['body-text about-axcrypt-minor-heading', $mq]">
          {{ $t('TechnicalSupportLabel') }}:
          <a href="mailto:support@axcrypt.net"> support@axcrypt.net </a>
        </h2>
        <h2 :class="['body-text about-axcrypt-minor-heading', $mq]">
          {{ $t('AxcryptBusinessLinkLabel') }}:
          <a href="mailto:business@axcrypt.net"> business@axcrypt.net </a>
        </h2>
        <h2 :class="['body-text about-axcrypt-minor-heading', $mq]">
          {{ $t('ResellingLabel') }}:
          <a href="mailto:reseller@axcrypt.net"> reseller@axcrypt.net </a>
        </h2>
        <h2 :class="['body-text about-axcrypt-minor-heading', $mq]">
          {{ $t('ReqruitmentLabel') }}:
          <a href="mailto:apply@axcrypt.net"> apply@axcrypt.net </a>
        </h2>
      </article>
    </article>
  </section>
</template>

<script>
import BusinessCard from '@/components/BusinessCard';

export default {
  components: {
    BusinessCard,
  },

  data() {
    return {
      ourTeam: [
        {
          name: 'Zebastian Victorin',
          src: '/team-photos/zebastian-150x150.png',
          jobTitle: 'CEO',
          email: 'zebastian.victorin@axcrypt.net',
        },
        {
          name: 'Måns Hansson',
          src: '/team-photos/mans-150x150.png',
          jobTitle: 'Creative Director',
          email: 'mans.hansson@axcrypt.net',
        },
        {
          name: 'Jonatan Pettersson',
          src: '/team-photos/jonatan-150x150.png',
          jobTitle: 'CTO',
          email: 'jonatan.pettersson@axcrypt.net',
        },
        {
          name: 'Angélique Huige',
          src: '/team-photos/angelique-150x150.png',
          jobTitle: 'Business Manager',
          email: 'angelique.huige@axcrypt.net',
        },
      ],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.about-axcrypt-wrapper {
  &.desktop {
    margin-top: $margin-top-aside-content;
  }
  > article {
    @include standard-padding;
  }
}

.about-axcrypt-heading {
  font-weight: 400;
  @include no-margin-padding;
}

.about-axcrypt-subheading {
  font-weight: 400;
  color: $green;
}

.about-axcrypt-minor-heading {
  font-weight: 600;
}

.history-wrapper {
  &.desktop {
    max-width: $max-content-width;
    margin: 0 auto $margin-desktop auto;
    column-count: 2;
  }

  p:first-of-type {
    margin-top: 0;
  }
}

.vision-wrapper {
  background-color: $light-gray;

  .about-axcrypt-heading {
    text-align: center;
  }

  &.desktop {
    div:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
}

.vision-item {
  @include center-row;

  &.mobile {
    gap: 14px;
    margin: 14px 0;

    img {
      width: 70px;
    }
  }

  &.desktop {
    gap: 50px;
    max-width: $max-text-width;
    margin: 24px auto;

    img {
      width: 150px;
    }
  }
}

.info-wrapper {
  &.mobile {
    > article {
      margin: 0 0 $margin-mobile * 2 0;

      &:last-of-type {
        margin: 0;
      }
    }
  }

  &.desktop {
    display: grid;
    grid: 2fr 1fr / 2fr 1fr;
    grid-auto-flow: column;
    gap: 20px;
  }
}

.business-cards-wrapper {
  &.desktop {
    margin: $margin-desktop 0;
    display: flex;
    flex-wrap: wrap;
    gap: $margin-desktop;
  }
}

.business-card {
  &.mobile {
    margin: $margin-mobile 0;
  }
}

.partner-wrapper {
  img {
    margin: 12px 0 0 0;
  }
}

.company-info-wrapper {
  p,
  h2 {
    @include no-margin-padding;
  }

  &.mobile {
    div {
      margin: $margin-mobile 0;
    }

    div:first-of-type {
      margin: 10px 0 0 0;
    }
  }

  &.desktop {
    div {
      margin: $margin-desktop 0;
    }
  }
}
</style>

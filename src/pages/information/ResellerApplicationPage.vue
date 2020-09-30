<template>
  <section :class="['reseller-application-wrapper', $mq]">
    <h1 :class="['reseller-application-heading heading-medium-green', $mq]">
      {{ $t('ResellerApplicationHeading') }}
    </h1>
    <p :class="['reseller-application-text body-text', $mq]">
      {{ $t('ResellerApplicationText') }}
    </p>

    <form
      v-if="data.length"
      :class="['form-wrapper', $mq]"
      v-on:submit.prevent="handleSubmit"
    >
      <article v-for="item of data" :key="item.id">
        <div
          :class="['input-wrapper', $mq]"
          v-if="item.type === 'text' || item.type === 'number'"
        >
          <label :for="item.id" :class="['body-text', $mq]">
            {{ $t(item.phraseKey) }}
          </label>
          <input
            :type="item.type"
            :id="item.id"
            v-model="response[item.id]"
            :class="[{ invalid: item.error }, $mq]"
            @blur="validate(item.id)"
          />
          <p v-if="item.error" :class="['error-msg body-text', $mq]">
            {{ $t(item.error) }}
          </p>
          <p v-else :class="['error-msg body-text', $mq]"></p>
        </div>

        <div :class="['input-wrapper', $mq]" v-if="item.type === 'select'">
          <label :for="item.id" :class="['body-text', $mq]">
            {{ $t(item.phraseKey) }}
          </label>
          <select
            :id="item.id"
            v-model="response[item.id]"
            :class="[{ invalid: item.error }, $mq]"
            @blur="validate(item.id)"
          >
            <option v-for="value of item.options" :key="value" :value="value">
              {{ value }}
            </option>
          </select>
          <p v-if="item.error" :class="['error-msg body-text', $mq]">
            {{ $t(item.error) }}
          </p>
          <p v-else :class="['error-msg body-text', $mq]"></p>
        </div>

        <div
          :class="['radio-button-input-wrapper', $mq]"
          v-if="item.type === 'radio'"
        >
          <label :class="['body-text', $mq]">{{ $t(item.phraseKey) }} </label>
          <div :class="['radio-buttons-wrapper', $mq]">
            <div
              v-for="button of item.radioButtons"
              :key="button.id"
              :class="['radio-button-wrapper', $mq]"
            >
              <input
                :type="item.type"
                v-model="response[item.id]"
                :value="button.value"
                :id="button.id"
              />
              <label :for="button.id" :class="['body-text', $mq]">
                {{ $t(button.phraseKey) }}
              </label>
            </div>
          </div>
        </div>

        <div :class="['input-wrapper', $mq]" v-if="item.type === 'textarea'">
          <label :for="item.id" :class="['body-text', $mq]">
            {{ $t(item.phraseKey) }}
          </label>
          <textarea
            :id="item.id"
            v-model="response[item.id]"
            :class="[$mq]"
            rows="5"
          />
        </div>
      </article>

      <vue-recaptcha
        :class="['recaptcha-wrapper', $mq]"
        @verify="handleVerify"
        sitekey="6Lchj88ZAAAAAAYuwcZHGwZ-izWcOq4_B7LHaOyI"
      >
        <p v-if="robotError" :class="['error-msg robot body-text', $mq]">
          {{ $t('ErrorConfirmNotRobot') }}
        </p>
      </vue-recaptcha>

      <input
        type="submit"
        :value="$t('SubmitLabel')"
        :class="['standard-button small', $mq]"
      />
    </form>
  </section>
</template>

<script>
import data from '@/data/information/reseller-application/form.json';
import VueRecaptcha from 'vue-recaptcha';
import { validate } from '@/utils/formValidation';

export default {
  components: {
    VueRecaptcha,
  },

  data() {
    return {
      data,
      response: {
        name: '',
        companyName: '',
        jobTitle: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        vat: '',
        numberOfEmployees: '',
        annualRevenue: '',
        servedCountries: '',
        primaryOffers: '',
        similarity: '',
        support: '',
        saleRepresentatives: '',
        expectedSales: '',
        otherInformation: '',
      },
      robot: false,
      robotError: false,
    };
  },

  methods: {
    handleSubmit() {
      this.data.forEach(input => {
        this.validate(input.id);
        if (input.error) {
          return;
        }
      });
      if (this.robot) {
        //send data
      } else {
        this.robotError = true;
      }
    },

    handleVerify(resp) {
      if (resp) {
        this.robot = true;
        this.robotError = false;
      }
    },

    validate(id) {
      this.data = validate(id, this.response, this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/form';

.reseller-application-wrapper {
  @include center-column;

  &.mobile {
    margin: auto;
  }

  &.desktop {
    margin: $margin-top-aside-content auto;
  }
}

.reseller-application-heading {
  &.mobile {
    margin: 18px 0 0 0;
  }
}

.reseller-application-text {
  @include standard-margin;
  margin-top: 0;
  text-align: center;
}
</style>

<template>
  <section :class="['reseller-application-wrapper', $mq]">
    <h1 :class="['reseller-application-heading heading-medium', $mq]">
      {{ $t('ResellerApplicationHeading') }}
    </h1>
    <p :class="['reseller-application-text body-text', $mq]">
      {{ $t('ResellerApplicationText') }}
    </p>

    <form
      v-if="data.length"
      :class="['reseller-application-form', $mq]"
      v-on:submit.prevent="handleSubmit"
    >
      <article v-for="item of data" :key="item.id">
        <div
          :class="['input-wrapper', $mq]"
          v-if="item.type === 'text' || item.type === 'number'"
        >
          <label :for="item.id" :class="['input-label body-text', $mq]">
            {{ $t(item.phraseKey) }}
          </label>
          <input
            type="text"
            :id="item.id"
            v-model="response[item.id]"
            :class="[{ invalid: item.error }, 'input', $mq]"
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
            :class="[{ invalid: item.error }, 'input', $mq]"
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
          <label :for="item.id" :class="['input-label body-text', $mq]">
            {{ $t(item.phraseKey) }}
          </label>
          <textarea
            :id="item.id"
            v-model="response[item.id]"
            :class="['input textarea', $mq]"
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
        :class="['submit-button standard-button small', $mq]"
      />
    </form>
  </section>
</template>

<script>
import data from '@/data/information/reseller-application/form.json';
import VueRecaptcha from 'vue-recaptcha';

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
      if (id !== 'otherInformation') {
        const error = !this.response[id]
          ? 'ErrorRequiredField'
          : id === 'email'
          ? this.validateEmail()
          : '';

        this.data = this.data.map(input =>
          input.id === id ? { ...input, error } : input
        );
      }
    },

    validateEmail() {
      const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.response.email).toLowerCase())
        ? ''
        : 'ErrorInvalidEmail';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/standardButton.scss';

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
  color: $green;
  font-weight: 400;

  &.desktop {
    margin: 0;
  }
}

.reseller-application-text {
  @include standard-margin;
  margin-top: 0;
  text-align: center;
}

.reseller-application-form {
  &.mobile {
    width: 90%;
  }

  &.desktop {
    width: 70%;
  }
}

.input {
  padding: 8px;
  font-size: 0.875rem;
  border-radius: 4px;
  border: 1px solid rgba($gray, 0.7);

  &:focus {
    box-shadow: $standard-box-shadow;
    border: 1px solid rgba($gray, 1);
    outline: none;
  }

  &.invalid {
    border: 1px solid #cb544c;
  }

  &.textarea {
    resize: none;
    margin: 0 0 8px 0;
  }
}

.error-msg {
  @include no-margin-padding;
  color: #cb544c;
  align-self: flex-end;

  &.mobile {
    height: 17px;
  }

  &.desktop {
    height: 19px;
  }

  &.robot {
    align-self: center;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 6px 0;
}

.radio-buttons-wrapper {
  display: flex;
}

.radio-button-wrapper {
  @include center-row;
  margin: 8px 12px;

  > input {
    margin: 0 8px;
  }
}

.recaptcha-wrapper {
  &.mobile {
    @include center-column;
  }
}

.submit-button {
  margin: 24px auto;
  text-transform: uppercase;
}
</style>

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
          :class="['text-input-wrapper', $mq]"
          v-if="item.type === 'text' || item.type === 'number'"
        >
          <label :for="item.id" :class="['body-text', $mq]">{{
            $t(item.phraseKey)
          }}</label>
          <input
            type="text"
            :id="item.id"
            v-model="response[item.id]"
            :class="['input', $mq]"
          />
        </div>

        <div
          :class="['select-input-wrapper', $mq]"
          v-if="item.type === 'select'"
        >
          <label :for="item.id" :class="['body-text', $mq]"
            >{{ $t(item.phraseKey) }}
          </label>
          <select
            :id="item.id"
            v-model="response[item.id]"
            :class="['input', $mq]"
          >
            <option v-for="value of item.options" :key="value" :value="value">
              {{ value }}
            </option>
          </select>
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
      </article>

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

export default {
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
    };
  },

  methods: {
    handleSubmit() {
      console.log(this.response);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/standardButton.scss';

.reseller-application-wrapper {
  @include center-column;
  padding: 24px;

  &.mobile {
    margin: auto;
  }
}

.reseller-application-heading {
  color: $green;
  font-weight: 400;
}

.reseller-application-text {
  text-align: center;
}

.reseller-application-form {
  width: 100%;
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
    border: 1px solid red;
  }
}

.text-input-wrapper,
.select-input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 24px 0;
}

.radio-buttons-wrapper {
  display: flex;
}

.radio-button-wrapper {
  margin: 8px 12px;

  > input {
    @include no-margin-padding;
  }
}

.submit-button {
  margin: auto;
  text-transform: uppercase;
}
</style>

<template>
  <section :class="['job-application-wrapper', $mq]">
    <article :class="['text-wrapper', $mq]">
      <h1 :class="['position-heading heading-jumbo', $mq]">
        {{ position.position }}
      </h1>
      <h2 :class="['position-heading heading-medium', $mq]">
        {{ position.location }}
      </h2>
      <p :class="['body-text', $mq]">
        Thank you for your interest in applying for a job at AxCrypt. Please
        take a minute to fill out the following form. After you have completed
        your application, we will contact you via email.
      </p>
    </article>

    <form
      v-if="data.length"
      :class="['form-wrapper job-application-form', $mq]"
      v-on:submit.prevent="handleSubmit"
    >
      <article v-for="item of data" :key="item.id">
        <div
          :class="['input-wrapper', $mq]"
          v-if="
            item.type === 'text' ||
            item.type === 'number' ||
            item.type === 'file'
          "
        >
          <label :for="item.id" :class="['body-text', $mq]">
            {{ item.text }}
          </label>
          <input
            :type="item.type"
            :id="item.id"
            v-model="response[item.id]"
            :class="[{ invalid: item.error }, $mq]"
            @blur="validate(item.id)"
            :accept="item.accept"
          />
          <p v-if="item.error" :class="['error-msg body-text', $mq]">
            {{ $t(item.error) }}
          </p>
          <p v-else :class="['error-msg body-text', $mq]"></p>
        </div>

        <div :class="['input-wrapper', $mq]" v-if="item.type === 'select'">
          <label :for="item.id" :class="['body-text', $mq]">
            {{ item.text }}
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
import VueRecaptcha from 'vue-recaptcha';
import jobPositions from '@/data/about/jobs/job-positions';
import data from '@/data/about/job-application/form';
import { validate } from '@/utils/formValidation';

export default {
  components: {
    VueRecaptcha,
  },

  data() {
    return {
      data,
      response: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: '',
        country: '',
      },
      robot: false,
      robotError: false,
    };
  },

  computed: {
    position() {
      return jobPositions.find(
        job => job.id === this.$route.path.split('/about/jobs/application/')[1]
      );
    },
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

.job-application-wrapper {
  &.mobile {
    @include center-column;
  }

  &.desktop {
    margin: $margin-top-aside-content 0 $margin-desktop 0;
  }
}

.text-wrapper {
  max-width: $max-text-width;

  &.mobile {
    margin: $margin-mobile;
  }
  
  &.desktop {
    margin: auto;
  }
}

.position-heading {
  @include no-margin-padding;
  text-align: center;
  color: $green;
  font-weight: 400;
}

.job-application-form {
  &.desktop {
    margin: $margin-desktop auto;
  }
}
</style>

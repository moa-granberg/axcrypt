<template>
  <ul :class="['standard-table-wrapper', $mq]">
    <li :class="['standard-table-header', $mq]">
      <h1
        v-for="item of headings"
        :key="item"
        :class="['standard-table-header-content body-text', $mq]"
      >
        {{ item }}
      </h1>
    </li>

    <li
      v-for="item of itemList"
      :key="item[0]"
      :class="['standard-table-item', $mq]"
    >
      <div
        v-for="(content, index) of item"
        :key="index"
        :class="[{ img: typeof content === 'boolean' }, $mq]"
      >
        <p
          v-if="typeof content === 'string'"
          :class="['standard-table-item-content body-text', $mq]"
        >
          {{ content }}
        </p>
        <img
          v-else-if="content"
          src="@/assets/icons/check.svg"
          alt="check"
          :class="['standard-table-item-content img', $mq]"
        />
        <img
          v-else
          src="@/assets/icons/cross.svg"
          alt="cross"
          :class="['standard-table-item-content img', $mq]"
        />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    headings: Array, // string[]
    itemList: Array, // ( string | boolean)[][]
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.standard-table-wrapper {
  padding: 0;
  list-style: none;

  > :nth-child(2n) {
    background-color: $light-gray;
  }

  &.mobile {
    margin: $margin-mobile 0;
  }

  &.desktop {
    margin: $margin-desktop 0;
  }
}

.standard-table-header,
.standard-table-item {
  display: grid;
  align-items: center;
  justify-items: center;

  :first-child {
    justify-self: flex-start;
  }

  &.mobile {
    grid: 1fr / 2fr 1fr 1fr;
  }

  &.desktop {
    grid: 1fr / 3fr 1fr 1fr;
  }
}

.standard-table-header {
  background-color: $dark-green;
  padding: 14px;
}

.standard-table-header-content {
  @include no-margin-padding;
  color: $white;
  font-weight: 400;
  text-align: center;
}

.standard-table-item {
  padding: 14px;

  &:hover {
    background-color: rgba($light-green, 0.3);
  }
}

.standard-table-item-content {
  margin: 0;

  &.img {
    @include center-row;

    &.mobile {
      height: 16px;
    }

    &.desktop {
      height: 20px;
    }
  }
}
</style>

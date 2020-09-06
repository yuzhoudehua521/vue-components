<template>
  <div class="wrapper" :class="{ error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <!-- template节省dom结点 -->
    <template v-if="error">
      <svg class="icon icon-style" aria-hidden="true">
        <use xlink:href="#icon-error" />
      </svg>
      <span class="errMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-block;
  margin-right: 0.5em;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    // 指定一个属性应从父元素继承它的值。
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-style {
    // fill是svg属性填充
    fill: $red;
  }
  .errMessage {
    color: $red;
  }
}
</style>

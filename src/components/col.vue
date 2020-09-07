<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    phone: {
      type: Object,
      validator,
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPC: {
      type: Object,
      validator,
    },
    PC: {
      type: Object,
      validator,
    },
    wide: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPC, PC, wide } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`col-phone-${phone.span}`] : []),
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPC ? [`col-narrowPC-${narrowPC.span}`] : []),
        ...(PC ? [`col-PC-${PC.span}`] : []),
        ...(wide ? [`col-wide-${wide.span}`] : []),
      ];
    },
    //属性跟着数据发生变化
    colStyle() {
      paddingLeft: this.gutter / 2 + "px";
      paddingRight: this.gutter / 2 + "px";
    },
  },
};
</script>

<style lang='scss' scoped>
.col {
  height: 100px;
  // width: 50%;
  border: 1px solid red;
  // 一个col为二十四分之一, 生成1-24个class, col-1,col-2......col-24
  $class: col-;
  @for $n from 1 through 24 {
    // col-1
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  //偏移
  $class: offset-;
  @for $n from 1 through 24 {
    // offset-1
    &.#{$class}#{$n} {
      margin-right: ($n / 24) * 100%;
    }
  }
  @media (max-width: 576px) {
    $class: col-phone-;
    @for $n from 1 through 24 {
      // col-1
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    //偏移
    $class: offset-phone-;
    @for $n from 1 through 24 {
      // offset-1
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      // col-1
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    //偏移
    $class: offset-ipad-;
    @for $n from 1 through 24 {
      // offset-1
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class: col-narrowPC-;
    @for $n from 1 through 24 {
      // col-1
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    //偏移
    $class: offset-narrowPC-;
    @for $n from 1 through 24 {
      // offset-1
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class: col-PC-;
    @for $n from 1 through 24 {
      // col-1
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    //偏移
    $class: offset-PC-;
    @for $n from 1 through 24 {
      // offset-1
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class: col-wide-;
    @for $n from 1 through 24 {
      // col-1
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    //偏移
    $class: offset-wide-;
    @for $n from 1 through 24 {
      // offset-1
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
}
</style>
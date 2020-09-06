<template>
  <button class="t-button" v-if="iconPosition === 'right'" @click="$emit('click')">
      <slot>{{bName}}</slot>
      <span :class="[iconfont, iname]"></span>
  </button>
  <button class="t-button" v-else @click="$emit('click')">
      <span :class="[iconfont, iname]"></span>
      <slot>{{bName}}</slot>
  </button>
</template>

<script>
export default {
    data() {
        return {
            name:[
                'icon-shezhi',
                'icon-zuo',
                'icon-you',
                'icon-xiazai',
                'icon-dianzan',
                'icon-xia'
            ],
            msg:[
                '设置','左','右','下载','点赞','下'
            ],
            bName:'',
            iconfont: 'iconfont',
            iname: ''
        }
    },
    mounted() {
        this.nameIS()      
    },
    props: {
        iconname: {
            type: String
        }, 
        iconPosition: {
            type: String,
            default: 'left'
        }
    },
    methods: {
        nameIS: function() {
            let num = 0;
            if(this.iconname) {
                if(this.name.indexOf(this.iconname) !== -1) {
                    this.iname = this.iconname
                    this.bName = this.msg[this.name.indexOf(this.iconname)]
                }
            }           
        },
        clickChildren() {
            console.log('孩子被调用了')
        }
    }

}
</script>

<style lang='scss'>
.t-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius); 
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
}
.iconfont {
    width: 1em;
    height: 1em;
  }
</style>
<template>
  <div id="app">
    <t-button></t-button>
  </div>
</template>

<script>
import TButton from './components/button'

export default {
  name: 'App',
  components: {
    TButton
  }
}
</script>

<style lang='scss'>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  :root {
      --button-height: 32px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --border-color: #999;
      --border-color-hover: #666;
      --font-size: 14px;            
      --color: #333;
  }
  #app {
      margin: 20px;
  }
  body {
      font-size: var(--font-size);
  }
</style>

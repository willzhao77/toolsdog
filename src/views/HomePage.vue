<template>
    <div>
        hello, This is toolsdog home page!
    </div>
    <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>
  <!-- 这里 -->
  <HelloWorld />
  <div>
    <icon-ep-alarm-clock class="" />
    <icon-raphael-bolt class="" />
    <icon-home-copy class=""/>
  </div>
</template>

<script setup>
const handleClickMini = () => {
  AMessage.info('hello isboyjc, click mini AButton!')
};
</script>

<style scoped>

</style>
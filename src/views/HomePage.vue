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
  <div>
    <button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
      Button
    </button>
    <button 
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      font="mono light"
      p="y-2 x-4"
      border="2 rounded blue-200"
    >
      Button
    </button>
    <button class="btn-style">
      Button
    </button>

  </div>
</template>

<script setup>
const handleClickMini = () => {
  AMessage.info('hello isboyjc, click mini AButton!')
}
</script>

<style scoped>
.btn-style{
  @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
  @apply hover:bg-blue-500;
  @apply dark:bg-blue-500 dark:hover:bg-blue-600;
}
</style>
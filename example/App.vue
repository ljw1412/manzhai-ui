<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html {
  background-color: var(--color-body-background);
  transition: var(--color-transition);
}
html,
body,
#app {
  height: 100%;
}

* {
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

*:not(::before):not(::after) {
  color: var(--color-text-primary);
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  &-corner {
    background-color: transparent;
  }
  // 滚动条上的滚动滑块
  &-thumb {
    background-color: var(--color-primary);
  }
}
</style>

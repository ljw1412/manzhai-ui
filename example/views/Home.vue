<template>
  <div class="home">
    <router-link :to="{name:'pageComponent'}">组件</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
</style>

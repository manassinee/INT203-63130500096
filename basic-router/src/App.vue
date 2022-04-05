<script setup>
import { ref } from 'vue'
const unKnowImg = ref('/images/dynamic.png')
</script>

<template>
  <div>
    <h2>My dynamic image</h2>
    <img :src="unKnowImg">
    <div>
      <router-link :to="{ name: 'Home'}">Home</router-link>
      <router-link :to="{ name: 'MyPortfolio' }">My Portfolio</router-link>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<style>
a {
  color: blue;
}
.router-link-active{
  color: red;
}
</style>

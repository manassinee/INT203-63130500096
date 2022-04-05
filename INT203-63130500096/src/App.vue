<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <div>
      <router-link :to="{name: 'StoryWriter63130500096'}">StoryWriter</router-link>
      <router-link :to="{name: 'About63130500096'}">AboutMe</router-link>
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

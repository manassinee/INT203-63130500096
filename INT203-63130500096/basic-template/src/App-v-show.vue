<script setup>
const isSearch = true
const yourName = 'Manassinee'
</script>

<template>
  <div v-show="isSearch">
    <label for="search">Search</label>
    <input type="text" id="search" class="border" />
    <p v-show="yourName">Hello, {{ yourName }}</p>
  </div>
</template>

<style>

</style>
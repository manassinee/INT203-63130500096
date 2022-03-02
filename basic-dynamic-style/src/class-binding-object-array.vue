<script setup>
const isSucceed = false
</script>

<template>
  <!-- class attribute with object syntax -->
  <p :class="{ 'success-text': isSucceed, 'decor-text': isSucceed }">
    this is class binding with object syntax
  </p>
  <!-- class attribute with array syntax -->
  <p :class="['error-text', isSucceed ? 'decor-text' : '']">
    this class binding with array syntax
  </p>
</template>

<style>
.success-text {
  color: green;
}
.error-text {
  color: red;
}
.decor-text {
  text-decoration: underline;
}
</style>
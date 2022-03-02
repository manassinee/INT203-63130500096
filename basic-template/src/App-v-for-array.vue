<script setup>
const myAccount = {
  accountID: 12345,
  accountName: 'Manassinee Vejvithan',
  balance: 10000
}
</script>
 
<template>
  <ul>
    <!-- <li v-for="(value, propKey) in myAccount" :key="myAccount.accountId"> -->
    <li v-for="(value, propKey, index) in myAccount" :key="index">
        {{ index }}- {{ propKey }}: {{ value }}
    </li>
  </ul>
</template>
 
<style>

</style>
<script setup>
import { reactive } from 'vue';
console.clear()
const student = reactive({ studentId: 1234, studentName: 'Manassinee' })
console.log(student)
console.log(student.studentId)

const product = reactive(['pepsi', 'coke', 'wall'])
console.log(product)
console.log(product[1])
</script>
 
<template>
    <p>student: {{ student }}</p>
    <p>student id: {{ student.studentId }}</p>
</template>
 
<style>

</style>
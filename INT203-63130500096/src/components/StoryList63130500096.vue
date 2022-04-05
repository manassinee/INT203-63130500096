<script setup>
import { useRouter } from 'vue-router'
defineProps({
  stories: {
    type: Array
  }
})

const appRouter = useRouter()
const doDelete = () => appRouter.push({ name: 'Delete' })
const doCreate = () => appRouter.push({ name: 'Create' })
</script>

<template>
  <div>
    <h1>Your Story List</h1>
   <p v-for="(storie, index) in stories" :key="index">
    <ul>
      <li><b>STORY# </b>{{ storie.id }}
        <p><b>Title:</b>{{ storie.title }}</p>
        <p><b>Story:</b>{{ storie.story}}</p></li>
    <button @click="doCreate">Create</button>
    <button @click="doDelete">Delete</button>
    </ul></p>
  </div>

</template>

<style></style>
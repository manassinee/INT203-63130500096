<script setup>
import { useRouter } from 'vue-router'
defineProps({
  notes: {
    type: Array
  }
})
const appRouter = useRouter()
const doDelete = () => appRouter.push({ name: 'Delete' })
const doCreate = () => appRouter.push({ name: 'Create' })
</script>

<template>
  <div>
    <h1>Note List</h1>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        Id: {{ note.id }},Note Detail:
        <router-link :to="{ name: 'Try', params: { noteId: note.id } }">
          {{ note.noteDetail }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style></style>
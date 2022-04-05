<script setup>
import { ref, onBeforeMount } from 'vue'
import StoryList63130500096 from '../components/StoryList63130500096.vue';
const stories = ref([])

const getStories = async () =>{
 
    const res = await fetch('http://localhost:5000/stories')
    if(res.status === 200) {
    stories.value = await res.json()
    console.log(stories.value);
    }else console.log("error, cann't get notes");
}

onBeforeMount( async () => {
   await getStories()
})
</script>

<template>
  <StoryList63130500096 :stories="stories" />
</template>

<style></style>

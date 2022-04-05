import { createRouter, createWebHistory } from 'vue-router'
import StoryWriter from '../views/StoryWriter63130500096.vue'
import AboutMe from '../views/AboutMe63130500096.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'StoryWriter63130500096',
        component: StoryWriter
      },
      {
        path: '/about-63130500096',
        name: 'About63130500096',
        component: AboutMe
      }
]
const router = createRouter({ history, routes })
export default router
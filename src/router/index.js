import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'
import EventListView from '@/views/EventListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView,
  },
  {
    path: '/event/:id',
    name: 'EventDetailsView',
    props: true,
    component: EventDetailsView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

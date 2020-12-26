import VueRouter from 'vue-router';
import Home from '@/scene/Home.vue';
import Boom from '@/scene/Boom.vue';
import NoteExp from '@/scene/NoteExp.vue';

const routes = [
  {
    path: '*',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/boom',
    name: 'boom',
    component: Boom,
  },
  {
    path: '/noteexp',
    name: 'noteexp',
    component: NoteExp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

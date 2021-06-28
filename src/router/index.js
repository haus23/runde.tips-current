import { createRouter, createWebHistory } from 'vue-router';

// Layouts
import FrontLayout from '@/components/layouts/FrontLayout.vue';

// Views
import Standings from '@/views/Standings.vue';
import Players from '@/views/Players.vue';
import Matches from '@/views/Matches.vue';
import LogIn from '@/views/LogIn.vue';

const routes = [
  { path: '/', redirect: '/tabelle' },
  { path: '/tabelle', component: Standings, meta: { layout: FrontLayout } },
  { path: '/spieler', component: Players, meta: { layout: FrontLayout } },
  { path: '/spiele', component: Matches, meta: { layout: FrontLayout } },
  { path: '/login', component: LogIn, meta: { layout: FrontLayout } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import FohStandings from '../views/foh/Standings.vue';
import FohPlayers from '../views/foh/Players.vue';
import FohMatches from '../views/foh/Matches.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: FohStandings },
  { path: '/tabelle', component: FohStandings },
  { path: '/spieler', component: FohPlayers },
  { path: '/spiele', component: FohMatches },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;

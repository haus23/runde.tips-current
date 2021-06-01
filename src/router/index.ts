import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import FohStandings from '../views/foh/Standings.vue';
import FohPlayers from '../views/foh/Players.vue';
import FohMatches from '../views/foh/Matches.vue';
import FohLogIn from '../views/foh/LogIn.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: FohStandings },
  { path: '/tabelle', component: FohStandings },
  { path: '/spieler', component: FohPlayers },
  { path: '/spiele', component: FohMatches },
  { path: '/login', component: FohLogIn },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AppLayout from '../layouts/AppLayout.vue';
import BackyardLayout from '../layouts/BackyardLayout.vue';

import FohStandings from '../views/foh/Standings.vue';
import FohPlayers from '../views/foh/Players.vue';
import FohMatches from '../views/foh/Matches.vue';
import FohLogIn from '../views/foh/LogIn.vue';
import BackyardDashboard from '../views/backyard/Dashboard.vue';
import BackyardChampionshipList from '../views/backyard/ChampionshipList.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/tabelle' },
  { path: '/tabelle', component: FohStandings, meta: { layout: AppLayout } },
  { path: '/spieler', component: FohPlayers, meta: { layout: AppLayout } },
  { path: '/spiele', component: FohMatches, meta: { layout: AppLayout } },
  { path: '/login', component: FohLogIn, meta: { layout: AppLayout } },
  { path: '/hinterhof', component: BackyardDashboard, meta: { layout: BackyardLayout } },
  { path: '/hinterhof/turniere', component: BackyardChampionshipList, meta: { layout: BackyardLayout } }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;

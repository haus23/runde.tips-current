import { createRouter, createWebHistory } from 'vue-router';

import AppLayout from '../layouts/AppLayout.vue';
import FohWrapper from '../views/foh/Wrapper.vue';
import FohStandings from '../views/foh/Standings.vue';
import FohPlayers from '../views/foh/Players.vue';
import FohMatches from '../views/foh/Matches.vue';
import FohLogIn from '../views/foh/LogIn.vue';

import BackyardLayout from '../layouts/BackyardLayout.vue';
import BackyardWrapper from '../views/backyard/Wrapper.vue';
import BackyardDashboard from '../views/backyard/Dashboard.vue';
import BackyardChampionshipList from '../views/backyard/ChampionshipList.vue';
import BackyardChampionshipPlayers from '../views/backyard/ChampionshipPlayers.vue';

const routes = [
  { path: '/', redirect: '/tabelle' },
  { path: '/hinterhof', redirect: '/hinterhof/dashboard' },
  {
    path: '/',
    component: FohWrapper,
    meta: { layout: AppLayout },
    children: [
      { path: '/tabelle', component: FohStandings },
      { path: '/spieler', component: FohPlayers },
      { path: '/spiele', component: FohMatches },
      { path: '/login', component: FohLogIn },
    ],
  },
  {
    path: '/hinterhof',
    component: BackyardWrapper,
    meta: { layout: BackyardLayout },
    children: [
      { path: 'dashboard', component: BackyardDashboard },
      { path: 'turniere', component: BackyardChampionshipList },
      { path: 'spieler', component: BackyardChampionshipPlayers },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

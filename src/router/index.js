import { createRouter, createWebHistory } from 'vue-router';

import BackyardLayout from '../layouts/BackyardLayout.vue';
import BackyardWrapper from '../views/backyard/Wrapper.vue';
import BackyardDashboard from '../views/backyard/Dashboard.vue';
import BackyardChampionshipList from '../views/backyard/ChampionshipList.vue';

const routes = [
  { path: '/', redirect: '/hinterhof/dashboard' },
  {
    path: '/hinterhof',
    component: BackyardWrapper,
    meta: { layout: BackyardLayout },
    children: [
      { path: 'dashboard', component: BackyardDashboard },
      { path: 'turniere', component: BackyardChampionshipList },
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;

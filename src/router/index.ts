import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Layouts
import FrontLayout from '@/components/layouts/front/FrontLayout.vue';
import BackyardLayout from '@/components/layouts/backyard/BackyardLayout.vue';

// Views
import Standings from '@/views/Standings.vue';
import Players from '@/views/Players.vue';
import Matches from '@/views/Matches.vue';
import LogIn from '@/views/LogIn.vue';
import Dashboard from '@/views/backyard/Dashboard.vue';
import ChampionshipList from '@/views/backyard/ChampionshipList.vue';
import PlayerList from '@/views/backyard/PlayerList.vue';

const routes: RouteRecordRaw[] = [
  // Front
  { path: '/', redirect: '/tabelle' },
  { path: '/tabelle', component: Standings, meta: { layout: FrontLayout } },
  { path: '/spieler', component: Players, meta: { layout: FrontLayout } },
  { path: '/spiele', component: Matches, meta: { layout: FrontLayout } },
  { path: '/login', component: LogIn, meta: { layout: FrontLayout } },
  // Backyard
  { path: '/hinterhof', redirect: '/hinterhof/dashboard' },
  { path: '/hinterhof/dashboard', component: Dashboard, meta: { layout: BackyardLayout } },
  { path: '/hinterhof/turniere', component: ChampionshipList, meta: { layout: BackyardLayout } },
  { path: '/hinterhof/spieler', component: PlayerList, meta: { layout: BackyardLayout } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

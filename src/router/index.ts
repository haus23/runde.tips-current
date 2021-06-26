import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Component } from 'vue';

// Type route meta data
declare module 'vue-router' {
  interface RouteMeta {
    layout: Component;
  }
}

// Layouts
import AppLayout from '../components/layout/AppLayout.vue';

// Views
import Standings from '../views/Standings.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/tabelle' },
  { path: '/tabelle', component: Standings, meta: { layout: AppLayout } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

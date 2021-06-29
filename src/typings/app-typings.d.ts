import { Component } from 'vue';
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    layout: Component;
  }
}

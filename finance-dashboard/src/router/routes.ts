import { RouteDefinition } from '@open-cells/core/types'; 

export const routes: RouteDefinition[] = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home/home-page.js');
    },
  },
  {
    path: '/balance',
    name: 'balance',
    component: 'balance-page',
    action: async () => {
      await import('../pages/balance/balance-page.js');
    },
  },
  {
    path: '/summary',
    name: 'summary',
    component: 'summary-page',
    action: async () => {
      await import('../pages/summary/summary-page.js');
    },
  },
  {
    path: '/movements',
    name: 'movements',
    component: 'movements-page',
    action: async () => {
      await import('../pages/movements/movements-page.js');
    },
  },
];

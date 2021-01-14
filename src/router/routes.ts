import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/projekt', component: () => import('pages/Project.vue')},
      { path: '/themen', component: () => import('pages/Themes.vue')},
      { path: '/bildungsveranstaltungen', component: () => import('pages/Bildungsveranstaltungen.vue')},
      { path: '/projektideen', component: () => import('pages/Projektideen.vue')},
      { path: '/ueber-uns', component: () => import('pages/About.vue')},
      { path: '/kontakt', component: () => import('pages/Contact.vue')},
      { path: '/impressum', component: () => import('pages/Imprint.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;

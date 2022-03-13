const routes = [
  {
    meta: {
      isPublic: true,
      name: 'daybook',
    },
    path: '/daybook',
    name: 'Daybook',
    component: () => import(
      /* webpackChunkName: "DayBookLayout" */
      '@/modules/daybook/layouts/DayBookLayout.vue'
    ),
    children: [
      {
        name: 'no-entry',
        path: '',
        component: () => import(
          /* webpackChunkName: "NoEntrySelected" */
          '@/modules/daybook/views/NoEntrySelected.vue'
        ),
      },
      {
        name: 'entry',
        path: ':id',
        component: () => import(
          /* webpackChunkName: "EntryView" */
          '@/modules/daybook/views/EntryView.vue'
        ),
      },
    ],
  },
];

export default routes;

export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/products',
        component: './products',
      },
      {
        path: '/',
        component: '../pages/index',
      },
      {
        path: '/landing-page',
        component: './LandingPage',
      },
    ],
  },
]
import LazyLoad from './utils/lazyLoad';


import Nostatus from './page/buildComponent/noStatusComp'
export default [
  {
    path: "/",
    component: LazyLoad(()=>import('./page/index'))
  },
  {
    path: "/build/nostatus",
    component: Nostatus
  },
  {
    path: "/build/extends",
    component: LazyLoad(()=>import('./page/buildComponent/extendsComp'))
  },
  {
    path: "/build/extendsCompTable",
    component: LazyLoad(()=>import('./page/buildComponent/extendsCompTable'))
  },
  {
    path: "/compCommunicate",
    component: LazyLoad(()=>import('./page/compCommunite/parentComp'))
  },
  {
    path: "/HocProxy",
    component: LazyLoad(()=>import('./page/hoc/HocProxy'))
  },
  // {
  //   path: "/reverseInhertit",
  //   component: LazyLoad(()=>import('./b.js'))
  // },
  // {
  //   path: "/C",
  //   component: LazyLoad(()=>import('./c.js')),
  //   routes: [
  //     {
  //       path: "/C/D",
  //       component: LazyLoad(()=>import('./d.js'))
  //     },
  //     {
  //       path: "/C/E",
  //       component: LazyLoad(()=>import('./e.js'))
  //     }
  //   ]
  // }
];

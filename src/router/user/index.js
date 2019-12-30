export default [
  {
    path: '/users',
    name: 'user-list',
    redirect: '/users/list',
    component: () => import('@/views/layout/common'),
    children: [
      {
        path: 'list',
        name: 'user-list',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表' }
      },
      {
        path: 'edit',
        name: 'user-edit',
        component: () => import('@/views/user/edit'),
        meta: { title: '编辑用户' }
      }

    ]
  }
]

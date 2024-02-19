interface Category {
  name: string;
  menus: Menu[];
}

interface Menu {
  name: string;
  icon: string;
  path: string;
  color?: string;
}

export const Categories: Category[] = [
  {
    name: '모니터링',
    menus: [
      {
        name: '대시보드',
        icon: 'fa-solid fa-desktop',
        path: '/dashboard'
      }
    ]
  },
  {
    name: '기타',
    menus: [
      {
        name: '크레딧',
        icon: 'fa-solid fa-circle-info',
        path: '/credit'
      },
      {
        name: '@lsm0318',
        icon: 'fa-brands fa-github',
        path: 'https://github.com/lsm0318/dashboard-sample',
      }
    ]
  }
];

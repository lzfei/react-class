import Item from '../pages/item'
import Login from '../pages/login'
import Design from '../pages/design'
import Dynamic from '../pages/dynamic'
import Mine from '../pages/mine'
const routers = [
  {
    path: '/login',
    exact: true,
    isAuth: false,
    name: '登录',
    meta: {
      hideInMenu: true
    },
    main: Login
  },
  {
    path: '/item',
    exact: true,
    isAuth: true,
    name: '项目',
    meta: {
      hideInMenu: false,
      icon: 'icon-item'
    },
    main: Item
  },
  {
    path: '/design',
    exact: true,
    isAuth: true,
    name: '设计规范',
    meta: {
      hideInMenu: false,
      icon: 'icon-design'
    },
    main: Design
  },
  {
    path: '/dynamic',
    exact: true,
    isAuth: true,
    name: '动态',
    meta: {
      hideInMenu: false,
      icon: 'icon-dynamic'
    },
    main: Dynamic
  },
  {
    path: '/mine',
    exact: true,
    isAuth: true,
    name: '我的团队',
    meta: {
      hideInMenu: false,
      icon: 'icon-mine'
    },
    main: Mine
  }
]
export default routers
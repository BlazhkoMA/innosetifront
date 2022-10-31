import Index from '../src/pages/Index'
import Page from '../src/pages/Page'
const menu = [
    {
        title: 'Главная',
        name: 'main',
        icon: null,
        path: '/',
        component: Index
    },
    {
        title: 'Страница',
        name: 'menu1',
        icon: 'el-icon-s-home',
        path: '/page',
        component: Page
    },
    {
        title: 'Продукт',
        name: 'menu2',
        icon: 'el-icon-s-flag',
        path: '/product',
        component: Page
    },
    {
        title: 'Каталог',
        name: 'menu3',
        icon: null,
        path: '/catalog',
        component: Page
    },
  ]
export default menu
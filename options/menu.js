import Index from '../src/pages/Index'
import Page from '../src/pages/Page'
const menu = [
    {
        title: 'Главная',
        alias: 'main',
        icon: null,
        route: '',
        component: Index
    },
    {
        title: 'Страница',
        alias: 'menu1',
        icon: 'el-icon-s-home',
        route: '/page',
        component: Page
    },
    {
        title: 'Продукт',
        alias: 'menu2',
        icon: 'el-icon-s-flag',
        route: '/product',
        component: Page
    },
    {
        title: 'Каталог',
        alias: 'menu3',
        icon: null,
        route: '/catalog',
        component: Page
    },
  ]
export default menu
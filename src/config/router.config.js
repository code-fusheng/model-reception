
const Home = () => import('../views/home/index')
const About = () => import('../views/about/index')
const Register = () => import('../views/register/index')
const NotFoundComponent = () => import('../views/exception/404')
const Search = () => import('../views/search/index')

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    mate: {
      title: '主页',
      icon: 'home',
      isLoading: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    mate: {
      isLoading: false
    }
  },
  {
    path: '/search/index',
    name: 'Search',
    component: Search,
    mate: {
      title: '搜索',
      icon: 'search',
      isLoading: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    mate: {
      title: '关于',
      icon: 'question-circle',
      isLoading: true
    }
  },
  {
    path: '/exception/403',
    name: '403',
    component: () => import('../views/exception/403'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/500',
    name: '500',
    component: () => import('../views/exception/500'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/404',
    name: '404',
    component: NotFoundComponent,
    mate: {
      isLoading: false
    }
  }
]

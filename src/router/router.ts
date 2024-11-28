import loadable from '@loadable/component'
import { RouteInterface } from '@/types/route'

// TODO: public路径从buildConfig里读取，注入环境变量使用
export const basename = ''

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/noteEditor')),
    name: 'editor',
    title: 'editor',
  },
  // 404 Not Found
  {
    path: '*',
    component: loadable(() => import('@/pages/status/404')),
    name: '404',
    title: '404',
  },
]

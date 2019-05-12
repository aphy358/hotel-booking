import Home from './Home'
import Counter from './Counter'


export const createRoutes = (store: any) => ([
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/counter',
    component: Counter
  }
])

export default createRoutes

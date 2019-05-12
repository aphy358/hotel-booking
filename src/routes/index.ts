import Home from './Home'
import Counter from './Counter'

export const createRoutes = (store: any) => ([
  {
    path: '/',
    exact: true,
    ...Home
  },
  {
    path: '/counter',
    ...Counter
  }
])

export default createRoutes

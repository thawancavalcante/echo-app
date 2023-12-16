import { Routes, Route, BrowserRouter } from 'react-router-dom'
import IRoute from './interface/route'
import HomePage from '../modules/Home/pages/Home'

const routes: IRoute[] = [
  {
    title: 'Home',
    path: HomePage.route,
    element: <HomePage/>,
  },
  {
    title: 'communities',
    path: '/communities',
    element: <div>Communities</div>,
  },
]

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.title} />
        ))}
        <Route element={<div>404</div>} path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
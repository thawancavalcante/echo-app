import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import IRoute from './interface/route'
import HomePage from '../modules/Home/pages/Home'
import Sidebar from '../components/Sidebar'

const routes: IRoute[] = [
  {
    title: 'Home',
    path: HomePage.route,
    element: <HomePage />,
  },
  {
    title: 'communities',
    path: '/communities',
    element: <div>Communities</div>,
  },
]

const Template = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          {routes.map((route) => (
            <Route {...route} key={route.title} />
          ))}
          <Route element={<div>404</div>} path='*' />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
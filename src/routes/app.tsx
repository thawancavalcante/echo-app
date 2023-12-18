import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import IRoute from './interface/route'
import Sidebar from '../components/Sidebar'
import Chat from '../modules/Channels/pages/Chat'
import HomePage from '../modules/Channels/pages/Home'

const routes: IRoute[] = [
  {
    title: 'Channels',
    path: HomePage.route,
    element: <HomePage />,
  },
  {
    title: 'chat',
    path: Chat.route,
    element: <Chat />,
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
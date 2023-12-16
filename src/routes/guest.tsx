import { Routes, Route, BrowserRouter } from 'react-router-dom'
import IRoute from './interface/route'
import LoginPage from '../modules/Auth/pages/Login'
import RegisterPage from '../modules/Auth/pages/Register'

const routes: IRoute[] = [
  {
    title: 'Login',
    path: LoginPage.route,
    element: <LoginPage />,
  },
  {
    title: 'Register',
    path: RegisterPage.route,
    element: <RegisterPage/>,
  },
]

const GuestRouter = () => {
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

export default GuestRouter

import useAuth from '../modules/Auth/context/useAuth'
import AppRoutes from './app'
import GuestRoutes from './guest'

const Routes = () => {
	const { user } = useAuth()
	return user ? <AppRoutes /> : <GuestRoutes />
}

export default Routes

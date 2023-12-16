import { createContext, useState, useEffect } from 'react'
import delay from '../../../utils/delay'

interface IUser {
	username: string
}

interface ILoginInput {
	email: string
	password: string
}

interface IRegisterInput {
	email: string
	username: string
	password: string
}

interface AuthContextType {
	user: IUser | null
	loading: boolean
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
	login: (data: ILoginInput) => Promise<void>
	register: (data: IRegisterInput) => Promise<void>
	logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>(null!)

const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useState<IUser | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	const handleSetUser = (data: IUser) => {
		setUser(data)
		localStorage.setItem('@Auth:user', JSON.stringify(data))
	}

	useEffect(() => {
		const loadStorageData = async () => {
			const storagedUser = localStorage.getItem('@Auth:user')
			if (storagedUser) {
				const user = JSON.parse(storagedUser)
				setUser(user)
				//TODO:
				// api.defaults.headers.Authorization = `Baerer ${user.token}`
			}

			setLoading(false)
		}

		loadStorageData()
	}, [])

	const login = async (data: ILoginInput) => {
		setLoading(true)
		await delay(2)
		if (data.email !== 'thawan@gmail.com' && data.password !== '123321') {
			setLoading(false)
			throw 'invalid username or password'
		}
		handleSetUser({ username: 'Thawan' })
		setLoading(false)
	}

	const register = async (data: IRegisterInput) => {
		setLoading(true)
		await delay(2)

		if (data.username !== 'thawanew') {
			setLoading(false)
			throw 'error when try to create a new user'
		}
		handleSetUser({ username: data.username })


		setLoading(false)
	}

	const logout = async () => {
		localStorage.removeItem('@Auth:user')
		setUser(null)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				setLoading,
				login,
				register,
				logout,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider, AuthContext }

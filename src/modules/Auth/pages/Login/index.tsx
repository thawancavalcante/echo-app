import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../context/useAuth"
import RegisterPage from "../Register"
import HomePage from "../../../Home/pages/Home"

const LoginPage = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const [error, setError] = useState<string | undefined>()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    auth.login({ email, password }).then(() => {
      navigate(HomePage.route)
    }).catch(e => {
      setError(e)
    })
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email: <input name="email" type="text" />
          </label>
        </p>
        <p>
          <label>
            Password: <input name="password" type="text" />
          </label>
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={auth.loading}>Login</button>
      </form>
      <button type="button" onClick={() => navigate(RegisterPage.route)}>Register</button>

    </div>
  )
}

LoginPage.route = '/'

export default LoginPage
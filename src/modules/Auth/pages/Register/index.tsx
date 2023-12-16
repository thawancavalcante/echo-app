import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../context/useAuth"

const RegisterPage = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const [error, setError] = useState<string | undefined>()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    auth.register({ email, username, password }).then(() => {
      navigate('/')
    }).catch(e => {
      setError(e)
    })
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email: <input name="email" type="text" />
          </label>
        </p>
        <p>
          <label>
            Username: <input name="username" type="text" />
          </label>
        </p>
        <p>
          <label>
            Password: <input name="password" type="text" />
          </label>
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={auth.loading}>Register</button>
      </form>
    </div>
  )
}

RegisterPage.route = '/register'

export default RegisterPage
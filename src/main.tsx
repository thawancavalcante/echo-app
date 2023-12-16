import ReactDOM from 'react-dom/client'
import { AuthProvider } from './modules/Auth/context/AuthProvider'
import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <Routes/>
  </AuthProvider>
)

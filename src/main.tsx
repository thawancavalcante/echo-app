import ReactDOM from 'react-dom/client'
import { AuthProvider } from './modules/Auth/context/AuthProvider'
import Routes from './routes'
import './global.css'
import 'material-icons/iconfont/material-icons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <Routes/>
  </AuthProvider>
)

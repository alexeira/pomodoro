import { createRoot } from 'react-dom/client'

import App from './App'
import './styles.css'
import { PomodoroProvider } from './context/pomodoro'

createRoot(document.getElementById('root')!).render(
  <PomodoroProvider>
    <App />
  </PomodoroProvider>
)

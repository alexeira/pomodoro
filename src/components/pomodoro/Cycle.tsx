import { usePomodoro } from '../../hooks/usePomodoro'
import './Cycle.css'

export function Cycle() {
  const { pomodoro, isRunning } = usePomodoro()
  const { cycle } = pomodoro

  return <span className={`cycle ${isRunning ? 'cycle-animation' : ''}`}>{cycle}</span>
}

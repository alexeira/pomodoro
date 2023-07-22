import { usePomodoro } from '../../hooks/usePomodoro'
import './Timer.css'

export default function Timer() {
  const { formatedTime, isRunning } = usePomodoro()

  return (
    <div aria-disabled={isRunning} className={`timer ${isRunning ? 'timer-animation' : ''}`}>
      <h1 className="text-timer">{formatedTime}</h1>
    </div>
  )
}

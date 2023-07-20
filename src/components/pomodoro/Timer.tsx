import { usePomodoro } from '../../hooks/usePomodoro'
import './Timer.css'

export default function Timer() {
  const { formatedTime } = usePomodoro()

  return (
    <div>
      <h1 className="timer">{formatedTime}</h1>
    </div>
  )
}

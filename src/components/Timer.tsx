import { usePomodoro } from '../hooks/usePomodoro'

export default function Timer() {
  const { formatedTime } = usePomodoro()

  return (
    <div>
      <h1 className="timer">{formatedTime}</h1>
    </div>
  )
}

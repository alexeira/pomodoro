import { usePomodoro } from '../hooks/usePomodoro'

export function CycleCounter() {
  const { pomodoro } = usePomodoro()
  const { cycleCounter } = pomodoro

  return (
    <span className="doing" style={{ paddingLeft: 18, fontSize: 22 }}>
      #{cycleCounter}
    </span>
  )
}

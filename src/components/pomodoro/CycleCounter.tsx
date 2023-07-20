import { usePomodoro } from '../../hooks/usePomodoro'

export function CycleCounter() {
  const { pomodoro } = usePomodoro()
  const { cycleCounter } = pomodoro

  return <span className="cycle-counter">#{cycleCounter}</span>
}

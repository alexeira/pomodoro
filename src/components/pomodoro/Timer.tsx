import { usePomodoro } from '../../hooks/usePomodoro'
import './Timer.css'

export function Timer() {
  const { formatedTime, isRunning, pomodoro } = usePomodoro()
  const { timeRemaining, cycle, cycleCounter } = pomodoro

  const isPomodoroCycle = timeRemaining === 1500 && cycle === 'pomodoro' && cycleCounter === 1
  const isCycleOnChange = cycleCounter > 1 || cycle === 'short-break'

  return (
    <div aria-disabled={isRunning} className={`timer ${isRunning ? 'timer-animation' : ''}`}>
      <h1
        key={cycle}
        className={`text-timer ${isCycleOnChange ? 'cycle-on-change' : ''}${
          isPomodoroCycle ? 'cycle-on-reset' : ''
        }`}
      >
        {formatedTime}
      </h1>
    </div>
  )
}

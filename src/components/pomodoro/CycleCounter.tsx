import { useRef } from 'react'

import { usePomodoro } from '../../hooks/usePomodoro'

export function CycleCounter() {
  const { pomodoro, isRunning } = usePomodoro()
  const { cycleCounter } = pomodoro
  const prevCycleCounter = useRef(cycleCounter)

  return (
    <span
      key={cycleCounter}
      className={`text-doing cycle-counter ${
        !isRunning && cycleCounter > prevCycleCounter.current ? 'cycle-counter-animation' : ''
      }`}
    >
      #{cycleCounter}
    </span>
  )
}

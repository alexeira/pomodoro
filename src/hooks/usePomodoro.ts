import { useContext } from 'react'

import { PomodoroContext } from '../context/pomodoro'
import { PomodoroContextProps } from '../interfaces'

export function usePomodoro() {
  const pomodoroContext = useContext(PomodoroContext)
  const { pomodoro, isRunning, startTimer, pauseTimer, stopTimer, nextCycle } =
    pomodoroContext as PomodoroContextProps

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const formatedTime = formatTime(pomodoro.timeRemaining)

  return {
    pomodoro,
    isRunning,
    formatedTime,
    startTimer,
    pauseTimer,
    stopTimer,
    nextCycle
  }
}

import { useContext } from 'react'

import { PomodoroContext } from '../context/pomodoro'
import { PomodoroContextProps } from '../interfaces'

export function usePomodoro() {
  const pomodoroContext = useContext(PomodoroContext)
  const { pomodoro, setPomodoro } = pomodoroContext as PomodoroContextProps

  function handleTime() {}

  return { pomodoro, setPomodoro }
}

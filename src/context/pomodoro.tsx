import { createContext, useEffect, useState } from 'react'

import { Pomodoro, PomodoroContextProps } from '../interfaces'

export const PomodoroContext = createContext<PomodoroContextProps | null>(null)

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [pomodoro, setPomodoro] = useState<Pomodoro>({
    timeRemaining: 1500,
    doing: 'studying'
  })

  const [isRunning, setIsRunning] = useState(false)

  function handleInterval() {
    setPomodoro(prevPomodoro => ({
      ...prevPomodoro,
      timeRemaining: prevPomodoro.timeRemaining - 1
    }))
  }

  useEffect(() => {
    const { timeRemaining } = pomodoro
    let timer: NodeJS.Timeout | number = 0

    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        handleInterval()
      }, 1000)
    }

    if (!isRunning || timeRemaining === 0) {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [isRunning, pomodoro])

  function startTimer() {
    setIsRunning(true)
    handleInterval()
  }

  function pauseTimer() {
    setIsRunning(false)
  }

  function stopTimer() {
    setIsRunning(false)
    setPomodoro({
      timeRemaining: 1500,
      doing: 'studying'
    })
  }

  return (
    <PomodoroContext.Provider
      value={{
        pomodoro,
        isRunning,
        setPomodoro,
        startTimer,
        pauseTimer,
        stopTimer
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}

import { createContext, useCallback, useEffect, useState } from 'react'

import { Pomodoro, PomodoroContextProps } from '../interfaces'

export const PomodoroContext = createContext<PomodoroContextProps | null>(null)

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [pomodoro, setPomodoro] = useState<Pomodoro>({
    timeRemaining: 1500,
    doing: 'learning kuma ui',
    cycle: 'pomodoro',
    cycleCounter: 1
  })

  const [isRunning, setIsRunning] = useState(false)

  const nextCycle = useCallback(() => {
    setIsRunning(false)

    const { doing, cycle, cycleCounter } = pomodoro

    if (cycle === 'pomodoro' && cycleCounter % 4 !== 0) {
      setPomodoro(prevPomodoro => ({
        ...prevPomodoro,
        timeRemaining: 300,
        doing: doing,
        cycle: 'short-break',
        cycleCounter: cycleCounter
      }))
    }

    if (cycle === 'short-break' && cycleCounter % 4 !== 0) {
      setPomodoro(prevPomodoro => ({
        ...prevPomodoro,
        timeRemaining: 1500,
        doing: doing,
        cycle: 'pomodoro',
        cycleCounter: cycleCounter + 1
      }))
    }

    if (cycle === 'pomodoro' && cycleCounter % 4 === 0) {
      setPomodoro(prevPomodoro => ({
        ...prevPomodoro,
        timeRemaining: 900,
        doing: doing,
        cycle: 'long-break',
        cycleCounter: cycleCounter
      }))
    }

    if (cycle === 'long-break') {
      setPomodoro(prevPomodoro => ({
        ...prevPomodoro,
        timeRemaining: 1500,
        doing: doing,
        cycle: 'pomodoro',
        cycleCounter: cycleCounter + 1
      }))
    }
  }, [pomodoro])

  function startTimer() {
    setIsRunning(true)
    handleInterval()
  }

  function pauseTimer() {
    setIsRunning(false)
  }

  function stopTimer() {
    setIsRunning(false)
    setPomodoro(prevPomodoro => ({
      ...prevPomodoro,
      timeRemaining: 1500,
      doing: prevPomodoro.doing,
      cycle: 'pomodoro',
      cycleCounter: 1
    }))
  }

  // function changeDoing(doing: string) {
  //   setPomodoro(prevPomodoro => ({
  //     ...prevPomodoro,
  //     doing: doing
  //   }))
  // }

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

    if (isRunning && timeRemaining === 0) {
      nextCycle()
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [pomodoro, isRunning, nextCycle])

  return (
    <PomodoroContext.Provider
      value={{
        pomodoro,
        isRunning,
        startTimer,
        pauseTimer,
        stopTimer,

        nextCycle
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}

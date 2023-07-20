import { createContext, useEffect, useState } from 'react'

import { Pomodoro, PomodoroContextProps } from '../interfaces'

export const PomodoroContext = createContext<PomodoroContextProps | null>(null)

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [pomodoro, setPomodoro] = useState<Pomodoro>({
    timeRemaining: 1500,
    doing: 'studying',
    cycle: 'pomodoro',
    cycleCounter: 1
  })

  const currentDoing = pomodoro.doing
  const currentCycle = pomodoro.cycle
  const currentCycleCounter = pomodoro.cycleCounter

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
      doing: 'studying',
      cycle: currentCycle,
      cycleCounter: 1
    })
  }

  function nextCycle() {
    setIsRunning(false)

    if (currentCycle === 'pomodoro' && currentCycleCounter % 4 !== 0) {
      setPomodoro({
        timeRemaining: 300,
        doing: currentDoing,
        cycle: 'short-break',
        cycleCounter: currentCycleCounter
      })
    }

    if (currentCycle === 'short-break' && currentCycleCounter % 4 !== 0) {
      setPomodoro({
        timeRemaining: 1500,
        doing: currentDoing,
        cycle: 'pomodoro',
        cycleCounter: currentCycleCounter + 1
      })
    }

    if (currentCycle === 'pomodoro' && currentCycleCounter % 4 === 0) {
      setPomodoro({
        timeRemaining: 900,
        doing: currentDoing,
        cycle: 'long-break',
        cycleCounter: currentCycleCounter
      })
    }

    if (currentCycle === 'long-break') {
      setPomodoro({
        timeRemaining: 1500,
        doing: currentDoing,
        cycle: 'pomodoro',
        cycleCounter: currentCycleCounter + 1
      })
    }
  }

  return (
    <PomodoroContext.Provider
      value={{
        pomodoro,
        isRunning,
        setPomodoro,
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

import { createContext, useState } from 'react'

import { Pomodoro, PomodoroContextProps } from '../interfaces'

export const PomodoroContext = createContext<PomodoroContextProps | null>(null)

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [pomodoro, setPomodoro] = useState<Pomodoro>({
    timeRemaining: 1500,
    doing: 'studying'
  })

  return (
    <PomodoroContext.Provider value={{ pomodoro, setPomodoro }}>
      {children}
    </PomodoroContext.Provider>
  )
}

type PomodoroCycle = 'pomodoro' | 'short-break' | 'long-break'

export interface Pomodoro {
  timeRemaining: number
  doing: string
  cycle: PomodoroCycle
  cycleCounter: number
}

export interface PomodoroContextProps {
  pomodoro: Pomodoro
  setPomodoro: React.Dispatch<React.SetStateAction<Pomodoro>>
  isRunning: boolean
  startTimer: () => void
  pauseTimer: () => void
  stopTimer: () => void
  nextCycle: () => void
}

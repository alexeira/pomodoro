export interface Pomodoro {
  timeRemaining: number
  doing: string
}

export interface PomodoroContextProps {
  pomodoro: Pomodoro
  setPomodoro: React.Dispatch<React.SetStateAction<Pomodoro>>
  isRunning: boolean
  startTimer: () => void
  pauseTimer: () => void
  stopTimer: () => void
}

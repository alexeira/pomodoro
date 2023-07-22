import { Next, Pause, Play, Stop } from '../icons/TimerMenuIo'
import './Buttons.css'

export function StopButton({
  isRunning,
  stopTimer
}: {
  isRunning: boolean
  stopTimer: () => void
}) {
  return (
    <button
      className={`menu-button stop-button ${isRunning ? 'hidden-button' : ''}`}
      data-title="Parar"
      disabled={isRunning}
      tabIndex={isRunning ? -1 : 0}
      onClick={stopTimer}
    >
      <Stop />
    </button>
  )
}

export function PlayButton({ startTimer }: { startTimer: () => void }) {
  return (
    <button
      className="menu-button play-button"
      data-title="Reproducir"
      tabIndex={1}
      onClick={startTimer}
    >
      <Play />
    </button>
  )
}

export function PauseButton({ pauseTimer }: { pauseTimer: () => void }) {
  return (
    <button
      className="menu-button pause-button"
      data-title="Pausar"
      tabIndex={2}
      onClick={pauseTimer}
    >
      <Pause />
    </button>
  )
}

export function NextButton({
  isRunning,
  nextCycle
}: {
  isRunning: boolean
  nextCycle: () => void
}) {
  return (
    <button
      className={`menu-button next-button ${isRunning ? 'hidden-button' : ''}`}
      data-title="Siguiente"
      disabled={isRunning}
      tabIndex={isRunning ? -1 : 3}
      onClick={nextCycle}
    >
      <Next />
    </button>
  )
}

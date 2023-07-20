import { Next, Pause, Play, Stop } from '../icons/TimerMenuIo'

export function StopButton({ stopTimer }: { stopTimer: () => void }) {
  return (
    <button data-title="Parar" onClick={stopTimer}>
      <Stop />
    </button>
  )
}

export function PlayButton({ startTimer }: { startTimer: () => void }) {
  return (
    <button data-title="Reproducir" onClick={startTimer}>
      <Play />
    </button>
  )
}

export function PauseButton({ pauseTimer }: { pauseTimer: () => void }) {
  return (
    <button data-title="Pausar" onClick={pauseTimer}>
      <Pause />
    </button>
  )
}

export function NextButton({ nextCycle }: { nextCycle: () => void }) {
  return (
    <button data-title="Siguiente" onClick={nextCycle}>
      <Next />
    </button>
  )
}

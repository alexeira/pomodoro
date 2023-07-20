import { CycleCounter } from './CycleCounter'
import Timer from './Timer'

function Doing({ task }: { task: string }) {
  return (
    <div>
      <span className="doing">{task}</span>
      <CycleCounter />
    </div>
  )
}

export function Pomodoro() {
  return (
    <div className="timer-section">
      <Timer />
      <Doing task="studying" />
    </div>
  )
}

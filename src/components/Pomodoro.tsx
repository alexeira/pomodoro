import Timer from './Timer'

function Doing({ task }: { task: string }) {
  return <span className="doing">{task}</span>
}

export function Pomodoro() {
  return (
    <div className="timer-section">
      <Timer />
      <Doing task="studying" />
    </div>
  )
}

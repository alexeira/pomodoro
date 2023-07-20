import { CycleCounter } from './CycleCounter'
import './Doing.css'

export function Doing({ task }: { task: string }) {
  return (
    <div className="doing-section">
      <span className="doing">{task}</span>
      <CycleCounter />
    </div>
  )
}

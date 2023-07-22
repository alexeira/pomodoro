import { usePomodoro } from '../../hooks/usePomodoro'

import { CycleCounter } from './CycleCounter'
import './Doing.css'

export function Doing({ task }: { task: string }) {
  const { isRunning } = usePomodoro()

  return (
    <div
      aria-disabled={isRunning}
      className={`doing-section ${isRunning ? 'doing-animation' : ''}`}
    >
      <span className="doing">
        {task}
        <CycleCounter />
      </span>
    </div>
  )
}

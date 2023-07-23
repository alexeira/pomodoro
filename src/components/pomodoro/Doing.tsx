import { usePomodoro } from '../../hooks/usePomodoro'

import { CycleCounter } from './CycleCounter'
import './Doing.css'

export function Doing() {
  const { isRunning } = usePomodoro()

  return (
    <div
      aria-disabled={isRunning}
      className={`doing-section ${isRunning ? 'doing-animation' : ''}`}
    >
      {/* <span className="text-doing">{doing}</span> */}
      <CycleCounter />
    </div>
  )
}

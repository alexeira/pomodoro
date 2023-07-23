import { Cycle } from './Cycle'
import { Doing } from './Doing'
import { Timer } from './Timer'

import './Pomodoro.css'

export function Pomodoro() {
  return (
    <div className="pomodoro">
      <Cycle />
      <Timer />
      <Doing />
    </div>
  )
}

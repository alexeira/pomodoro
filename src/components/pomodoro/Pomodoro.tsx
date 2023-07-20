import Timer from './Timer'
import { Doing } from './Doing'

import './Pomodoro.css'

export function Pomodoro() {
  return (
    <div className="pomodoro">
      <Timer />
      <Doing task="studying" />
    </div>
  )
}

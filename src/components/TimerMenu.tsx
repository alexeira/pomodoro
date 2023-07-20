import { usePomodoro } from '../hooks/usePomodoro'

import { NextButton, PauseButton, PlayButton, StopButton } from './Buttons'

export function TimerMenu() {
  const { isRunning, startTimer, pauseTimer, stopTimer, nextCycle } = usePomodoro()

  return (
    <section className="buttons-section">
      <StopButton stopTimer={stopTimer} />
      {isRunning ? <PauseButton pauseTimer={pauseTimer} /> : <PlayButton startTimer={startTimer} />}
      <NextButton nextCycle={nextCycle} />
    </section>
  )
}

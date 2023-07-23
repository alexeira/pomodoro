import { usePomodoro } from '../../hooks/usePomodoro'

import { NextButton, PauseButton, PlayButton, StopButton } from './Buttons'

export function TimerMenu() {
  const { isRunning, startTimer, pauseTimer, stopTimer, nextCycle } = usePomodoro()

  return (
    <section className={`buttons-section ${isRunning ? 'hidden-menu' : ''}`}>
      <StopButton isRunning={isRunning} stopTimer={stopTimer} />
      {isRunning ? <PauseButton pauseTimer={pauseTimer} /> : <PlayButton startTimer={startTimer} />}
      <NextButton isRunning={isRunning} nextCycle={nextCycle} />
    </section>
  )
}

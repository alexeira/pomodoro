import { usePomodoro } from '../../hooks/usePomodoro'
import { Tooltip } from '../layout/Tooltip'

import { NextButton, PauseButton, PlayButton, StopButton } from './Buttons'

export function TimerMenu() {
  const { isRunning, startTimer, pauseTimer, stopTimer, nextCycle } = usePomodoro()

  return (
    <section className={`buttons-section ${isRunning ? 'hidden-menu' : ''}`}>
      <Tooltip customX={49} disabled={isRunning} title="Reiniciar">
        <StopButton isRunning={isRunning} stopTimer={stopTimer} />
      </Tooltip>

      {isRunning ? (
        <Tooltip customX={44} disabled={false} title="Pausar">
          <PauseButton pauseTimer={pauseTimer} />
        </Tooltip>
      ) : (
        <Tooltip customX={44} disabled={false} title="Empezar">
          <PlayButton startTimer={startTimer} />
        </Tooltip>
      )}
      <Tooltip customX={46} disabled={isRunning} title="Siguiente">
        <NextButton isRunning={isRunning} nextCycle={nextCycle} />
      </Tooltip>
    </section>
  )
}

import { useEffect } from 'react'

import { Container } from './components/layout/Container'
import { TitleBar } from './components/layout/TitleBar'
import { Pomodoro } from './components/pomodoro/Pomodoro'
import { TimerMenu } from './components/menu/TimerMenu'
import { usePomodoro } from './hooks/usePomodoro'

export default function App() {
  const { isRunning, startTimer, pauseTimer, stopTimer, nextCycle } = usePomodoro()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault()
        isRunning ? pauseTimer() : startTimer()
      }
      if (event.key === 'Backspace') {
        event.preventDefault()
        stopTimer()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        nextCycle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isRunning, startTimer, pauseTimer, stopTimer, nextCycle])

  return (
    <>
      <Container>
        <TitleBar />
        <TimerMenu />
        <Pomodoro />
      </Container>
    </>
  )
}

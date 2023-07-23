import { useEffect, useRef } from 'react'

import { Container } from './components/layout/Container'
import { TitleBar } from './components/layout/TitleBar'
import { Pomodoro } from './components/pomodoro/Pomodoro'
import { TimerMenu } from './components/menu/TimerMenu'
import { usePomodoro } from './hooks/usePomodoro'
import Alarm from './assets/alarm.mp3'

export default function App() {
  const { isRunning, pomodoro, startTimer, pauseTimer, stopTimer, nextCycle } = usePomodoro()
  const { timeRemaining } = pomodoro
  const audioPlayer = useRef<HTMLAudioElement>(null)

  function playAudio() {
    audioPlayer.current?.play()
  }

  useEffect(() => {
    if (timeRemaining === 0) {
      playAudio()
    }
  }, [timeRemaining])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault()
        isRunning ? pauseTimer() : startTimer()
      }
      if (event.key === 'r') {
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
        {audioPlayer && <audio ref={audioPlayer} preload="auto" src={Alarm} />}
        <TitleBar />
        <TimerMenu />
        <Pomodoro />
      </Container>
    </>
  )
}

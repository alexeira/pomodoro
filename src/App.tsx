import { useState } from 'react'

import { Container } from './components/Container'
import { TitleBar } from './components/TitleBar'
import Timer from './components/Timer'
import { Play } from './components/icons/Play'
import { Stop } from './components/icons/Stop'
import { Pause } from './components/icons/Pause'
import { Next } from './components/icons/Next'

function PlayButton() {
  return (
    <button data-title="Reproducir">
      <Play />
    </button>
  )
}

function PauseButton() {
  return (
    <button data-title="Pausar">
      <Pause />
    </button>
  )
}

function TimerMenu() {
  const [state, setState] = useState(false)

  function handleClick() {
    setState(!state)
  }

  return (
    <>
      <span className="none" onClick={handleClick}>
        {state ? <PlayButton /> : <PauseButton />}
      </span>
    </>
  )
}

function StopButton() {
  return (
    <button data-title="Parar">
      <Stop />
    </button>
  )
}

function NextButton() {
  return (
    <button data-title="Siguiente">
      <Next />
    </button>
  )
}

function Doing({ task }: { task: string }) {
  return <span className="doing">{task}</span>
}

export default function App() {
  return (
    <>
      <TitleBar />
      <Container>
        <div className="buttons-section">
          <StopButton />
          <TimerMenu />
          <NextButton />
        </div>
        <div className="timer-section">
          <Timer />
          <Doing task="studying" />
        </div>
      </Container>
    </>
  )
}

import { useState } from 'react'

import { Container } from './components/Container'
import { TitleBar } from './components/TitleBar'
import Timer from './components/Timer'

export default function App() {
  return (
    <>
      <TitleBar />
      <Container>
        <h1>Hello</h1>
        <Timer />
      </Container>
    </>
  )
}

import { Container } from './components/layout/Container'
import { TitleBar } from './components/layout/TitleBar'
import { Pomodoro } from './components/Pomodoro'
import { TimerMenu } from './components/TimerMenu'

export default function App() {
  return (
    <>
      <TitleBar />
      <Container>
        <TimerMenu />
        <Pomodoro />
      </Container>
    </>
  )
}

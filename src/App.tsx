import { Container } from './components/layout/Container'
import { TitleBar } from './components/layout/TitleBar'
import { Pomodoro } from './components/pomodoro/Pomodoro'
import { TimerMenu } from './components/menu/TimerMenu'

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

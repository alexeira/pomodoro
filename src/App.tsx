import { Container } from './components/Container'
import { TitleBar } from './components/TitleBar'
import { TimerMenu } from './components/TimerMenu'

export default function App() {
  return (
    <>
      <TitleBar />
      <Container>
        <TimerMenu />
      </Container>
    </>
  )
}

import { useEffect } from 'react'

import { usePomodoro } from '../hooks/usePomodoro'

export default function Timer() {
  const { pomodoro, setPomodoro } = usePomodoro()
  const { timeRemaining } = pomodoro

  useEffect(() => {
    const timer = setInterval(() => {
      setPomodoro(prevPomodoro => ({
        ...prevPomodoro,
        timeRemaining: prevPomodoro.timeRemaining - 1
      }))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [setPomodoro])

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const formatedTime = formatTime(timeRemaining)

  return (
    <div>
      <h1 className="timer">{formatedTime}</h1>
    </div>
  )
}

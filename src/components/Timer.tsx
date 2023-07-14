import { useState, useEffect } from 'react'

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(1500)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <h1 className="timer">{formatTime(timeRemaining)}</h1>
    </div>
  )
}

export default Timer

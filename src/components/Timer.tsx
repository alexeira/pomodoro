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

    console.log(minutes, 'minutes')
    const seconds = time % 60

    console.log(seconds, 'seconds')

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <h1>Temporizador de 25 minutos</h1>
      <div>{formatTime(timeRemaining)}</div>
    </div>
  )
}

export default Timer

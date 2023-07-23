import { useState } from 'react'
import './Tooltip.css'

export function Tooltip({
  children,
  title,
  disabled,
  customX
}: {
  children: React.ReactNode
  title: string
  disabled: boolean
  customX?: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="tooltip"
      onAuxClick={() => setIsVisible(false)}
      onBlur={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseOver={() => setIsVisible(true)}
    >
      {isVisible && !disabled && (
        <span className="tooltip-text" style={{ transform: `translateX(-${customX}%)` }}>
          {title}
        </span>
      )}
      {children}
    </div>
  )
}

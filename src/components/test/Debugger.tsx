import { appWindow } from '@tauri-apps/api/window'
import { useState, useEffect } from 'react'

export function Debugger() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    async function getWindowSize() {
      const factor = await appWindow.scaleFactor()
      const size = await appWindow.innerSize()
      const logical = size.toLogical(factor)

      setSize(logical)
    }

    getWindowSize()

    window.addEventListener('resize', getWindowSize)

    return () => window.removeEventListener('resize', getWindowSize)
  }, [])

  const footerStyles: any = {
    position: 'fixed',
    left: 16,
    bottom: 16,
    textAlign: 'left',
    background: 'rgba(0, 0, 0, .7)',
    color: '#fff5ee',
    fontSize: 12,
    maxWidth: '100%',
    padding: '5px 16px',
    borderRadius: 32,
    backDropFilter: 'blur(8px)'
  }

  return (
    <footer style={footerStyles}>
      width:{size.width} | height:{size.height}
    </footer>
  )
}

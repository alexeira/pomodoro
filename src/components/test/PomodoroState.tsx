import { usePomodoro } from '../../hooks/usePomodoro'

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

export function PomodoroState() {
  const pomodoro = usePomodoro()

  const footerStyles: any = {
    position: 'fixed',
    right: 16,
    bottom: 16,
    textAlign: 'left',
    background: 'rgba(0, 0, 0, .7)',
    color: '#fff5ee',
    fontSize: 12,
    width: '30%',
    padding: '5px 16px',
    borderRadius: 32,
    backDropFilter: 'blur(8px)'
  }

  return <footer style={footerStyles}>{IS_DEVELOPMENT && JSON.stringify(pomodoro, null, 2)}</footer>
}

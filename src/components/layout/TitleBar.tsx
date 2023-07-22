import { Config, Exit, Min } from '../icons/TitleBarIo'
import './TitleBar.css'

export function TitleBar() {
  return (
    <div data-tauri-drag-region className="titlebar">
      <button className="titlebar-button" id="titlebar-config">
        <Config />
      </button>
      <button className="titlebar-button" id="titlebar-minimize">
        <Min />
      </button>
      <button className="titlebar-button" id="titlebar-close">
        <Exit />
      </button>
    </div>
  )
}

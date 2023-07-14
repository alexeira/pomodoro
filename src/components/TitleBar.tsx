import { Config } from './icons/Config'
import { Exit } from './icons/Exit'
import { Min } from './icons/Min'

export function TitleBar() {
  return (
    <div data-tauri-drag-region className="titlebar">
      <div className="titlebar-button" id="titlebar-config">
        <Config />
      </div>
      <div className="titlebar-button" id="titlebar-minimize">
        <Min />
      </div>
      <div className="titlebar-button" id="titlebar-close">
        <Exit />
      </div>
    </div>
  )
}

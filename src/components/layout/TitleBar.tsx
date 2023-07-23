import { appWindow } from '@tauri-apps/api/window'

import { Exit, Min } from '../icons/TitleBarIo'

import './TitleBar.css'

export function TitleBar() {
  async function closeWindow() {
    await appWindow.close()
  }

  async function minimizeWindow() {
    await appWindow.minimize()
  }

  return (
    <div data-tauri-drag-region className="titlebar" tabIndex={-1}>
      {/* <button className="titlebar-button" id="titlebar-config">
        <Config />
      </button> */}
      <button
        className="titlebar-button"
        id="titlebar-minimize"
        tabIndex={-1}
        onClick={minimizeWindow}
      >
        <Min />
      </button>
      <button className="titlebar-button" id="titlebar-close" tabIndex={-1} onClick={closeWindow}>
        <Exit />
      </button>
    </div>
  )
}

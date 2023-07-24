# Pomodoro Timer with Tauri

![image](https://github.com/alexeira/pomodoro/assets/102609365/0ec687f9-d7fc-4bc9-9920-5452ceb6c8e9)

A simple desktop pomodoro timer made with `React` and `Tauri` for learning purposes.

## Stack
- [Tauri](https://tauri.app/) - Build an optimized, secure, and frontend-independent application for multi-platform deployment.
- [Vite](https://vitejs.dev/) - A fast build tool.
- [React](https://es.react.dev/) - A library for building UI.
- [TypeScript](https://www.typescriptlang.org/) - A typed JavaScript.

## Details

By default the application works with:

- 25 minute cycles
- After one cycle comes a 5 minute shortbreak.
- After four cycles comes a 15-minute break.
- After completing a cycle a small alarm will sound and the next cycle will start at a pause

## Try it locally
In order to test the project locally you must first follow the tauri guide of [prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites), after you complete them:
```bash
pnpm i 
pnpm tauri dev # for desktop view or:
pnpm dev # for localhost
```


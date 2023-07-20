// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn my_custom_command(invoke_message: String) {
    println!("I was invoked from JS!, with this message: {invoke_message}")
}

#[tauri::command]
fn hello_from_rust() -> String {
    "Hello from Rust".into()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command, hello_from_rust])
        .run(tauri::generate_context!())
        .expect("failder to run app")
}

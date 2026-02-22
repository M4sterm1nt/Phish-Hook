// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    // This calls the 'run' function in your lib.rs
    phish_hook_lib::run();
}
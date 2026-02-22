# 🪝 Phish Hook: Email Phishing Analysis Tool

Phish Hook is a lightweight desktop security suite designed to dissect `.eml` files and expose common phishing tactics before they hit your team.

## 🚀 Key Features
- **Header Fingerprinting:** Cross-references `From`, `Reply-To`, and `Return-Path`.
- **Domain Verification:** Checks for DNS resolution and sender spoofing.
- **Heuristic Engine:** Flags suspicious keywords like "reset", "urgent", and "verify".
- **Built for Speed:** Rust-based desktop shell with a Python analysis sidecar.

## 🛠️ Built With
- **Frontend:** HTML5, CSS3, JavaScript
- **Desktop Framework:** [Tauri v2](https://v2.tauri.app/) (Rust)
- **Analysis Engine:** Python 3.12 (compiled as a Sidecar)

## 📦 Installation
1. Go to the [Releases](https://github.com/M4sterm1nt/Phish-Hook/releases) page.
2. Download `phish-hook_0.1.0_x64-setup.exe`.
3. Run the installer (Click 'More Info' -> 'Run Anyway' if prompted).
4. ## 🚀 Installation & First Run (IMPORTANT)
As this is an open-source beta, Windows security requires a manual step to allow the analysis engine to run:
   . **Enable Engine:** - Navigate to your installation folder: `C:\Users\%USERNAME%\AppData\Local\phish-hook`
   - Locate `backend.exe`.
   - **Double-click it** and select **"Allow Access"** if a Firewall prompt appears.
  . **Launch Phish Hook:** Open the app from your Start Menu and start analyzing!

---
*Disclaimer: This tool is for educational and security-awareness purposes.*

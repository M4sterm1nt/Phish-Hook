const { Command } = window.__TAURI__.shell;
const { open } = window.__TAURI__.opener;

// 1. Start Backend Sidecar
async function launchBackend() {
  try {
    // Matching the 'name' in default.json
    const command = Command.sidecar('binaries/backend');
    const child = await command.spawn();
    
    console.log("✅ Backend Engine Started. PID:", child.pid);
  } catch (err) {
    console.error("❌ Sidecar Error:", err);
  }
}

launchBackend();

// 2. Analysis Logic
window.handleAnalyze = async () => {
  const fileInput = document.getElementById('emailFile');
  const resultDiv = document.getElementById('result');
  const btn = document.querySelector('.analyze-btn');
  
  if (!fileInput.files[0]) return alert("Please select an .eml file first!");

  // UI Loading State
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<div class="spinner"></div> Analyzing...`;
  resultDiv.style.display = 'none';

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('http://127.0.0.1:8000/analyze', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    console.log("Full Backend Response:", data);

    // Build Verbose Report
    let html = `<h2 style="margin-top:0">Analysis Results</h2>`;
    html += `<p><strong>Verdict:</strong> ${data.verdict || 'Unknown'}</p>`;
    html += `<p><strong>Risk Score:</strong> ${data.score ?? '0'}/100</p>`;
    
    // Using 'findings' as identified in your console log
    const reportDetails = data.findings || [];
    
    if (Array.isArray(reportDetails) && reportDetails.length > 0) {
      html += `<strong>Detailed Findings:</strong><ul>`;
      reportDetails.forEach(item => {
        html += `<li>⚠️ ${item}</li>`;
      });
      html += `</ul>`;
    } else {
      html += `<p style="color: #888;">No specific threat markers returned.</p>`;
    }

    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';

  } catch (err) {
    resultDiv.innerHTML = `<p style="color: #ff5252">❌ Connection Error: Is the backend running?</p>`;
    resultDiv.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
};

// 3. Link Opener
window.openLink = async (url) => {
  try { await open(url); } catch (e) { console.error(e); }
};
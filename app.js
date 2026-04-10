const N8N_WEBHOOK_URL = "http://localhost:5678/webhook/daily-planner";

async function generatePlan() {
  const taskInput = document.getElementById("taskInput").value.trim();
  const btn = document.getElementById("planBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");
  const outputSection = document.getElementById("outputSection");
  const errorMsg = document.getElementById("errorMsg");

  if (!taskInput) {
    alert("Please enter your tasks first!");
    return;
  }

  btn.disabled = true;
  btnText.textContent = "Planning your day...";
  spinner.style.display = "block";
  outputSection.style.display = "none";
  errorMsg.style.display = "none";

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tasks: taskInput })
    });

    if (!response.ok) throw new Error("n8n error");

    const data = await response.json();
    
    // --- DEBUGGING LINE: Open F12 console in browser to see this! ---
    console.log("Data received from n8n:", data); 

    // We use || [] as a fallback so it doesn't say "undefined" if n8n fails
    renderSchedule(data.schedule || []);
    renderTips(data.tips || []);
    
    outputSection.style.display = "flex";

  } catch (err) {
    console.error("Fetch Error:", err);
    errorMsg.style.display = "block";
  } finally {
    btn.disabled = false;
    btnText.textContent = "✨ Generate My Day Plan";
    spinner.style.display = "none";
  }
}

function renderSchedule(items) {
  const container = document.getElementById("scheduleContent");
  container.innerHTML = "";
  
  // If items is empty or not an array, show a friendly message
  if (!items || !Array.isArray(items) || items.length === 0) {
    container.innerHTML = `<p style="color:#888">No schedule format received. Check n8n output.</p>`;
    return;
  }

  items.forEach(item => {
    const block = document.createElement("div");
    block.className = "time-block";
    block.innerHTML = `
      <div class="time-label">${item.time || 'N/A'}</div>
      <div class="task-name">${item.task || 'No task name'}</div>
    `;
    container.appendChild(block);
  });
}

function renderTips(tips) {
  const container = document.getElementById("tipsContent");
  container.innerHTML = "";
  const icons = ["🎯", "⚡", "🧘", "📌", "🔋"];

  if (!tips || !Array.isArray(tips) || tips.length === 0) {
    container.innerHTML = `<p style="color:#888">No tips received.</p>`;
    return;
  }

  tips.forEach((tip, i) => {
    const div = document.createElement("div");
    div.className = "tip-item";
    div.innerHTML = `
      <span class="tip-icon">${icons[i % icons.length]}</span>
      <span>${tip}</span>
    `;
    container.appendChild(div);
  });
}

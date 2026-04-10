# AI-Daily-Planner


##  1. Business Problem

In today’s fast-paced lifestyle, people struggle with:

* Poor time management
* Overloaded task lists
* Lack of prioritization
* Reduced productivity

Most users:

* Write tasks manually
* Fail to organize them efficiently
* Don’t get intelligent suggestions

 **Problem:**
There is no simple system that can automatically convert raw tasks into a **structured, optimized daily schedule with actionable tips**.

---

##  2. Possible Solution

A smart system that:

* Accepts raw user tasks
* Uses AI to:

  * Extract tasks
  * Schedule them efficiently
  * Provide productivity tips

 Delivered via:

* Simple web interface
* Automated backend workflow

---

##  3. Implemented Solution

We built an **AI-powered Daily Planner** using:

```
User Input → Website → n8n Workflow → Groq AI → Structured Output
```

### Features:

* Converts raw text into a time-based schedule
* Generates intelligent productivity tips
* Fully automated workflow using n8n
* Fast AI responses using Groq

---

## 🛠️ 4. Tech Stack Used

| Layer     | Technology                            |
| --------- | ------------------------------------- |
| Frontend  | HTML, CSS, JavaScript                 |
| Backend   | n8n (Workflow Automation)             |
| AI Model  | Groq (LLaMA 3.3 70B)                  |
| API       | REST API (Groq OpenAI-compatible API) |
| Dev Tools | VS Code, Git                          |
| Runtime   | Node.js                               |

---

##  5. Architecture Diagram

```
           ┌───────────────┐
           │   Web UI      │
           │ (index.html)  │
           └──────┬────────┘
                  │
                  ▼
         ┌──────────────────┐
         │  n8n Webhook     │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Task Extractor   │
         │ (Groq API)       │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Parse Tasks      │
         │ (Code Node)      │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Scheduler AI     │
         │ (Groq API)       │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Save Schedule    │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Coach AI         │
         │ (Groq API)       │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Format Response  │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Web UI Output    │
         └──────────────────┘
```

---

##  6. How to Run Locally

### Step 1: Install Requirements

```bash
node --version
npm --version
```

Install n8n:

```bash
npm install -g n8n
```

---

### Step 2: Start n8n

```bash
n8n start
```

Open:

```
http://localhost:5678
```

---

### Step 3: Setup Workflow

* Create nodes as per architecture
* Add Groq API key
* Activate workflow

---

### Step 4: Run Frontend

* Open `index.html` using Live Server
* Enter tasks
* Click **Generate Plan**

---

##  7. References & Resources

* Groq API → https://groq.com
* n8n Docs → https://docs.n8n.io
* Node.js → https://nodejs.org
* Git → https://git-scm.com

---

##  8. Screenshots

* UI Input
  <img width="1399" height="845" alt="image" src="https://github.com/user-attachments/assets/6e30e97b-9791-4521-ab31-74bca3f8b4c0" />

* n8n Workflow
  <img width="1721" height="506" alt="image" src="https://github.com/user-attachments/assets/0936eeb6-3790-4448-a393-1a3ffa5b8325" />

* Output Schedule
  <img width="1745" height="738" alt="image" src="https://github.com/user-attachments/assets/9bf6b902-ee9d-4957-b068-68dae00dc345" />
  <img width="1182" height="766" alt="image" src="https://github.com/user-attachments/assets/a6228557-df50-4506-bccd-0af7258fb725" />
  <img width="1157" height="599" alt="image" src="https://github.com/user-attachments/assets/109f97d1-d255-49f6-a80f-764a4a333298" />



 
---

##  10. Problems Faced & Solutions

---

###  Problem 1: Tasks showing N/A

**Cause:**

* Merge node not combining data properly

**Solution:**

* Switched to sequential workflow instead of parallel

---

### Problem 2: Scheduler output not reaching final node

**Cause:**

* n8n executes branches independently

**Solution:**

* Removed parallel execution
* Passed data sequentially

---

###  Problem 3: JSON parsing errors

**Cause:**

* AI returned formatted text instead of JSON

**Solution:**

* Strict prompts
* Clean parsing logic

---

###  Problem 4: Invalid JSON Body in HTTP Request

**Cause:**

* Line breaks inside JSON
* Using `={{ }}` in JSON mode

**Solution:**

* Switched to "Using Fields Below"
* Used expressions properly

---

###  Problem 5: Code node not reading both inputs

**Cause:**

* n8n processes inputs separately

**Solution:**

* Changed execution flow
* Avoided dependency on Merge

---

##  11. Key Learnings

* n8n execution model is **not parallel-friendly by default**
* Always validate JSON strictly
* AI responses must be constrained
* Workflow design is more important than code

---

##  12. Future Enhancements

* User authentication
* Calendar integration (Google Calendar)
* Mobile app version
* Notifications & reminders

---


##  Conclusion

This project demonstrates how AI + workflow automation can solve real-world productivity problems by transforming raw inputs into structured, actionable outputs.



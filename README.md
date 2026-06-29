# 🌟 Community Hero
### AI-Powered Civic Issue Reporting Platform

> An agentic AI platform that automates the full lifecycle of community infrastructure issue reporting — from photo validation to predictive maintenance.

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](http://localhost:5000)
[![Gemini AI](https://img.shields.io/badge/Gemini-1.5%20Flash-blue)](https://aistudio.google.com)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green)](https://nodejs.org)

---

## 🚨 Problem Statement

Community infrastructure problems — potholes, water leakages, waste dumping — are reported in a fragmented, unstructured way. This leads to:

- Citizens having **no visibility** into complaint status
- Municipal bodies **unable to prioritize** repairs
- A **"transparency gap"** that erodes public trust
- **Reactive maintenance** instead of proactive resource allocation

---

## 💡 Solution

**Community Hero** uses Agentic AI to automate the entire lifecycle of a civic issue:

```
Citizen snaps photo → Gemini AI analyzes → Severity assigned → 
Department notified → Community tracks → Issue resolved ✅
```

---

## 🔄 Agentic AI Loop

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   OBSERVE   │ →  │   REASON    │ →  │     ACT     │ →  │  FALLBACK   │
│             │    │             │    │             │    │             │
│ User uploads│    │ Gemini 1.5  │    │ Push to     │    │ If conf<70% │
│ photo + GPS │    │ Flash rates │    │ Firestore + │    │ route to    │
│ metadata    │    │ severity    │    │ notify dept │    │ community   │
│             │    │ 1-5 + conf% │    │ + update    │    │ verification│
│             │    │             │    │ dashboard   │    │ queue       │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## ✨ Key Features

### 🤖 AI Triage Agent (Gemini 1.5 Flash)
- Real photo analysis with severity scoring (1-5)
- Automatic issue categorization
- GPS-based geolocation tagging
- Confidence scoring with smart routing

### 👥 Human-in-the-Loop Fallback
- AI confidence < 70% → Community verification queue
- Crowd-based confirm/reject voting
- Eliminates fake reports automatically

### 📊 Transparency Dashboard
- Live issue map with color-coded pins
- Real-time status: Open → In Progress → Resolved
- Filter by type: Pothole, Leakage, Waste, Critical

### 🔮 Predictive Maintenance Engine
- Analyzes report density across zones
- Flags high-risk areas before failure
- Budget allocation recommendations

### 🌙 Dark/Light Mode
- Full theme support for all screens

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js + Express |
| AI Reasoning | Gemini 1.5 Flash (Google AI Studio) |
| Database | In-memory (Firebase ready) |
| Deployment | Google Cloud Run ready |

---

## 🟡 Google Technologies

| Technology | Usage |
|---|---|
| **Google AI Studio** | Gemini 1.5 Flash for image triage |
| **Gemini 1.5 Flash** | Severity scoring, categorization |
| **Google Cloud Run** | Scalable backend deployment |
| **Firebase** | Real-time database (integration ready) |

---

## 🚀 Setup & Run

### Prerequisites
- Node.js v18+
- Google AI Studio API key

### Installation

```bash
# Clone the repo
git clone https://github.com/hellylalkiya-29/Community-hero-platform.git
cd Community-hero-platform

# Install dependencies
npm install

# Create .env file
echo "GEMINI_API_KEY=your_api_key_here" > .env

# Start server
node server.js
```

Open browser: **http://localhost:5000**

---

## 📡 API Reference

### POST `/api/triage`
Analyze image with Gemini AI

```json
Request:
{
  "image": "<base64>",
  "issueType": "Pothole / Road damage",
  "location": "MG Road",
  "description": "Large pothole"
}

Response:
{
  "success": true,
  "result": {
    "detected_type": "Pothole",
    "severity": 4,
    "severity_label": "High",
    "confidence": 87,
    "action": "official_queue",
    "department": "PWD",
    "reasoning": "Large pothole detected with significant depth"
  }
}
```

### POST `/api/issues` — Submit issue
### GET `/api/issues` — Get all issues
### GET `/api/verify` — Get verification queue
### POST `/api/verify/:id/vote` — Cast vote
### GET `/api/predict` — Get risk zones
### GET `/api/stats` — Get dashboard stats

---

## 📁 Project Structure

```
Community-hero-platform/
├── Community Hero Platform/
│   └── community_hero_platform.html  # Full frontend
├── server.js                          # Express backend + Gemini AI
├── package.json
├── .gitignore
└── README.md
```

---

## 🏆 Hackathon Highlights

### Agentic Depth (20% weightage)
- ✅ Full **Observe → Reason → Act → Fallback** cycle
- ✅ Real **Gemini 1.5 Flash** image analysis
- ✅ **Human-in-the-loop** when AI confidence < 70%
- ✅ Automated department routing
- ✅ Predictive failure detection

### Google Technologies (20% weightage)
- ✅ Google AI Studio — Gemini 1.5 Flash
- ✅ Google Cloud Run ready
- ✅ Firebase integration ready

---

## 👩‍💻 Developer

**Helly Lalkiya**
- GitHub: [@hellylalkiya-29](https://github.com/hellylalkiya-29)

---

## 📄 License

MIT License

---

*Built with ❤️ for smarter, more transparent cities* 🌆
BY Helly Lalkiya 

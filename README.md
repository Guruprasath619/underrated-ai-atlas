# 🗺️ Underrated AI Atlas

[![Deploy React Atlas to GitHub Pages](https://github.com/Guruprasath619/underrated-ai-atlas/actions/workflows/deploy.yml/badge.svg)](https://github.com/Guruprasath619/underrated-ai-atlas/actions/workflows/deploy.yml)

**[✨ View the Live Application Here](https://guruprasath619.github.io/underrated-ai-atlas/)**

An interactive directory and deployment guide for 30 genuinely underrated open-source, enterprise, and edge AI models. Designed with a modern, typography-driven "Neo-Atlas" aesthetic, this tool helps developers and researchers discover, compare, and instantly deploy models that exist outside the usual frontier AI hype cycle.

---

## ⚡ Features

* **Real-Time Index Search:** Instantly filter 30+ models by parameter count, architecture type (MoE, Mamba, Dense), or specific use-cases (RAG, Math, OCR).
* **The "Mapofile" Drawer:** A smooth, edge-to-edge slide-out bento box UI that provides deep architectural context without losing your place in the directory.
* **Instant Deployment Module:** Built-in code snippets for immediate testing. Provides one-click copy logic for:
  * Local CLI execution (Ollama)
  * Python integration (Hugging Face Transformers)
  * REST / SDK Access (Cohere, Databricks, AI21, NVIDIA NIM)
* **Categorized Discovery:** Models are strictly curated into Open-Source Research, Enterprise/SQL, Code Generation, Multilingual, Edge/Efficient, and Novel Architectures.

---

## 🛠️ Tech Stack

This project was built entirely in the browser and deployed via CI/CD pipelines.

* **Frontend Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (Custom high-contrast, off-white "editorial" theme)
* **Icons:** Lucide React
* **Deployment & Hosting:** GitHub Actions to GitHub Pages

---

## 💻 Local Development

If you want to pull this repository down and run it on your own machine, ensure you have [Node.js](https://nodejs.org/) installed, then run the following commands:

```bash
# 1. Clone the repository
git clone [https://github.com/Guruprasath619/underrated-ai-atlas.git](https://github.com/Guruprasath619/underrated-ai-atlas.git)

# 2. Navigate into the directory
cd underrated-ai-atlas

# 3. Install dependencies
npm install

# 4. Start the local Vite development server
npm run dev

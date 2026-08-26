import React from 'react';

/**
 * SEO Introduction Component
 * Provides semantic HTML with proper heading hierarchy for search engines
 * This content is server-rendered in meta tags but displayed for screen readers & bots
 */
export default function SEOIntro() {
  return (
    <section className="sr-only" aria-label="About Underrated AI Atlas">
      <h1>Underrated AI Atlas – Interactive Directory of Hidden-Gem AI Models</h1>
      
      <article>
        <h2>What is Underrated AI Atlas?</h2>
        <p>
          Underrated AI Atlas is an interactive directory and deployment guide for 50+ genuinely underrated open-source, 
          enterprise, and edge AI models. Built with React and Tailwind CSS, this tool helps developers, researchers, and 
          enterprises discover underrated large language models that don't get mainstream attention but deliver exceptional 
          performance and unique capabilities.
        </p>
        
        <h2>Features and Capabilities</h2>
        <p>
          The platform offers real-time index search to instantly filter 50+ models by parameter count, architecture type 
          (MoE, Mamba, Dense), or specific use-cases (RAG, Math, OCR). The interactive drawer provides deep architectural 
          context with one-click code copy functionality for immediate deployment. Models are strictly curated into six 
          categories: Open-Source Research, Enterprise/SQL, Code Generation, Multilingual, Edge/Efficient, and Novel Architectures.
        </p>
        
        <h2>Who Is This For?</h2>
        <p>
          This tool is designed for machine learning engineers, data scientists, researchers, and developers who want to 
          explore underrated AI models beyond GPT-4 and mainstream options. Whether you're building a private LLM application, 
          deploying on edge devices, or researching novel architectures, Underrated AI Atlas provides instant access to 
          deployment code for Python, CLI (Ollama), and REST APIs.
        </p>
        
        <h2>AI Models by Category</h2>
        
        <h3>Research Models</h3>
        <p>
          Open-source research models with full training transparency. Including AI2 OLMo 7B—a fully open model with transparent 
          training data, code, and weights. EleutherAI Pythia for interpretability research. LLM360 K2 with 65B parameters and 
          fully open datasets. These models prioritize scientific advancement and reproducibility over commercial performance.
        </p>
        
        <h3>Enterprise Models</h3>
        <p>
          Production-ready models optimized for business use cases. Command R+ delivers best-in-class RAG and tool use. DBRX 
          excels at SQL and reasoning with 132B parameters. Arctic offers dense-MoE hybrid architecture for SQL generation. 
          These models balance power with cost-efficiency for enterprise deployments.
        </p>
        
        <h3>Code Generation Models</h3>
        <p>
          Specialized models for software development. StarCoder2 trained on Software Heritage archive. MPT-30B with 8K context. 
          Gorilla specializes in function calling and API orchestration. Perfect for AI-powered code assistants and development tools.
        </p>
        
        <h3>Multilingual Models</h3>
        <p>
          Models supporting 20+ languages. Yi-Lightning ranks near top of LLM benchmarks for Chinese and English. Exaone covers 
          Korean-English. Aya 23 covers 23 languages with deep localization. For global applications requiring non-English support.
        </p>
        
        <h3>Edge & Efficient Models</h3>
        <p>
          Compact models for on-device and resource-constrained deployment. Phi-3.5 MoE with just 6.6B active parameters rivaling 
          much larger models. Danube 3 at 1.8B for private QA. Perfect for mobile, IoT, and low-latency applications.
        </p>
        
        <h3>Novel Architecture Models</h3>
        <p>
          Cutting-edge architectures beyond standard transformers. Jamba—first production-grade Mamba-Transformer hybrid with 256K 
          context. Reka Core—multimodal model supporting text, image, video, and audio. For researchers exploring next-generation 
          AI architectures.
        </p>
        
        <h2>Instant Deployment Code</h2>
        <p>
          Every model includes copy-paste ready deployment code for three platforms: Local CLI execution via Ollama, Python 
          integration using Hugging Face Transformers, REST and SDK access through enterprise providers like Cohere, Databricks, 
          AI21, and NVIDIA NIM. No complex setup required—just copy and run.
        </p>
        
        <h2>Technology Stack</h2>
        <p>
          Built entirely in the browser using React 18 for UI components, Vite for fast builds, Tailwind CSS for styling with 
          custom editorial theme, Lucide React for consistent iconography, and deployed via GitHub Actions to GitHub Pages for 
          instant access.
        </p>
        
        <h2>Why Underrated AI Models Matter</h2>
        <p>
          Mainstream AI coverage focuses on GPT-4, Claude, and Gemini. But innovative companies are using lesser-known models 
          like OLMo, DBRX, and Jamba for specific use cases where they excel. Underrated AI Atlas surfaces these hidden gems, 
          enabling developers to build faster, cheaper, and more innovative AI applications tailored to their needs.
        </p>
      </article>
    </section>
  );
}

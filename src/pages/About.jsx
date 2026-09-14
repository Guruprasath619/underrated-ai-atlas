import React from 'react';
import { ArrowRight, BookOpen, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 sticky top-0 z-40 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-2 text-xl font-bold hover:text-cyan-400 transition">
            ← Back to Atlas
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Underrated AI Atlas
          </h1>
          <p className="text-lg text-slate-300 mb-4">
            An interactive directory celebrating the open-source and enterprise AI models that deserve more attention.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-12 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-slate-300">
                The mainstream AI landscape is dominated by a few household names. Meanwhile, 50+ exceptional open-source 
                and enterprise models—each with unique strengths in efficiency, specialization, or innovation—remain hidden 
                gems. Underrated AI Atlas exists to surface these models, empower developers to make informed choices, and 
                prove that the best tool for your job isn't always the most famous one.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">The Problem We Solve</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <h3 className="font-semibold text-red-300 mb-2">Discovery Bottleneck</h3>
              <p className="text-sm text-slate-300">
                Finding the right model for your use case requires sifting through papers, benchmarks, and Reddit threads.
              </p>
            </div>
            <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <h3 className="font-semibold text-red-300 mb-2">Deployment Friction</h3>
              <p className="text-sm text-slate-300">
                Even when you find a good model, getting it running locally or in production requires scattered documentation.
              </p>
            </div>
            <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <h3 className="font-semibold text-red-300 mb-2">Narrow Benchmarks</h3>
              <p className="text-sm text-slate-300">
                Public benchmarks often miss specialized strengths: one model excels at code, another at RAG, another at edge.
              </p>
            </div>
            <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <h3 className="font-semibold text-red-300 mb-2">Cost Awareness</h3>
              <p className="text-sm text-slate-300">
                Smaller, open-source alternatives can deliver identical quality at 90% lower cost but remain overlooked.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <span className="text-2xl font-bold text-cyan-400">1</span>
              <div>
                <h3 className="font-semibold mb-1">Explore by Category</h3>
                <p className="text-sm text-slate-300">
                  Browse 50+ models organized into 6 categories: Research, Enterprise, Code, Multilingual, Edge, and Novel Architectures.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <span className="text-2xl font-bold text-cyan-400">2</span>
              <div>
                <h3 className="font-semibold mb-1">Search & Filter</h3>
                <p className="text-sm text-slate-300">
                  Use real-time search to filter by parameters, tags, and use cases. Find exactly what you need in seconds.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <span className="text-2xl font-bold text-cyan-400">3</span>
              <div>
                <h3 className="font-semibold mb-1">One-Click Deployment</h3>
                <p className="text-sm text-slate-300">
                  Copy-paste deployment code for Python, CLI (Ollama), or REST APIs. Get running in minutes, not hours.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <span className="text-2xl font-bold text-cyan-400">4</span>
              <div>
                <h3 className="font-semibold mb-1">Learn More</h3>
                <p className="text-sm text-slate-300">
                  Dive into model architecture, parameter counts, training data transparency, and real-world performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curation Philosophy */}
        <section className="mb-12 p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Curation Philosophy</h2>
              <p className="text-slate-300 mb-3">
                Every model in the Atlas is hand-selected based on:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Technical Innovation:</strong> Does it introduce a novel architecture, efficiency technique, or capability?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Open Transparency:</strong> For research models, are training data, code, and weights fully disclosed?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Real-World Performance:</strong> Does it excel at specific tasks that matter to developers?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Overlooked Potential:</strong> Has it been overshadowed by larger, more famous models?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span><strong>Deployment Viability:</strong> Can it run locally, on edge, or self-hosted in production?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-cyan-400" />
            Who This Is For
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-500 transition">
              <h3 className="font-semibold text-cyan-300 mb-2">🔬 ML Researchers & Data Scientists</h3>
              <p className="text-sm text-slate-300">
                Discover models with novel architectures (Mamba, Mixtral) and transparent training methodologies.
              </p>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-500 transition">
              <h3 className="font-semibold text-cyan-300 mb-2">💼 Enterprise Teams</h3>
              <p className="text-sm text-slate-300">
                Find production-ready models optimized for SQL, RAG, reasoning, and cost-conscious deployments.
              </p>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-500 transition">
              <h3 className="font-semibold text-cyan-300 mb-2">👨‍💻 Developers Building AI Apps</h3>
              <p className="text-sm text-slate-300">
                Copy-paste deployment code and get your model running locally or on cloud in minutes.
              </p>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-500 transition">
              <h3 className="font-semibold text-cyan-300 mb-2">🌍 Teams Needing Multilingual & Edge</h3>
              <p className="text-sm text-slate-300">
                Deploy specialized models for non-English languages, mobile devices, or low-resource environments.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="mb-12 p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-slate-300 mb-6">
            Discover your next favorite AI model in the interactive directory.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition"
          >
            Browse the Atlas <ArrowRight className="w-4 h-4" />
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-slate-400 text-sm">
        <p>Underrated AI Atlas © 2026 | Celebrating the Models Worth Your Time</p>
      </footer>
    </div>
  );
}

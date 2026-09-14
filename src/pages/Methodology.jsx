import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, BarChart3, Zap, Award } from 'lucide-react';

export default function Methodology() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
            Our Methodology
          </h1>
          <p className="text-lg text-slate-300">
            How we select, evaluate, and present 50+ underrated AI models with transparency and rigor.
          </p>
        </section>

        {/* Overview */}
        <section className="mb-12 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Selection Criteria</h2>
          <p className="text-slate-300 mb-6">
            Each model in Underrated AI Atlas is evaluated against a rigorous set of criteria to ensure relevance, 
            quality, and genuine innovation. We balance openness, performance, and practical deployability.
          </p>
        </section>

        {/* Criteria Sections */}
        <section className="space-y-4 mb-12">
          
          {/* Criterion 1: Technical Innovation */}
          <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition">
            <button
              onClick={() => toggleSection('innovation')}
              className="w-full p-6 bg-slate-800/20 hover:bg-slate-800/40 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold">Technical Innovation</h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition transform ${expandedSection === 'innovation' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'innovation' && (
              <div className="p-6 border-t border-slate-700 bg-slate-900/30 text-slate-300">
                <p className="mb-4">
                  Models must demonstrate genuine innovation in one or more areas:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Novel Architecture:</strong> Mamba state-space models, Mixtral MoE, dense-MoE hybrids, or other breakthroughs.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Efficiency Innovation:</strong> Models with superior speed, memory efficiency, or cost-effectiveness relative to size.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Specialization:</strong> Models optimized for a specific, valuable domain (code, math, multilingual, SQL, RAG).</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Training Methodology:</strong> Models with novel approaches to alignment, instruction-tuning, or dataset curation.</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-400">
                  <em>Not included:</em> Incremental fine-tunes, commercial-only models without research innovation, or copies of popular architectures.
                </p>
              </div>
            )}
          </div>

          {/* Criterion 2: Open Transparency */}
          <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition">
            <button
              onClick={() => toggleSection('transparency')}
              className="w-full p-6 bg-slate-800/20 hover:bg-slate-800/40 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Open Transparency</h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition transform ${expandedSection === 'transparency' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'transparency' && (
              <div className="p-6 border-t border-slate-700 bg-slate-900/30 text-slate-300">
                <p className="mb-4">
                  We prioritize models where the community can inspect, reproduce, and build upon the work:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Open Weights:</strong> Model weights available via Hugging Face, GitHub, or direct download.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Open Source Code:</strong> Training, inference, and fine-tuning code publicly available.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Training Data Transparency:</strong> Dataset composition, filtering, and methodology disclosed.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Research Papers:</strong> Technical details published in peer-reviewed venues or detailed technical reports.</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-400">
                  <em>Note:</em> Enterprise models may have closed weights but must demonstrate transparent training methodology.
                </p>
              </div>
            )}
          </div>

          {/* Criterion 3: Real-World Performance */}
          <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition">
            <button
              onClick={() => toggleSection('performance')}
              className="w-full p-6 bg-slate-800/20 hover:bg-slate-800/40 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Real-World Performance</h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition transform ${expandedSection === 'performance' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'performance' && (
              <div className="p-6 border-t border-slate-700 bg-slate-900/30 text-slate-300">
                <p className="mb-4">
                  Models are evaluated on metrics that matter to practitioners, not just benchmark leaderboards:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Benchmark Performance:</strong> MMLU, HumanEval, Math, MATH500, GPQA, or domain-specific benchmarks.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Inference Speed:</strong> Tokens/sec on standard hardware (A100, consumer GPU, CPU).</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Memory Efficiency:</strong> Peak memory usage at inference time; quantization viability.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Task-Specific Excellence:</strong> For specialized models, performance on targeted use cases (code, reasoning, function-calling).</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-400">
                  <em>Baseline:</em> Each model must demonstrate performance equal to or better than open alternatives of similar size.
                </p>
              </div>
            )}
          </div>

          {/* Criterion 4: Deployment Viability */}
          <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition">
            <button
              onClick={() => toggleSection('deployment')}
              className="w-full p-6 bg-slate-800/20 hover:bg-slate-800/40 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold">Deployment Viability</h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition transform ${expandedSection === 'deployment' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'deployment' && (
              <div className="p-6 border-t border-slate-700 bg-slate-900/30 text-slate-300">
                <p className="mb-4">
                  We ensure models can actually be deployed in production by developers:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Local Inference Support:</strong> Compatible with Ollama, llama.cpp, vLLM, or Hugging Face Transformers.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Quantization Compatibility:</strong> Works with GGUF, bitsandbytes, or other quantization schemes.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span><strong>API-Ready:</strong> Official endpoints or easy-to-set-up inference APIs via Together, Replicate, or similar.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Documentation Quality:</strong> Clear instructions for Python, CLI, and REST API deployment.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Criterion 5: Overlooked Potential */}
          <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition">
            <button
              onClick={() => toggleSection('overlooked')}
              className="w-full p-6 bg-slate-800/20 hover:bg-slate-800/40 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold">Overlooked Potential</h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition transform ${expandedSection === 'overlooked' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'overlooked' && (
              <div className="p-6 border-t border-slate-700 bg-slate-900/30 text-slate-300">
                <p className="mb-4">
                  The core of Underrated AI Atlas: models that are genuinely underrepresented relative to their quality:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Media Attention Gap:</strong> Delivers top-tier performance but lacks mainstream adoption or press coverage.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Niche Expertise:</strong> Excels at a specific domain where larger models underperform (e.g., SQL, multilingual, math).</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Cost-Benefit Advantage:</strong> Achieves 90%+ of the quality of mainstream models at 1/10th the cost.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Indie/Emerging Teams:</strong> Produced by smaller labs, open-source collectives, or newer organizations doing exceptional work.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </section>

        {/* Data Accuracy & Updates */}
        <section className="mb-12 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Data Accuracy & Updates</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Last Updated:</strong> August 2026. As new models emerge and benchmarks shift, this directory is refreshed quarterly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Benchmark Data:</strong> Sourced from official papers, OpenCompass, LMArena, and independent reproducible evaluations.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Deployment Instructions:</strong> Tested on standard hardware (NVIDIA A100, RTX 3090, CPU) to ensure accuracy.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Model Weights & Links:</strong> Verified to point to official, maintained repositories (Hugging Face, GitHub, official sites).</span>
            </li>
          </ul>
        </section>

        {/* Exclusions */}
        <section className="mb-12 p-6 bg-red-900/20 border border-red-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-300">What We Don't Include</h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-red-400">✗</span>
              <span>Proprietary-only models (GPT-4, Claude 3, Gemini) — no weights or research transparency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400">✗</span>
              <span>Dead or unmaintained projects — models with no updates in 12+ months or broken deployment links</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400">✗</span>
              <span>Marginal increments — minor fine-tunes or checkpoint releases without significant innovation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400">✗</span>
              <span>Unproven claims — models without published benchmarks, papers, or reproducible results</span>
            </li>
          </ul>
        </section>

        {/* Future Phases */}
        <section className="mb-12 p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Future Research (Phase 3+)</h2>
          <p className="text-slate-300 mb-4">
            Beyond this methodology, we plan to publish:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Independent Benchmarks:</strong> Custom evaluations on underrated model strengths that general benchmarks miss.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Hardware Analysis:</strong> Detailed performance on cloud GPUs, consumer hardware, and edge devices.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Cost-Performance Analysis:</strong> ROI comparisons: total cost of ownership vs. quality delivered.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">→</span>
              <span><strong>Case Studies:</strong> Real teams deploying underrated models in production and their outcomes.</span>
            </li>
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-slate-400 text-sm">
        <p>Underrated AI Atlas © 2026 | Celebrating the Models Worth Your Time</p>
      </footer>
    </div>
  );
}

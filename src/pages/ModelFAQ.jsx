import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ModelFAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 'what-underrated',
      question: 'What does "underrated" actually mean?',
      answer: 'By "underrated," we mean models that deliver exceptional quality, innovation, or value but lack mainstream recognition. This could mean:\n\n• Performance: A model that ranks top-tier on benchmarks but flies under the radar compared to famous alternatives.\n• Specialization: A model that dominates in one domain (e.g., code generation, math reasoning, multilingual) where larger generalist models underperform.\n• Cost-Effectiveness: A smaller model that achieves 90%+ the quality of larger alternatives at a fraction of the cost.\n• Innovation: Novel architectures or training methods that deserve attention but haven\'t yet captured industry mindshare.\n\nWe deliberately exclude proprietary models (GPT-4, Claude, Gemini) because the comparison isn\'t fair—we want to highlight open alternatives that can be truly owned and deployed by your team.'
    },
    {
      id: 'how-selected',
      question: 'How do you select which models to include?',
      answer: 'Every model in the Atlas passes five filters:\n\n1. **Technical Innovation**: Novel architecture, efficiency technique, or specialized capability.\n2. **Open Transparency**: Open weights, training code, and methodology (for research) or transparent enterprise practices.\n3. **Real-World Performance**: Proven benchmarks and inference speed on standard hardware.\n4. **Deployment Viability**: Can actually be run locally (Ollama, llama.cpp, Transformers) or on cloud APIs.\n5. **Overlooked Potential**: Genuinely underrepresented relative to its quality.\n\nWe don\'t include incremental fine-tunes, dead projects, or models with unproven claims. See our Methodology page for full details.'
    },
    {
      id: 'when-updated',
      question: 'How often is the directory updated?',
      answer: 'The Atlas is refreshed quarterly as the AI landscape moves fast. We monitor:\n• New model releases with genuine innovation\n• Benchmark updates and reproducible evaluations\n• Link integrity and deployment viability\n• Performance improvements or regressions\n\nLast major update: August 2026. New models are added when they meet our criteria; older models are retired if they become unmaintained or superseded.'
    },
    {
      id: 'run-locally',
      question: 'Can I run these models locally on my computer?',
      answer: 'Most models in the Atlas can run locally on consumer hardware:\n\n**Consumer GPU (RTX 4090, 4080)**: Most 7B-13B models run smoothly.\n**Modest GPU (RTX 3090, A40)**: Smaller models (7B) or quantized larger models (13B-70B).\n**CPU-only**: Quantized models with llama.cpp or Ollama (slower but viable for many use cases).\n**Quantization**: Most models support GGUF or bitsandbytes quantization to reduce memory by 50-75%.\n\nEach model listing includes deployment code for Python (Transformers), CLI (Ollama), and REST APIs (vLLM, Together.ai, Replicate). Check the specific code sample for your hardware.'
    },
    {
      id: 'cost-comparison',
      question: 'How do these compare to OpenAI/Anthropic APIs?',
      answer: 'Fundamental difference: OpenAI and Anthropic charge by token. Underrated models are:\n\n**Self-Hosted or Open APIs**: You pay once for hardware, then $0 per token.\n**Smaller but Specialized**: A 7B model fine-tuned for code may beat GPT-3.5 at programming tasks while costing 1/100th.\n**Privacy & Control**: Your data never leaves your infrastructure.\n**Latency & Customization**: Fine-tune and optimize for your exact use case.\n\n**Trade-off**: Requires hosting, but for production workloads processing 1M+ tokens/month, open models become dramatically cheaper. For ad-hoc usage, API services remain simpler.'
    },
    {
      id: 'deployment-options',
      question: 'What deployment options are available?',
      answer: 'Each model supports multiple deployment paths:\n\n1. **Local Inference**:\n   • Python: `transformers` library with CUDA/CPU\n   • CLI: Ollama for one-command setup\n   • Edge: quantized versions on mobile/Raspberry Pi\n\n2. **Self-Hosted Cloud**:\n   • vLLM on EC2, GKE, or AKS\n   • Ray Serve for distributed inference\n   • Hugging Face Spaces (free tier available)\n\n3. **Managed APIs**:\n   • Together.ai, Replicate, Fireworks.ai\n   • Official endpoints (some models)\n   • AWS Bedrock or Azure OpenAI (some models)\n\nEach listing includes copy-paste code for Python, CLI, and REST. Choose based on your latency, cost, and control requirements.'
    },
    {
      id: 'commercial-use',
      question: 'Can I use these models commercially?',
      answer: 'Most models have permissive licenses (MIT, OpenRAIL, Apache 2.0), which allow commercial use. Always check:\n\n**License**: Find it in the model card on Hugging Face or the official repo.\n**Open Research Models** (OLMo, Pythia, StarCoder2): Fully commercial-friendly.\n**Some Enterprise Models**: May require commercial licensing or have usage restrictions—check their terms.\n\n**Our Rule of Thumb**: If it says "for research only," we don\'t include it (unless it\'s incredibly innovative). All Atlas models are commercially viable by default.'
    },
    {
      id: 'different-models',
      question: 'What\'s the difference between Research, Enterprise, and Code models?',
      answer: 'Our six categories reflect different strengths:\n\n**Research**: Fully open training, maximum transparency. Great for papers, interpretability work, fine-tuning.\n**Enterprise**: Production-hardened. Optimized for SQL, RAG, tool use, and business logic. Balanced for cost + reliability.\n**Code**: Specialized for code generation, completion, and function calling. Benchmarked on HumanEval, MBPP, etc.\n**Multilingual**: Native support for 20+ languages, not just English. For global teams and localization.\n**Edge**: Small, efficient models for mobile, Raspberry Pi, or latency-critical deployments.\n**Novel**: Experimental architectures (Mamba, Mixtral, hybrid models) pushing the frontier.\n\nPick based on your use case, not your compute budget (we include efficient options in every category).'
    },
    {
      id: 'license-attribution',
      question: 'Do I need to attribute or cite these models?',
      answer: 'Attribution requirements depend on the license:\n\n**MIT, Apache 2.0**: No attribution required, but appreciated.\n**OpenRAIL+**: Requires ethical use acknowledgment; attribute in documentation.\n**Open Training Data**: Some models (OLMo, Pythia) request citations in research.\n\n**Best Practice**: Always include the model name, source link, and publication in your app or documentation. Users appreciate transparency, and it supports the researchers behind the model.\n\nEach model card includes a suggested citation format—link from the Atlas page.'
    },
    {
      id: 'fine-tune',
      question: 'Can I fine-tune these models on my data?',
      answer: 'Yes! Most models support fine-tuning. Common approaches:\n\n**LoRA (Low-Rank Adaptation)**: 95% cheaper than full fine-tuning. Works for all models. See peft library.\n**Full Fine-Tuning**: If you have the VRAM and data (100K+ examples). Use HuggingFace Trainer or axolotl.\n**Continued Pretraining**: For domain-specific language, retrain on unlabeled data.\n**Instruction Tuning**: Align a base model to your tasks with 1K-10K examples.\n\n**ROI Calculation**: A 7B model fine-tuned on your data often beats a 70B base model at your specific task, while running 10x faster and cheaper. We include fine-tuning code for each model.'
    },
    {
      id: 'offline-use',
      question: 'Can I use these models without internet?',
      answer: 'Yes, with local inference:\n\n**Download Once**: Download model weights once (2-70GB depending on size).\n**Run Anywhere**: Ollama, llama.cpp, or Python local server.\n**No API Calls**: Everything runs on your machine; no internet needed after setup.\n\n**Gotchas**: \n• Large models need 16GB+ VRAM for smooth inference.\n• Quantization (4-bit, 8-bit) cuts memory needs in half.\n• Some models have license restrictions on offline redistribution (rare).\n\nFor true offline-capable systems, we recommend 7B-13B quantized models. Check the deployment instructions for your specific hardware.'
    },
    {
      id: 'vs-huggingface',
      question: 'How is this different from just browsing Hugging Face?',
      answer: 'Hugging Face is a brilliant repository, but it\'s a firehose:\n\n**Atlas Adds**:\n• **Curation**: Only 50+ genuinely underrated models, not 1M+ models.\n• **Direct Comparison**: Browse models side-by-side, filter by parameters and tags.\n• **Copy-Paste Deployment Code**: One-click code for Python, CLI, REST—not scattered docs.\n• **Methodology**: Transparent reasoning for what\'s included and why.\n• **Real-World Insights**: Performance on actual hardware, cost analysis, production stories.\n• **Searchability**: Find models by use case (RAG, SQL, multilingual, edge) in seconds.\n\n**Complementary**: Use Hugging Face for the full model library; use Atlas to navigate underrated gems and get running fast.'
    },
    {
      id: 'benchmark-trust',
      question: 'How much should I trust the benchmarks?',
      answer: 'Our stance on benchmarks:\n\n**Use as Signals, Not Gospel**:\n• Different benchmarks (MMLU vs. GSM8K) can rank models differently.\n• Benchmarks don\'t capture every real-world scenario.\n• A model might be weak at MMLU but exceptional at SQL (your use case).\n\n**Our Approach**:\n• Source from official papers, OpenCompass, and LMArena (reproducible).\n• Highlight domain-specific strengths (e.g., Gorilla for function calling).\n• Note where benchmarks might miss (e.g., instruction-following, safety).\n• Plan Phase 3 independent benchmarks on tasks benchmarks ignore.\n\n**Action Item**: Always run a quick eval on your data before production. A 2-hour eval beats months of benchmarks vs. performance mismatches.'
    },
    {
      id: 'future-plans',
      question: 'What\'s planned for Underrated AI Atlas?',
      answer: 'Phase 3-5 roadmap:\n\n**Phase 3**: Original research—independent benchmarks on model strengths, hardware performance, first-hand testing.\n**Phase 4**: Content & distribution—LinkedIn technical posts, Reddit discussions, comprehensive blog articles, earned press.\n**Phase 5**: SEO & visibility—Google Search Console integration, AI search optimization (Perplexity, Brave Search), user feedback loops.\n\nFollow our GitHub repo (Guruprasath619/underrated-ai-atlas) for updates. We\'re building this in public!'
    },
    {
      id: 'suggest-model',
      question: 'How can I suggest a model for inclusion?',
      answer: 'We\'d love suggestions! Open an issue or discussion on our GitHub repo:\n\nhttps://github.com/Guruprasath619/underrated-ai-atlas\n\nTell us:\n• Model name and link\n• Why it\'s underrated\n• Performance metrics or benchmarks\n• License and deployment options\n• Your use case\n\nWe review every suggestion and give detailed feedback on why it was included or excluded.'
    }
  ];

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
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg text-slate-300">
            Everything you need to know about Underrated AI Atlas, selecting models, and deploying them.
          </p>
        </section>

        {/* FAQ Items */}
        <section className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 bg-slate-800/20 hover:bg-slate-800/40 transition flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition transform ${
                    expandedFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedFAQ === faq.id && (
                <div className="p-6 border-t border-slate-700 bg-slate-900/30 text-slate-300 whitespace-pre-wrap">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-16 p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-slate-300 mb-6">
            Open an issue on our GitHub or reach out—we're building this community together.
          </p>
          <a
            href="https://github.com/Guruprasath619/underrated-ai-atlas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition"
          >
            GitHub Issues & Discussions
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

import React, { useState, useMemo } from 'react';
import { 
  Search, FlaskConical, Building2, TerminalSquare, Languages, 
  Cpu, Dna, X, ArrowRight, Database, Activity, Code2, Link as LinkIcon, Box
} from 'lucide-react';

// --- Data Preparation with Deployment Details ---
const categories = [
  { id: 'All', name: 'Index', icon: Box, color: 'bg-stone-800', text: 'text-stone-100' },
  { id: 'Research', name: 'Research', icon: FlaskConical, color: 'bg-[#ccff00]', text: 'text-stone-900' },
  { id: 'Enterprise', name: 'Enterprise', icon: Building2, color: 'bg-[#2563eb]', text: 'text-white' },
  { id: 'Code', name: 'Code', icon: TerminalSquare, color: 'bg-[#ff4d4d]', text: 'text-white' },
  { id: 'Multilingual', name: 'Global', icon: Languages, color: 'bg-[#a855f7]', text: 'text-white' },
  { id: 'Edge', name: 'Edge', icon: Cpu, color: 'bg-[#f97316]', text: 'text-white' },
  { id: 'Novel', name: 'Novel', icon: Dna, color: 'bg-[#14b8a6]', text: 'text-white' },
];

const aiModels = [
  // Research
  { id: 1, name: 'AI2 OLMo 7B', category: 'Research', params: '7B', desc: 'Fully open model from the Allen Institute—open training data, code, logs, and weights.', tags: ['Open Data', 'Science'], platform: 'Hugging Face / GitHub', link: 'https://huggingface.co/allenai/OLMo-7B-Instruct', accessType: 'python', code: 'from transformers import AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("allenai/OLMo-7B")' },
  { id: 2, name: 'AI2 OLMoE', category: 'Research', params: '64B / 7B Act', desc: 'A Mixture of Experts version of OLMo. Strong efficiency and performance with total training transparency.', tags: ['MoE', 'Transparent'], platform: 'Hugging Face', link: 'https://huggingface.co/allenai/OLMoE-1B-7B-0924', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("allenai/OLMoE-1B-7B-0924")' },
  { id: 3, name: 'EleutherAI Pythia', category: 'Research', params: '12B', desc: 'Designed for interpretability research, with multiple checkpoints across training.', tags: ['Interpretability'], platform: 'Hugging Face', link: 'https://huggingface.co/EleutherAI/pythia-12b', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("EleutherAI/pythia-12b")' },
  { id: 4, name: 'LLM360 K2', category: 'Research', params: '65B', desc: 'A 65B model with fully open-source datasets and training logs. Rare large-scale transparency.', tags: ['Logs Open'], platform: 'LLM360 Hub', link: 'https://www.llm360.ai/', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("LLM360/K2")' },
  { id: 5, name: 'CrystalCoder', category: 'Research', params: '7B', desc: 'A code model released with full training transparency, completely open.', tags: ['Code'], platform: 'LLM360 Hub', link: 'https://huggingface.co/LLM360/CrystalCoder', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("LLM360/CrystalCoder")' },
  { id: 6, name: 'Map-Neo', category: 'Research', params: '7B', desc: 'A fully open bilingual English-Chinese model, trained on 4.2T clean tokens.', tags: ['Bilingual'], platform: 'Hugging Face', link: 'https://huggingface.co/m-a-p/Neo-7B', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("m-a-p/Neo-7B")' },
  { id: 7, name: 'BLOOM', category: 'Research', params: '176B', desc: 'The first truly massive multilingual open model (46 languages).', tags: ['Massive', '46 Languages'], platform: 'Hugging Face', link: 'https://huggingface.co/bigscience/bloom', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("bigscience/bloom")' },
  
  // Enterprise
  { id: 8, name: 'Command R+', category: 'Enterprise', params: '104B', desc: 'Best-in-class for RAG, multi-step tool use, and multilingual summarization.', tags: ['RAG', 'Tool Use'], platform: 'Cohere Dashboard', link: 'https://dashboard.cohere.com/', accessType: 'api', code: 'import cohere\nco = cohere.Client("YOUR_API_KEY")\nresponse = co.chat(model="command-r-plus", message="Analyze data")' },
  { id: 9, name: 'DBRX', category: 'Enterprise', params: '132B / 36B Act', desc: 'A fine-grained MoE built for coding, SQL, and reasoning. Open-weight.', tags: ['SQL', 'MoE'], platform: 'Databricks / Hugging Face', link: 'https://huggingface.co/databricks/dbrx-instruct', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("databricks/dbrx-instruct", trust_remote_code=True)' },
  { id: 10, name: 'Arctic', category: 'Enterprise', params: '480B / 17B Act', desc: 'A dense-MoE hybrid optimized for enterprise SQL generation and instruction-following.', tags: ['Enterprise', 'Dense-MoE'], platform: 'Snowflake / Hugging Face', link: 'https://huggingface.co/Snowflake/snowflake-arctic-instruct', accessType: 'api', code: '# Available via Together AI or Replicate API\n# Also deployable via vLLM for enterprise serving' },
  { id: 11, name: 'Nemotron‑4', category: 'Enterprise', params: '340B', desc: 'Released as a reward model and synthetic data generator.', tags: ['Reward Model'], platform: 'NVIDIA NIM', link: 'https://build.nvidia.com/', accessType: 'api', code: '# Access via NVIDIA NIM Microservices\ncurl -X POST "https://integrate.api.nvidia.com/v1/chat/completions"' },
  { id: 12, name: 'Granite 3', category: 'Enterprise', params: '8B, 20B', desc: 'Open-source models purpose-built for business. Small footprint, strong on benchmarks.', tags: ['Business'], platform: 'IBM / Ollama', link: 'https://huggingface.co/ibm-granite', accessType: 'cli', code: 'ollama run granite3-dense:8b' },
  { id: 13, name: 'XGen', category: 'Enterprise', params: '7B', desc: 'Early mover in long-context models (8K) trained with a unique staged data recipe.', tags: ['Long Context'], platform: 'Salesforce AI', link: 'https://huggingface.co/Salesforce/xgen-7b-8k-inst', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("Salesforce/xgen-7b-8k-inst")' },

  // Code
  { id: 14, name: 'StarCoder2', category: 'Code', params: '15B', desc: 'A completely open code model trained on the Software Heritage archive.', tags: ['Software Heritage'], platform: 'Hugging Face', link: 'https://huggingface.co/bigcode/starcoder2-15b', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("bigcode/starcoder2-15b")' },
  { id: 15, name: 'MPT-30B', category: 'Code', params: '30B', desc: 'One of the first open models with an 8K context length.', tags: ['Doc QA'], platform: 'MosaicML', link: 'https://huggingface.co/mosaicml/mpt-30b', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("mosaicml/mpt-30b", trust_remote_code=True)' },
  { id: 16, name: 'MPT-7B', category: 'Code', params: '7B', desc: 'Smaller version trained on a mix of code and prose; highly customizable.', tags: ['Mixed Data'], platform: 'MosaicML', link: 'https://huggingface.co/mosaicml/mpt-7b', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("mosaicml/mpt-7b", trust_remote_code=True)' },
  { id: 17, name: 'Gorilla', category: 'Code', params: '7B', desc: 'Specializes in function calling and API orchestration.', tags: ['API Orchestration'], platform: 'Berkeley Server', link: 'https://gorilla.cs.berkeley.edu/', accessType: 'python', code: 'import openai\nclient = openai.OpenAI(api_key="EMPTY", base_url="http://luigi.millennium.berkeley.edu:8000/v1")\nclient.chat.completions.create(model="gorilla-openfunctions-v2", ...)' },

  // Multilingual
  { id: 18, name: 'Yi-Lightning', category: 'Multilingual', params: 'MoE', desc: 'A MoE model that ranks near the top of the Arena. Top-tier in Chinese and English.', tags: ['Bilingual'], platform: '01.AI API', link: 'https://platform.lingyiwanwu.com/', accessType: 'api', code: 'import openai\nclient = openai.OpenAI(api_key="YI_API_KEY", base_url="https://api.lingyiwanwu.com/v1")' },
  { id: 19, name: 'Exaone', category: 'Multilingual', params: '8B', desc: 'LG AI Research\'s bilingual Korean-English model. Strong on Korean benchmarks.', tags: ['Korean-English'], platform: 'Hugging Face', link: 'https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct")' },
  { id: 20, name: 'Vikhr', category: 'Multilingual', params: '7B', desc: 'Open Russian-oriented model with solid performance on Russian generation.', tags: ['Russian'], platform: 'Hugging Face', link: 'https://huggingface.co/Vikhrmodels', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("Vikhrmodels/Vikhr-7b-instruct")' },
  { id: 21, name: 'Aya 23', category: 'Multilingual', params: '35B', desc: 'Covers 23 languages with deep localisation. Purpose-built for translation.', tags: ['23 Languages'], platform: 'Cohere Dashboard', link: 'https://dashboard.cohere.com/', accessType: 'api', code: 'co = cohere.Client("API_KEY")\nres = co.chat(model="c4ai-aya-23", message="Bonjour")' },
  { id: 22, name: 'BLOOMChat', category: 'Multilingual', params: '176B', desc: 'A fine-tuned version of BLOOM optimised for chat across 6 languages.', tags: ['Chat'], platform: 'SambaNova Cloud', link: 'https://sambanova.ai/', accessType: 'api', code: '# Available via SambaNova fast-inference API endpoints.' },

  // Edge
  { id: 23, name: 'Phi-3.5 MoE', category: 'Edge', params: '6.6B Act', desc: 'A tiny MoE model that rivals much larger ones on reasoning and math.', tags: ['On-Device'], platform: 'Ollama / Hugging Face', link: 'https://huggingface.co/microsoft/Phi-3.5-MoE-instruct', accessType: 'cli', code: 'ollama run phi3.5' },
  { id: 24, name: 'Phi-3-Vision', category: 'Edge', params: '4.2B', desc: 'Combines vision and text reasoning at a small size; superb at document understanding.', tags: ['Vision'], platform: 'Hugging Face', link: 'https://huggingface.co/microsoft/Phi-3-vision-128k-instruct', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("microsoft/Phi-3-vision-128k-instruct")' },
  { id: 25, name: 'Stable LM 2', category: 'Edge', params: '12B', desc: 'A compact open model with strong commonsense reasoning and dialogue.', tags: ['Commonsense'], platform: 'Ollama', link: 'https://huggingface.co/stabilityai/stablelm-2-12b-chat', accessType: 'cli', code: 'ollama run stablelm2' },
  { id: 26, name: 'Danube 3', category: 'Edge', params: '1.8B', desc: 'Extremely compact and tuned for edge deployment. Great for private QA.', tags: ['Micro'], platform: 'H2O.ai Hub', link: 'https://huggingface.co/h2oai/h2o-danube3-1.8b-chat', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("h2oai/h2o-danube3-1.8b-chat")' },
  { id: 27, name: 'Cerebras-GPT', category: 'Edge', params: '13B', desc: 'Trained with a highly efficient scaling recipe.', tags: ['Lightweight'], platform: 'Hugging Face', link: 'https://huggingface.co/cerebras/Cerebras-GPT-13B', accessType: 'python', code: 'model = AutoModelForCausalLM.from_pretrained("cerebras/Cerebras-GPT-13B")' },
  { id: 28, name: 'Orca 2', category: 'Edge', params: '13B', desc: 'Built using advanced synthetic data, shows chain-of-thought reasoning.', tags: ['CoT'], platform: 'Ollama', link: 'https://huggingface.co/microsoft/Orca-2-13b', accessType: 'cli', code: 'ollama run orca-mini' },

  // Novel
  { id: 29, name: 'Jamba', category: 'Novel', params: '12B Act', desc: 'The first production-grade Mamba-Transformer hybrid with a 256K context window.', tags: ['Mamba-Transformer'], platform: 'AI21 Studio', link: 'https://docs.ai21.com/docs/jamba-foundation-models', accessType: 'api', code: 'from ai21 import AI21Client\nclient = AI21Client(api_key="KEY")\nclient.chat.completions.create(model="jamba-large", messages=[...])' },
  { id: 30, name: 'Reka Core', category: 'Novel', params: 'Multi', desc: 'A multimodal model (text, image, video, audio) from an independent lab.', tags: ['Omni-Multimodal'], platform: 'Reka API', link: 'https://www.reka.ai/', accessType: 'api', code: 'import reka\nclient = reka.Reka("API_KEY")\nresponse = client.chat.create(model="reka-core", messages=[...])' },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const filteredModels = useMemo(() => {
    return aiModels.filter(model => {
      const matchesCategory = activeCategory === 'All' || model.category === activeCategory;
      const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            model.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const openModel = (model) => {
    setSelectedModel(model);
    setIsDrawerOpen(true);
    setCopied(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModel = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedModel(null), 300);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryConfig = (catName) => {
    return categories.find(c => c.name === catName) || categories[0];
  };

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-stone-900 font-sans selection:bg-stone-300">
      
      {/* Header */}
      <header className="px-6 py-12 md:px-12 md:py-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="text-stone-500 font-medium tracking-widest uppercase text-sm mb-4">Interactive Directory</h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Underrated <br/>AI Atlas.
            </h1>
          </div>
          
          <div className="w-full md:w-80 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-stone-400 group-focus-within:text-stone-900 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search index..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-stone-200 focus:border-stone-900 rounded-2xl py-4 pl-12 pr-12 text-lg font-medium outline-none transition-all placeholder:text-stone-400 shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Grid Layout */}
      <main className="px-6 md:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredModels.map((model) => {
            const config = getCategoryConfig(model.category);
            const Icon = config.icon;
            
            return (
              <div 
                key={model.id}
                onClick={() => openModel(model)}
                className="group relative bg-white rounded-3xl p-6 cursor-pointer border border-stone-200 hover:border-stone-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50 flex flex-col h-64 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${config.color} transform origin-left scale-x-100 transition-transform`} />
                <div className="flex justify-between items-start mb-auto">
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <Icon className="w-3.5 h-3.5" />
                    {model.category}
                  </span>
                  <div className="text-stone-400 font-mono text-sm">{String(model.id).padStart(2, '0')}</div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-stone-600 transition-colors">
                    {model.name}
                  </h3>
                  <div className="flex items-end justify-between">
                    <p className="text-stone-500 font-medium">{model.params}</p>
                    <div className={`w-8 h-8 rounded-full ${config.color} ${config.text} flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[95%] md:w-auto overflow-x-auto hide-scrollbar">
        <div className="bg-white/80 backdrop-blur-xl border border-stone-200 p-2 rounded-full shadow-2xl flex items-center gap-1 min-w-max mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive ? `${cat.color} ${cat.text} shadow-md` : 'text-stone-500 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={`${isActive ? 'block' : 'hidden md:block'}`}>{cat.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Enhanced Side Drawer (Mapofile + Deployment Options) */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 pointer-events-none ${isDrawerOpen ? 'bg-stone-900/20 backdrop-blur-sm pointer-events-auto' : 'bg-transparent'}`}
        onClick={closeModel}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-full md:w-[650px] bg-[#f4f4f0] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col pointer-events-auto overflow-hidden ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {selectedModel && (() => {
            const config = getCategoryConfig(selectedModel.category);
            return (
              <>
                <div className={`shrink-0 p-6 md:p-8 ${config.color} ${config.text} flex flex-col justify-between min-h-[200px] relative`}>
                  <button onClick={closeModel} className={`absolute top-6 right-6 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors backdrop-blur-md`}>
                    <X className="w-6 h-6" />
                  </button>
                  <div className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs opacity-90 mb-6">
                    <config.icon className="w-4 h-4" />
                    {selectedModel.category}
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-2">
                      {selectedModel.name}
                    </h2>
                    <p className="opacity-90 text-lg font-medium">Model Profile & Deployment Guide</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  
                  {/* Basic Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white rounded-3xl p-5 border border-stone-200">
                      <Database className="w-5 h-5 text-stone-400 mb-2" />
                      <div className="text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1">Scale</div>
                      <div className="text-xl font-bold text-stone-900">{selectedModel.params}</div>
                    </div>
                    <div className="bg-white rounded-3xl p-5 border border-stone-200">
                      <Activity className="w-5 h-5 text-stone-400 mb-2" />
                      <div className="text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1">Architecture</div>
                      <div className="text-lg font-bold text-stone-900 leading-tight">
                        {selectedModel.desc.includes('MoE') ? 'MoE' : selectedModel.desc.includes('Mamba') ? 'Mamba Hybrid' : 'Transformer'}
                      </div>
                    </div>
                  </div>

                  {/* Profile Description */}
                  <div className="mb-10">
                    <h3 className="text-stone-900 text-sm font-bold uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">Overview</h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                      {selectedModel.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedModel.tags.map(tag => (
                        <span key={tag} className="bg-stone-200 text-stone-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* --- NEW: Deployment & Access Module --- */}
                  <div className="bg-stone-900 rounded-3xl p-1 overflow-hidden shadow-2xl">
                    <div className="bg-stone-800 rounded-t-[22px] px-6 py-4 flex items-center justify-between border-b border-stone-700">
                       <div className="flex items-center gap-3 text-white">
                         <Code2 className="w-5 h-5 text-stone-400" />
                         <span className="font-bold tracking-wide">Usage & Access</span>
                       </div>
                       <a 
                         href={selectedModel.link} 
                         target="_blank" 
                         rel="noreferrer"
                         className="flex items-center gap-1.5 bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                       >
                         <LinkIcon className="w-3.5 h-3.5" />
                         Official Page
                       </a>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">Primary Platform:</span>
                        <span className="text-white text-sm font-medium bg-stone-700/50 px-2 py-1 rounded-md">
                          {selectedModel.platform}
                        </span>
                      </div>

                      <div className="relative group">
                        <div className="absolute -top-3 left-4 bg-stone-900 px-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest z-10">
                          {selectedModel.accessType === 'cli' ? 'Terminal (Ollama)' : selectedModel.accessType === 'api' ? 'REST / SDK (API)' : 'Python (Transformers)'}
                        </div>
                        <div className="bg-[#0d0d0d] border border-stone-700 rounded-xl p-4 font-mono text-sm text-green-400 overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{selectedModel.code}</pre>
                        </div>
                        <button 
                          onClick={() => copyToClipboard(selectedModel.code)}
                          className="absolute top-4 right-4 bg-stone-800 hover:bg-stone-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-stone-600 transition-all opacity-0 group-hover:opacity-100"
                        >
                          {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            );
          })()}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
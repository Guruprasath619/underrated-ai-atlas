import React, { useState, useMemo, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  Search,
  FlaskConical,
  Building2,
  TerminalSquare,
  Languages,
  Cpu,
  Dna,
  X,
  ArrowRight,
  Database,
  Activity,
  Code2,
  Link as LinkIcon,
  Box,
} from 'lucide-react';
import Logo from './components/Logo';
import About from './pages/About';
import Methodology from './pages/Methodology';
import ModelFAQ from './pages/ModelFAQ';

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
  { id: 1, name: 'AI2 OLMo 7B', category: 'Research', params: '7B', desc: 'Fully open model from the Allen Institute—open training data, code, logs, and weights.', tags: ['Open Data', 'Science'], platform: 'Allen AI', link: 'https://allenai.org', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("allenai/OLMo-7B-hf")\ntokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-7B-hf")\ntext = tokenizer("Explain model transparency.", return_tensors="pt")\noutput = model.generate(**text, max_new_tokens=120)' },
  { id: 2, name: 'AI2 OLMoE', category: 'Research', params: '64B / 7B Act', desc: 'A Mixture of Experts version of OLMo. Strong efficiency and performance with total training transparency.', tags: ['MoE', 'Open Weight'], platform: 'Allen AI', link: 'https://allenai.org', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("allenai/OLMoE-1B-7B-0924")\ntokenizer = AutoTokenizer.from_pretrained("allenai/OLMoE-1B-7B-0924")' },
  { id: 3, name: 'EleutherAI Pythia', category: 'Research', params: '12B', desc: 'Designed for interpretability research, with multiple checkpoints across training.', tags: ['Interpretability'], platform: 'EleutherAI', link: 'https://www.eleuther.ai/', accessType: 'python', code: 'from transformers import AutoModelForCausalLM, AutoTokenizer\nmodel = AutoModelForCausalLM.from_pretrained("EleutherAI/pythia-12b")\ntokenizer = AutoTokenizer.from_pretrained("EleutherAI/pythia-12b")' },
  { id: 4, name: 'LLM360 K2', category: 'Research', params: '65B', desc: 'A 65B model with fully open-source datasets and training logs. Rare large-scale transparency.', tags: ['Logs Open'], platform: 'LLM360', link: 'https://llm360.ai/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("llm360/CrystalCoder")\n# swap with the specific K2 repo when using the exact model card' },
  { id: 5, name: 'CrystalCoder', category: 'Research', params: '7B', desc: 'A code model released with full training transparency, completely open.', tags: ['Code'], platform: 'LLM360 Hub', link: 'https://huggingface.co/LLM360', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("LLM360/CrystalCoder")' },
  { id: 6, name: 'Map-Neo', category: 'Research', params: '7B', desc: 'A fully open bilingual English-Chinese model, trained on 4.2T clean tokens.', tags: ['Bilingual'], platform: 'Hugging Face', link: 'https://huggingface.co/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("m-a-p/map-neo-7b")' },
  { id: 7, name: 'BLOOM', category: 'Research', params: '176B', desc: 'The first truly massive multilingual open model (46 languages).', tags: ['Massive', '46 Languages'], platform: 'Hugging Face', link: 'https://huggingface.co/bigscience/mt0-small', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("bigscience/mt0-small")' },

  { id: 8, name: 'Command R+', category: 'Enterprise', params: '104B', desc: 'Best-in-class for RAG, multi-step tool use, and multilingual summarization.', tags: ['RAG', 'Tool Use'], platform: 'Cohere', link: 'https://cohere.com', accessType: 'api', code: 'import requests\nurl = "https://api.cohere.com/v1/chat"\nheaders = {"Authorization": "Bearer YOUR_API_KEY"}\nbody = {"message": "Summarize this RAG dataset."}' },
  { id: 9, name: 'DBRX', category: 'Enterprise', params: '132B / 36B Act', desc: 'A fine-grained MoE built for coding, SQL, and reasoning. Open-weight.', tags: ['SQL', 'MoE'], platform: 'Databricks', link: 'https://www.databricks.com/', accessType: 'python', code: 'from transformers import AutoModelForCausalLM, AutoTokenizer\nmodel = AutoModelForCausalLM.from_pretrained("databricks/dbrx-instruct")' },
  { id: 10, name: 'Arctic', category: 'Enterprise', params: '480B / 17B Act', desc: 'A dense-MoE hybrid optimized for enterprise SQL generation and instruction-following.', tags: ['Enterprise', 'SQL'], platform: 'Snowflake', link: 'https://www.snowflake.com/', accessType: 'api', code: 'import requests\n# Example: call the hosted model endpoint or inference gateway' },
  { id: 11, name: 'Nemotron-4', category: 'Enterprise', params: '340B', desc: 'Released as a reward model and synthetic data generator.', tags: ['Reward Model'], platform: 'NVIDIA NIM', link: 'https://www.nvidia.com/en-us/ai-data-science/nim/', accessType: 'api', code: 'import requests\nresponse = requests.post("https://integrate.api.nvidia.com/v1/chat/completions", json={"messages": [{"role": "user", "content": "Generate synthetic evaluation data."}]})' },
  { id: 12, name: 'Granite 3', category: 'Enterprise', params: '8B, 20B', desc: 'Open-source models purpose-built for business. Small footprint, strong on benchmarks.', tags: ['Business'], platform: 'IBM', link: 'https://www.ibm.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("ibm-granite/granite-3.0-8b-instruct")' },
  { id: 13, name: 'XGen', category: 'Enterprise', params: '7B', desc: 'Early mover in long-context models (8K) trained with a unique staged data recipe.', tags: ['Long Context'], platform: 'Salesforce', link: 'https://www.salesforce.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("Salesforce/xgen-7b-8k-base")' },

  { id: 14, name: 'StarCoder2', category: 'Code', params: '15B', desc: 'A completely open code model trained on the Software Heritage archive.', tags: ['Software Heritage'], platform: 'Hugging Face', link: 'https://huggingface.co/bigcode/starcoder2-15b', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("bigcode/starcoder2-15b")' },
  { id: 15, name: 'MPT-30B', category: 'Code', params: '30B', desc: 'One of the first open models with an 8K context length.', tags: ['Doc QA'], platform: 'MosaicML', link: 'https://www.mosaicml.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("mosaicml/mpt-30b")' },
  { id: 16, name: 'MPT-7B', category: 'Code', params: '7B', desc: 'Smaller version trained on a mix of code and prose; highly customizable.', tags: ['Mixed Data'], platform: 'MosaicML', link: 'https://www.mosaicml.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("mosaicml/mpt-7b")' },
  { id: 17, name: 'Gorilla', category: 'Code', params: '7B', desc: 'Specializes in function calling and API orchestration.', tags: ['API Orchestration'], platform: 'Berkeley', link: 'https://gorilla.cs.berkeley.edu/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("gorilla-llm/gorilla-7b")' },

  { id: 18, name: 'Yi-Lightning', category: 'Multilingual', params: 'MoE', desc: 'A MoE model that ranks near the top of the Arena. Top-tier in Chinese and English.', tags: ['Bilingual'], platform: '01.AI', link: 'https://01.ai/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("01-ai/Yi-Lightning")' },
  { id: 19, name: 'Exaone', category: 'Multilingual', params: '8B', desc: 'LG AI Research\'s bilingual Korean-English model. Strong on Korean benchmarks.', tags: ['Korean-English'], platform: 'Hugging Face', link: 'https://huggingface.co/LGAI-EXAONE', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct")' },
  { id: 20, name: 'Vikhr', category: 'Multilingual', params: '7B', desc: 'Open Russian-oriented model with solid performance on Russian generation.', tags: ['Russian'], platform: 'Hugging Face', link: 'https://huggingface.co/Vikhrmodels', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("Vikhrmodels/Vikhr-7B-instruct")' },
  { id: 21, name: 'Aya 23', category: 'Multilingual', params: '35B', desc: 'Covers 23 languages with deep localisation. Purpose-built for translation.', tags: ['23 Languages'], platform: 'Cohere', link: 'https://cohere.com', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("CohereForAI/aya-23-35B")' },
  { id: 22, name: 'BLOOMChat', category: 'Multilingual', params: '176B', desc: 'A fine-tuned version of BLOOM optimised for chat across 6 languages.', tags: ['Chat'], platform: 'Hugging Face', link: 'https://huggingface.co/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("bigscience/mt0-small")' },

  { id: 23, name: 'Phi-3.5 MoE', category: 'Edge', params: '6.6B Act', desc: 'A tiny MoE model that rivals much larger ones on reasoning and math.', tags: ['On-Device'], platform: 'Microsoft', link: 'https://www.microsoft.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("microsoft/Phi-3.5-mini-instruct")' },
  { id: 24, name: 'Phi-3-Vision', category: 'Edge', params: '4.2B', desc: 'Combines vision and text reasoning at a small size; superb at document understanding.', tags: ['Vision'], platform: 'Microsoft', link: 'https://www.microsoft.com/', accessType: 'python', code: 'from transformers import AutoProcessor, AutoModelForImageTextToText\nprocessor = AutoProcessor.from_pretrained("microsoft/Phi-3-vision-128k-instruct")' },
  { id: 25, name: 'Stable LM 2', category: 'Edge', params: '12B', desc: 'A compact open model with strong commonsense reasoning and dialogue.', tags: ['Commonsense'], platform: 'Stability AI', link: 'https://stability.ai/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("stabilityai/stablelm-2-12b")' },
  { id: 26, name: 'Danube 3', category: 'Edge', params: '1.8B', desc: 'Extremely compact and tuned for edge deployment. Great for private QA.', tags: ['Micro'], platform: 'H2O.ai', link: 'https://h2o.ai/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("h2oai/h2o-danube3-1.8b-chat")' },
  { id: 27, name: 'Cerebras-GPT', category: 'Edge', params: '13B', desc: 'Trained with a highly efficient scaling recipe.', tags: ['Lightweight'], platform: 'Cerebras', link: 'https://www.cerebras.ai/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("cerebras/Cerebras-GPT-13B")' },
  { id: 28, name: 'Orca 2', category: 'Edge', params: '13B', desc: 'Built using advanced synthetic data, shows chain-of-thought reasoning.', tags: ['CoT'], platform: 'Microsoft', link: 'https://www.microsoft.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("microsoft/Orca-2-13b")' },

  { id: 29, name: 'Jamba', category: 'Novel', params: '12B Act', desc: 'The first production-grade Mamba-Transformer hybrid with a 256K context window.', tags: ['Mamba-Transformer'], platform: 'AI21', link: 'https://www.ai21.com/', accessType: 'python', code: 'from transformers import AutoTokenizer, AutoModelForCausalLM\nmodel = AutoModelForCausalLM.from_pretrained("ai21labs/AI21-Jamba")' },
  { id: 30, name: 'Reka Core', category: 'Novel', params: 'Multi', desc: 'A multimodal model (text, image, video, audio) from an independent lab.', tags: ['Omni-Multimodal'], platform: 'Reka', link: 'https://www.reka.ai/', accessType: 'python', code: 'from transformers import AutoProcessor, AutoModelForVision2Seq\n# Use your local Reka model checkpoint or hosted endpoint' },
];

const slugify = (value = '') => String(value)
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const getCategoryConfig = (catName) => categories.find((c) => c.name === catName) || categories[0];

function SiteHeader({ showSearch = false, searchValue = '', onSearchChange = () => {} }) {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Categories', to: '/category/research' },
    { label: 'FAQ', to: '/faq' },
    { label: 'About', to: '/about' },
    { label: 'Methodology', to: '/methodology' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-6 py-6 md:px-12 md:py-8 max-w-[1400px] mx-auto border-b border-stone-200 bg-[#f4f4f0] sticky top-0 z-40 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0 hover:opacity-90">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-950 to-purple-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-cyan-400 text-[8px] font-bold">AI</div>
              <div className="text-yellow-500 text-[7px] font-semibold">ATLAS</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-stone-500">Interactive Directory</div>
            <div className="text-xl font-black tracking-tight text-stone-900">Underrated AI Atlas</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `px-3 py-2 rounded-full text-sm font-medium transition ${isActive ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-200 hover:text-stone-900'}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {showSearch && (
          <div className="hidden md:flex items-center gap-2 w-full max-w-sm ml-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search models..."
                className="w-full bg-white border border-stone-200 rounded-full py-2.5 pl-9 pr-3 text-sm outline-none focus:border-stone-900"
              />
            </div>
          </div>
        )}

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-stone-200 bg-white p-2"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5 block">
            <span className="block h-0.5 w-5 bg-stone-900" />
            <span className="block h-0.5 w-5 bg-stone-900" />
            <span className="block h-0.5 w-5 bg-stone-900" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 md:hidden border-t border-stone-200 pt-4 space-y-2">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block rounded-full px-3 py-2 text-sm font-medium ${isActive ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-200'}`}
            >
              {label}
            </NavLink>
          ))}
          {showSearch && (
            <div className="relative pt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search models..."
                className="w-full bg-white border border-stone-200 rounded-full py-2.5 pl-9 pr-3 text-sm outline-none focus:border-stone-900"
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const canonicalBase = 'https://guruprasath619.github.io/underrated-ai-atlas';
    const canonicalPath = location.pathname === '/' ? canonicalBase + '/' : canonicalBase + location.pathname;
    const cleanCanonical = canonicalPath.replace(/\/$/, '');
    const routeTitle = (() => {
      if (location.pathname.startsWith('/faq')) return 'Frequently Asked Questions | Underrated AI Atlas';
      if (location.pathname.startsWith('/about')) return 'About | Underrated AI Atlas';
      if (location.pathname.startsWith('/methodology')) return 'Methodology | Underrated AI Atlas';
      if (location.pathname.startsWith('/category/')) {
        const label = decodeURIComponent(location.pathname.split('/category/')[1] || '');
        return `${label ? label.charAt(0).toUpperCase() + label.slice(1) : 'Category'} Models | Underrated AI Atlas`;
      }
      if (location.pathname.startsWith('/models/') || location.pathname.startsWith('/model/')) {
        const slug = decodeURIComponent(location.pathname.split('/').filter(Boolean).slice(-1)[0] || '');
        return `${slug.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())} | Underrated AI Atlas`;
      }
      return 'Underrated AI Atlas | Open-Source & Enterprise AI Models';
    })();

    document.title = routeTitle;

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', cleanCanonical);

    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect && redirect !== location.pathname) {
      const target = redirect.startsWith('/') ? redirect : `/${redirect}`;
      navigate(target, { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<AtlasHome />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/models/:modelSlug" element={<ModelPage />} />
      <Route path="/model/:modelSlug" element={<ModelPage />} />
      <Route path="/faq" element={<ModelFAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/methodology" element={<Methodology />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function AtlasHome() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  const filteredModels = useMemo(() => {
    return aiModels.filter((model) => {
      const matchesCategory = activeCategory === 'All' || model.category === activeCategory;
      const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-stone-900 font-sans selection:bg-stone-300">
      <SiteHeader showSearch searchValue={searchQuery} onSearchChange={setSearchQuery} />

      {showLogo && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setShowLogo(false)}
              className="absolute -top-12 right-0 bg-white hover:bg-stone-100 rounded-full p-2 transition-colors z-10"
            >
              <X className="w-6 h-6 text-stone-900" />
            </button>
            <Logo />
          </div>
        </div>
      )}

      <div className="px-6 pt-8 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          <div className="flex-1">
            <h4 className="text-stone-500 font-medium tracking-widest uppercase text-sm mb-2">Interactive Directory</h4>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
              Underrated AI Atlas.
            </h1>
          </div>
        </div>
      </div>

      <main className="px-6 md:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.filter((cat) => cat.id !== 'All').map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  navigate(`/category/${slugify(cat.name)}`);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? `${cat.color} ${cat.text}` : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'}`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredModels.map((model) => {
            const config = getCategoryConfig(model.category);
            const Icon = config.icon;
            return (
              <Link
                key={model.id}
                to={`/models/${slugify(model.name)}`}
                className="group relative bg-white rounded-3xl p-6 border border-stone-200 hover:border-stone-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${config.color} transform origin-left scale-x-100 transition-transform`} />
                <div className="flex justify-between items-start mb-auto">
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <Icon className="w-3.5 h-3.5" />
                    {model.category}
                  </span>
                  <div className="text-stone-400 font-mono text-sm">{String(model.id).padStart(2, '0')}</div>
                </div>

                <div className="mt-6">
                  <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-stone-600 transition-colors">
                    {model.name}
                  </h3>
                  <div className="flex items-end justify-between">
                    <p className="text-stone-500 font-medium">{model.params}</p>
                    <div className={`w-8 h-8 rounded-full ${config.color} ${config.text} flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[95%] md:w-auto overflow-x-auto hide-scrollbar">
        <div className="bg-white/80 backdrop-blur-xl border border-stone-200 p-2 rounded-full shadow-2xl flex items-center gap-1 min-w-max mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id === 'All') {
                    navigate('/');
                  } else {
                    navigate(`/category/${slugify(cat.name)}`);
                  }
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive ? `${cat.color} ${cat.text} shadow-md` : 'text-stone-500 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={`${isActive ? 'block' : 'hidden md:block'}`}>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

function CategoryPage() {
  const { categoryName } = useParams();
  const normalized = slugify(categoryName || '');
  const category = categories.find((cat) => slugify(cat.id) === normalized || slugify(cat.name) === normalized) || categories[0];
  const filteredModels = aiModels.filter((model) => category.id === 'All' || model.category === category.id);

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-stone-900">
      <SiteHeader />
      <main className="max-w-[1400px] mx-auto px-6 py-8 md:px-12">
        <div className="mb-6 flex items-center gap-2 text-sm text-stone-500">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">{category.id === 'All' ? 'Index' : category.name}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{category.id === 'All' ? 'All Models' : `${category.name} Models`}</h1>
        <p className="max-w-2xl text-stone-600 mb-8">Browse the curated collection of underrated AI models by category and use case.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredModels.map((model) => {
            const config = getCategoryConfig(model.category);
            const Icon = config.icon;
            return (
              <Link key={model.id} to={`/models/${slugify(model.name)}`} className="group relative bg-white rounded-3xl p-6 border border-stone-200 hover:border-stone-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`absolute top-0 left-0 w-full h-2 ${config.color}`} />
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <Icon className="w-3.5 h-3.5" />
                    {model.category}
                  </span>
                  <div className="text-stone-400 font-mono text-sm">{String(model.id).padStart(2, '0')}</div>
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl font-bold tracking-tight mb-2">{model.name}</h3>
                  <p className="text-stone-500 font-medium">{model.params}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function ModelPage() {
  const { modelSlug } = useParams();
  const model = aiModels.find((entry) => slugify(entry.name) === slugify(modelSlug) || String(entry.id) === modelSlug);
  const [copied, setCopied] = useState(false);

  if (!model) {
    return <Navigate to="/" replace />;
  }

  const config = getCategoryConfig(model.category);
  const Icon = config.icon;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(model.code || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-stone-900">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 py-10 md:px-12">
        <div className="mb-6 flex items-center gap-2 text-sm text-stone-500">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span>/</span>
          <Link to={`/category/${slugify(model.category)}`} className="hover:text-stone-900">{model.category}</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">{model.name}</span>
        </div>

        <article className="bg-white border border-stone-200 rounded-[32px] overflow-hidden shadow-sm">
          <div className={`${config.color} ${config.text} p-6 md:p-8`}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <Icon className="w-4 h-4" />
              {model.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">{model.name}</h1>
            <p className="mt-4 text-lg font-medium opacity-90">{model.params}</p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">Overview</h2>
              <p className="text-lg text-stone-700 leading-relaxed">{model.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {model.tags.map((tag) => (
                  <span key={tag} className="bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <div className="text-xs uppercase tracking-wider text-stone-500 mb-2">Platform</div>
                <div className="text-xl font-bold">{model.platform}</div>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <div className="text-xs uppercase tracking-wider text-stone-500 mb-2">Access</div>
                <div className="text-xl font-bold">{model.accessType === 'api' ? 'API / Hosted' : model.accessType === 'cli' ? 'CLI' : 'Python / Transformers'}</div>
              </div>
            </section>

            <section className="bg-stone-900 rounded-3xl overflow-hidden">
              <div className="flex items-center justify-between bg-stone-800 px-5 py-3">
                <div className="flex items-center gap-2 text-white text-sm font-semibold">
                  <Code2 className="w-4 h-4 text-stone-400" />
                  Example usage
                </div>
                <button onClick={copyToClipboard} className="bg-stone-700 hover:bg-stone-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                  {copied ? 'Copied!' : 'Copy code'}
                </button>
              </div>
              <pre className="p-5 text-sm leading-6 text-green-400 whitespace-pre-wrap overflow-x-auto">{model.code}</pre>
            </section>

            <div className="flex flex-wrap gap-3">
              <a href={model.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-5 py-3 font-semibold hover:bg-stone-700 transition">
                <LinkIcon className="w-4 h-4" />
                Official model page
              </a>
              <Link to={`/category/${slugify(model.category)}`} className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-800 hover:border-stone-400 transition">
                Back to {model.category}
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || '/underrated-ai-atlas/'}>
      <AppShell />
    </BrowserRouter>
  );
}

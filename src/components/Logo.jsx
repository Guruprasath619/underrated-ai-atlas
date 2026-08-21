import React from 'react';

export default function Logo() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="relative w-96 h-96">
        <div className="absolute inset-0">
          {/* Book Cover */}
          <div className="w-full h-full bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 rounded-lg shadow-2xl p-10 flex flex-col justify-center items-center relative overflow-hidden border-2 border-yellow-600 border-opacity-30"
               style={{
                 boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(100,200,255,0.3)'
               }}>
            
            {/* Corner Ornaments */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-yellow-500 opacity-60"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-yellow-500 opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-yellow-500 opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-yellow-500 opacity-60"></div>

            {/* Glow Effect */}
            <div className="absolute w-48 h-48 bg-gradient-radial from-blue-400 to-transparent opacity-20 rounded-full blur-3xl animate-pulse"></div>

            {/* Neural Network Nodes */}
            <div className="relative z-10 mb-6">
              <div className="w-40 h-40 relative">
                <svg viewBox="0 0 150 150" width="150" height="150" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#64c8ff', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#0099ff', stopOpacity: 0.6}} />
                    </linearGradient>
                  </defs>
                  {/* Connection lines */}
                  <line x1="75" y1="75" x2="30" y2="15" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="75" y1="75" x2="120" y2="15" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="75" y1="75" x2="7" y2="75" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="75" y1="75" x2="143" y2="75" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="75" y1="75" x2="30" y2="135" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="75" y1="75" x2="120" y2="135" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                </svg>

                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"
                     style={{boxShadow: '0 0 20px rgba(100,200,255,0.9), inset 0 0 10px rgba(255,255,255,0.3)'}}></div>

                {/* Outer Nodes */}
                {[
                  {top: '10%', left: '20%', delay: '0s'},
                  {top: '10%', left: '70%', delay: '0.2s'},
                  {top: '50%', left: '0%', delay: '0.4s'},
                  {top: '50%', left: '90%', delay: '0.6s'},
                  {top: '85%', left: '20%', delay: '0.8s'},
                  {top: '85%', left: '70%', delay: '1s'},
                ].map((pos, idx) => (
                  <div
                    key={idx}
                    className="absolute w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      boxShadow: '0 0 15px rgba(100,200,255,0.8), inset 0 0 8px rgba(255,255,255,0.3)',
                      animationDelay: pos.delay
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Title */}
            <div className="relative z-20 text-center">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2"
                  style={{
                    textShadow: '0 0 10px rgba(100,200,255,0.5), 0 2px 4px rgba(0,0,0,0.8)',
                    letterSpacing: '2px'
                  }}>
                UNDERRATED<br />AI ATLAS
              </h1>
              <p className="text-xs uppercase text-yellow-500 tracking-widest italic mb-3">
                An Exploration of the Hidden Landscapes
              </p>
              <p className="text-xs text-yellow-600 italic max-w-xs">
                Cutting-Edge AI Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useId } from 'react'

export default function RayqonLogo({ 
  size = 'md', 
  showText = true, 
  animated = true,
  className = '' 
}) {
  // Size presets
  const sizeMap = {
    sm: { icon: 32, text: 'text-lg', spacing: 'gap-2.5' },
    md: { icon: 42, text: 'text-2xl', spacing: 'gap-3.5' },
    lg: { icon: 56, text: 'text-3xl', spacing: 'gap-4' },
    xl: { icon: 72, text: 'text-4xl', spacing: 'gap-5' },
  }

  const currentSize = sizeMap[size] || sizeMap.md
  const gradientId = `rayqonGrad-${useId().replace(/:/g, '')}`

  return (
    <div className={`flex items-center ${currentSize.spacing} select-none ${className}`}>
      {/* High-fidelity Vector Icon of the Rayqon AI Cloud + Infinity + Neural Constellation */}
      <div className={`relative flex items-center justify-center ${animated ? 'group' : ''}`}>
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Primary gradient: Cyan to Green */}
            <linearGradient id={gradientId} x1="10%" y1="20%" x2="90%" y2="80%">
              <stop offset="0%" stopColor="#347fc4" />
              <stop offset="48%" stopColor="#29a8a1" />
              <stop offset="100%" stopColor="#54b64d" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="rayqonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38bdf8" floodOpacity="0.4" />
            </filter>
            
            <filter id="rayqonGreenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#22c55e" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Cloud Contour */}
          <path
            d="M 28 42 C 22 42, 18 36, 20 30 C 22 22, 32 20, 36 24 C 40 16, 56 14, 64 22 C 72 20, 82 25, 80 34 C 82 40, 76 45, 72 44"
            stroke={`url(#${gradientId})`}
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#rayqonGlow)"
          />

          {/* Central Infinity Loop (Cloud Core) */}
          <path
            d="M 50 48 C 42 38, 30 38, 25 46 C 20 54, 30 62, 38 60 C 46 58, 54 44, 62 42 C 70 40, 80 48, 75 56 C 70 64, 58 64, 50 48 Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Left Neural / Constellation Mesh (Cyan / Blue Nodes & Lines) */}
          <g className={animated ? 'animate-pulse' : ''} style={{ animationDuration: '3s' }}>
            {/* Edges */}
            <line x1="26" y1="58" x2="16" y2="68" stroke="#38bdf8" strokeWidth="2.2" strokeOpacity="0.85" />
            <line x1="16" y1="68" x2="26" y2="80" stroke="#38bdf8" strokeWidth="2.2" strokeOpacity="0.85" />
            <line x1="16" y1="68" x2="14" y2="82" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.75" />
            <line x1="26" y1="80" x2="34" y2="70" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="34" y1="70" x2="38" y2="60" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="26" y1="80" x2="20" y2="92" stroke="#0284c7" strokeWidth="2" strokeOpacity="0.8" />

            {/* Nodes */}
            <circle cx="26" cy="58" r="3.2" fill="#38bdf8" filter="url(#rayqonGlow)" />
            <circle cx="16" cy="68" r="3.4" fill="#38bdf8" />
            <circle cx="14" cy="82" r="2.8" fill="#0284c7" />
            <circle cx="26" cy="80" r="3.5" fill="#38bdf8" />
            <circle cx="34" cy="70" r="3" fill="#0ea5e9" />
            <circle cx="20" cy="92" r="3.5" fill="#22c55e" />
          </g>

          {/* Right Neural / Constellation Mesh (Green Nodes & Lines) */}
          <g className={animated ? 'animate-pulse' : ''} style={{ animationDuration: '3.6s' }}>
            {/* Edges */}
            <line x1="68" y1="60" x2="78" y2="72" stroke="#22c55e" strokeWidth="2.2" strokeOpacity="0.85" />
            <line x1="78" y1="72" x2="88" y2="82" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="78" y1="72" x2="72" y2="85" stroke="#10b981" strokeWidth="2.2" strokeOpacity="0.85" />
            <line x1="72" y1="85" x2="62" y2="74" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="62" y1="74" x2="58" y2="62" stroke="#10b981" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="72" y1="85" x2="80" y2="93" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.8" />

            {/* Nodes */}
            <circle cx="68" cy="60" r="3.2" fill="#22c55e" filter="url(#rayqonGreenGlow)" />
            <circle cx="78" cy="72" r="3.5" fill="#22c55e" />
            <circle cx="88" cy="82" r="2.8" fill="#4ade80" />
            <circle cx="72" cy="85" r="3.6" fill="#10b981" />
            <circle cx="62" cy="74" r="3" fill="#22c55e" />
            <circle cx="80" cy="93" r="3.4" fill="#4ade80" />
          </g>
        </svg>

        {/* Ambient background glow circle */}
        <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md -z-10 group-hover:bg-cyan-500/20 transition-all duration-300" />
      </div>

      {/* Typography: RAYQON AI */}
      {showText && (
        <div className="rayqon-wordmark flex items-center uppercase leading-none">
          <span className={`${currentSize.text} text-white`}>
            RAYQON
          </span>
          <span className={`${currentSize.text} rayqon-wordmark-ai ml-2`}>
            AI
          </span>
        </div>
      )}
    </div>
  )
}

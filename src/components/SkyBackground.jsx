import { useRef } from "react";
import SakuraPetals from "./SakuraPetals";
import Birds from "./Birds";

function SkyBackground({ variant = "sunset", children, style = {} }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const gradients = {
    sunset: "linear-gradient(180deg, #87CEEB 0%, #FFB3C6 40%, #FFD580 75%, #FF8C69 100%)",
    day: "linear-gradient(180deg, #4a90d9 0%, #87ceeb 35%, #fce4ec 70%, #f8bbd9 100%)",
    night: "linear-gradient(180deg, #0d0d2b 0%, #1a1a3e 40%, #4a1942 70%, #8b2252 100%)",
    dusk: "linear-gradient(180deg, #2c1654 0%, #8b2252 35%, #e91e6c55 60%, #FFD580 100%)",
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", ...style, background: gradients[variant] }}>
      {/* Mount Fuji SVG */}
      <svg
        viewBox="0 0 1200 400"
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "auto", animation: "mount-glow 4s ease-in-out infinite" }}
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Far mountains */}
        <ellipse cx="200" cy="400" rx="320" ry="100" fill="rgba(180,140,200,0.35)" />
        <ellipse cx="950" cy="400" rx="280" ry="90" fill="rgba(160,120,180,0.3)" />
        {/* Main Mount Fuji */}
        <path d="M600,60 L780,340 L420,340 Z" fill="url(#fuji-grad)" />
        <path d="M600,60 L660,160 L540,160 Z" fill="white" opacity="0.95" />
        {/* Snow cap detail */}
        <path d="M600,60 L640,130 L600,120 L560,130 Z" fill="white" opacity="0.9" />
        {/* Fuji base */}
        <path d="M380,340 L820,340 L840,380 L360,380 Z" fill="rgba(100,70,120,0.4)" />
        {/* Treeline */}
        {[...Array(18)].map((_, i) => (
          <g key={i} transform={`translate(${330 + i * 32},${320 - Math.sin(i * 0.5) * 10})`}>
            <path d={`M0,30 L-10,0 L10,0 Z`} fill={`rgba(50,${100 + i * 5},${60 + i * 3},0.7)`} />
          </g>
        ))}
        {/* Foreground hills */}
        <path d="M0,360 Q300,300 600,340 Q900,380 1200,330 L1200,400 L0,400 Z" fill="rgba(100,60,120,0.5)" />
        <path d="M0,380 Q400,350 800,370 Q1000,380 1200,360 L1200,400 L0,400 Z" fill="rgba(80,40,100,0.6)" />

        <defs>
          <linearGradient id="fuji-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8d5f0" />
            <stop offset="60%" stopColor="#9b7ab8" />
            <stop offset="100%" stopColor="#6b4e8a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stars (night/dusk only) */}
      {(variant === "night" || variant === "dusk") && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[...Array(40)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              width: i % 5 === 0 ? "3px" : "2px",
              height: i % 5 === 0 ? "3px" : "2px",
              borderRadius: "50%",
              background: "white",
              animation: `star-blink ${1.5 + Math.random() * 2.5}s ${Math.random() * 3}s ease-in-out infinite`,
            }} />
          ))}
          {/* Shooting star */}
          <div style={{
            position: "absolute", top: "15%", left: "10%",
            width: "2px", height: "2px",
            background: "linear-gradient(90deg, white, transparent)",
            animation: "shooting-star 2.5s 3s ease-in forwards",
            borderRadius: "2px",
          }} />
        </div>
      )}

      {/* Clouds */}
      <div style={{ position: "absolute", top: "8%", left: 0, width: "100%", pointerEvents: "none" }}>
        {[0, 1, 2].map(i => (
          <svg key={i} viewBox="0 0 200 60" style={{
            position: "absolute",
            top: `${i * 18}%`,
            left: `-200px`,
            width: "200px",
            opacity: 0.55 + i * 0.1,
            animation: `clouds-drift ${20 + i * 10}s ${i * 7}s linear infinite`,
          }}>
            <ellipse cx="100" cy="40" rx="80" ry="22" fill="rgba(255,255,255,0.8)" />
            <ellipse cx="70" cy="35" rx="45" ry="18" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="130" cy="35" rx="40" ry="16" fill="rgba(255,255,255,0.85)" />
          </svg>
        ))}
      </div>

      {/* Sakura petals */}
      <SakuraPetals />

      {/* Birds */}
      <Birds />

      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}

export default SkyBackground;
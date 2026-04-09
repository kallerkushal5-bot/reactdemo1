import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   SAKURA BITES — Japanese Anime Restaurant
   Summer Anime Aesthetic | Full Multi-Page Experience
   ═══════════════════════════════════════════════════════════ */

/* ─── FONT IMPORT ─────────────────────────────────────────── */
const FONT_LINK = document.createElement("link");
FONT_LINK.rel = "stylesheet";
FONT_LINK.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap";
document.head.appendChild(FONT_LINK);

/* ─── MENU DATA ───────────────────────────────────────────── */
const MENU_ITEMS = {
  starters: [
    { id: 1, name: "Edamame Gyoza", desc: "Pan-fried dumplings, soy-ginger dip, sesame crunch", price: 420, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=85", tag: "⭐ Popular" },
    { id: 2, name: "Sakura Sashimi", desc: "Chef's seasonal fish, pickled ginger, wasabi pearls", price: 780, img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=85", tag: "🌸 Seasonal" },
    { id: 3, name: "Miso Soup Deluxe", desc: "White miso, silken tofu, wakame, spring onion", price: 280, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85", tag: "" },
    { id: 4, name: "Karaage Chicken", desc: "Crispy yuzu chicken, kewpie mayo, lemon zest", price: 520, img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", tag: "🔥 Hot" },
  ],
  mains: [
    { id: 5, name: "Tonkotsu Ramen", desc: "Rich pork broth, chashu, soft egg, nori, bamboo shoots", price: 880, img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=85", tag: "⭐ Best Seller" },
    { id: 6, name: "Salmon Teriyaki", desc: "Glazed Atlantic salmon, steamed rice, pickled daikon", price: 1100, img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=85", tag: "🌿 Healthy" },
    { id: 7, name: "Wagyu Donburi", desc: "A5 wagyu slices, truffle sauce, rice bowl, egg yolk", price: 1850, img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=85", tag: "💎 Premium" },
    { id: 8, name: "Vegetable Udon", desc: "Thick udon noodles, tempura veggies, dashi broth", price: 720, img: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&q=85", tag: "🌱 Vegan" },
  ],
  desserts: [
    { id: 9, name: "Matcha Parfait", desc: "Ceremonial matcha, anko, shiratama mochi, soft cream", price: 480, img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=85", tag: "🌸 Signature" },
    { id: 10, name: "Dorayaki Stack", desc: "Fluffy pancakes, red bean cream, sakura honey", price: 360, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=85", tag: "" },
    { id: 11, name: "Mochi Ice Cream", desc: "Assorted mochi: strawberry, matcha, black sesame", price: 420, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=85", tag: "❄️ Cold" },
    { id: 12, name: "Sakura Cheesecake", desc: "Cherry blossom cheesecake, yuzu curd, sesame base", price: 520, img: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&q=85", tag: "🌸 Limited" },
  ],
};

const POPULAR_DISHES = [MENU_ITEMS.mains[0], MENU_ITEMS.starters[0], MENU_ITEMS.desserts[0], MENU_ITEMS.mains[2]];

const FEATURED_DISHES = [
  { ...MENU_ITEMS.mains[0], highlight: "Most Loved" },
  { ...MENU_ITEMS.starters[1], highlight: "Chef's Pick" },
  { ...MENU_ITEMS.desserts[0], highlight: "Signature" },
];

/* ─── TEAM DATA ───────────────────────────────────────────── */
const TEAM = [
  { name: "Chef Hiroshi Tanaka", role: "Head Chef", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=85", quote: "Every dish is a story of seasons" },
  { name: "Yuki Nakamura", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=85", quote: "Sweetness is the soul of hospitality" },
  { name: "Kenji Watanabe", role: "Sous Chef", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=85", quote: "Precision is love on the plate" },
];

/* ─── DELIVERY ZONES ──────────────────────────────────────── */
const ZONES = [
  { name: "Sakura District", time: "20–30 min", fee: "Free", color: "#ff9eb5" },
  { name: "Fuji Heights", time: "30–45 min", fee: "₹49", color: "#87ceeb" },
  { name: "Anime Quarter", time: "40–55 min", fee: "₹79", color: "#ffd580" },
  { name: "Blossom Bay", time: "45–60 min", fee: "₹99", color: "#b8f0b8" },
];

/* ─── PAYMENT METHODS ─────────────────────────────────────── */
const PAYMENT_METHODS = [
  { id: "upi", label: "UPI", icon: "⚡", desc: "Pay via Google Pay, PhonePe, Paytm" },
  { id: "card", label: "Card", icon: "💳", desc: "Visa, Mastercard, Amex accepted" },
  { id: "wallet", label: "Wallet", icon: "👛", desc: "Amazon Pay, Mobikwik, Airtel" },
  { id: "cod", label: "Cash on Delivery", icon: "💴", desc: "Pay when your order arrives" },
];

/* ─── GLOBAL STYLES ───────────────────────────────────────── */
const injectStyles = () => {
  if (document.getElementById("sakura-styles")) return;
  const style = document.createElement("style");
  style.id = "sakura-styles";
  style.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'M PLUS Rounded 1c', 'Zen Kaku Gothic New', system-ui, sans-serif;
      background: #fdf0f5;
      color: #2d1b2e;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    img { display: block; max-width: 100%; }
    button { font-family: inherit; cursor: pointer; border: none; background: none; }
    a { text-decoration: none; color: inherit; }
    ::selection { background: #ff9eb5; color: #2d1b2e; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #fdf0f5; }
    ::-webkit-scrollbar-thumb { background: #ff9eb5; border-radius: 4px; }

    @keyframes sakura-fall {
      0% { transform: translateY(-20px) rotate(0deg) translateX(0); opacity: 1; }
      50% { transform: translateY(50vh) rotate(180deg) translateX(30px); opacity: 0.8; }
      100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); opacity: 0; }
    }
    @keyframes bird-fly {
      0% { transform: translateX(-80px) translateY(0) scaleX(1); opacity: 0; }
      10% { opacity: 1; }
      45% { transform: translateX(45vw) translateY(-30px) scaleX(1); }
      50% { transform: translateX(50vw) translateY(-30px) scaleX(-1); }
      90% { opacity: 1; }
      100% { transform: translateX(110vw) translateY(20px) scaleX(-1); opacity: 0; }
    }
    @keyframes star-blink {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.4); }
    }
    @keyframes shooting-star {
      0% { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 1; width: 2px; }
      100% { transform: translateX(300px) translateY(150px) rotate(-35deg); opacity: 0; width: 120px; }
    }
    @keyframes float-up {
      0% { transform: translateY(40px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes slide-in-right {
      0% { transform: translateX(60px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes pulse-soft {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes wave-sway {
      0%, 100% { transform: rotate(-3deg) translateX(0); }
      50% { transform: rotate(3deg) translateX(4px); }
    }
    @keyframes clouds-drift {
      0% { transform: translateX(-120px); }
      100% { transform: translateX(110vw); }
    }
    @keyframes mount-glow {
      0%, 100% { filter: drop-shadow(0 0 18px rgba(255,160,190,0.3)); }
      50% { filter: drop-shadow(0 0 38px rgba(255,160,190,0.6)); }
    }
    @keyframes navbar-drop {
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes cart-bounce {
      0%, 100% { transform: scale(1); }
      30% { transform: scale(1.3); }
      60% { transform: scale(0.9); }
    }
    @keyframes petal-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes page-enter {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .page-enter { animation: page-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .float-up { animation: float-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .float-up-d1 { animation: float-up 0.6s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .float-up-d2 { animation: float-up 0.6s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .float-up-d3 { animation: float-up 0.6s 0.3s cubic-bezier(0.22, 1, 0.36, 1) both; }

    .btn-primary {
      background: linear-gradient(135deg, #ff6b9d, #ff9eb5);
      color: white;
      padding: 12px 28px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      transition: all 0.28s ease;
      box-shadow: 0 4px 20px rgba(255,107,157,0.35);
      border: none;
      cursor: pointer;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(255,107,157,0.5);
      background: linear-gradient(135deg, #ff4d8d, #ff85a8);
    }
    .btn-outline {
      background: transparent;
      color: #ff6b9d;
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.86rem;
      border: 2px solid #ff9eb5;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .btn-outline:hover {
      background: #ff6b9d;
      color: white;
      border-color: #ff6b9d;
      transform: translateY(-1px);
    }
    .card-hover {
      transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 60px rgba(255,107,157,0.2) !important;
    }
    .dish-card {
      background: rgba(255,255,255,0.9);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(255,107,157,0.1);
      transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,158,181,0.2);
    }
    .dish-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 28px 60px rgba(255,107,157,0.22);
    }
    .dish-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .dish-card:hover img {
      transform: scale(1.08);
    }
    .qty-btn {
      width: 32px; height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff6b9d, #ff9eb5);
      color: white;
      font-size: 1.1rem;
      font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
      box-shadow: 0 2px 10px rgba(255,107,157,0.3);
    }
    .qty-btn:hover { transform: scale(1.15); box-shadow: 0 4px 15px rgba(255,107,157,0.5); }
    .qty-btn.minus { background: linear-gradient(135deg, #b0b8d0, #8895b0); box-shadow: 0 2px 8px rgba(136,149,176,0.3); }
    .qty-btn.minus:hover { box-shadow: 0 4px 12px rgba(136,149,176,0.5); }

    .sky-gradient-1 { background: linear-gradient(180deg, #87CEEB 0%, #FFB3C6 45%, #FFD580 80%, #FF8C69 100%); }
    .sky-gradient-2 { background: linear-gradient(180deg, #4a90d9 0%, #87ceeb 30%, #fce4ec 70%, #f8bbd9 100%); }
    .sky-gradient-3 { background: linear-gradient(180deg, #1a1a2e 0%, #16213e 40%, #4a1942 70%, #e91e8c22 100%); }

    .glass-card {
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,158,181,0.25);
      border-radius: 20px;
    }
    .glass-card-dark {
      background: rgba(45,27,46,0.55);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255,158,181,0.18);
      border-radius: 20px;
    }

    .section-title {
      font-family: 'Noto Serif JP', serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      color: #2d1b2e;
      line-height: 1.2;
    }
    .section-sub {
      font-size: 0.9rem;
      color: #9b6b8a;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 500;
    }

    .nav-link {
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      padding: 6px 14px;
      border-radius: 20px;
      transition: all 0.22s;
      cursor: pointer;
      color: #2d1b2e;
      position: relative;
    }
    .nav-link:hover { color: #ff6b9d; background: rgba(255,107,157,0.08); }
    .nav-link.active { color: white; background: linear-gradient(135deg, #ff6b9d, #ff9eb5); box-shadow: 0 3px 14px rgba(255,107,157,0.4); }

    .input-field {
      width: 100%;
      padding: 13px 18px;
      border: 1.5px solid rgba(255,158,181,0.4);
      border-radius: 12px;
      font-family: inherit;
      font-size: 0.9rem;
      background: rgba(255,255,255,0.8);
      color: #2d1b2e;
      outline: none;
      transition: border-color 0.25s, box-shadow 0.25s;
    }
    .input-field:focus {
      border-color: #ff6b9d;
      box-shadow: 0 0 0 3px rgba(255,107,157,0.12);
    }
    .input-field::placeholder { color: #c4a0b8; }

    .tag-badge {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
      background: linear-gradient(135deg, #ff6b9d22, #ff9eb544);
      color: #ff6b9d;
      letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
      .hide-mobile { display: none !important; }
      .grid-2 { grid-template-columns: 1fr !important; }
      .grid-3 { grid-template-columns: 1fr 1fr !important; }
      .grid-4 { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 480px) {
      .grid-3, .grid-4 { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(style);
};

/* ─── ANIMATED SKY BACKGROUND ─────────────────────────────── */
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

/* ─── SAKURA PETALS ───────────────────────────────────────── */
function SakuraPetals({ count = 16 }) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
      {[...Array(count)].map((_, i) => {
        const size = 8 + Math.random() * 10;
        return (
          <div key={i} style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `-${size}px`,
            width: `${size}px`,
            height: `${size}px`,
            animation: `sakura-fall ${4 + Math.random() * 6}s ${Math.random() * 8}s ease-in-out infinite`,
          }}>
            <svg viewBox="0 0 20 20" style={{ width: "100%", height: "100%", animation: `petal-spin ${3 + Math.random() * 4}s linear infinite` }}>
              <path d="M10,2 C14,2 18,6 18,10 C14,12 10,18 10,18 C10,18 6,12 2,10 C2,6 6,2 10,2Z"
                fill={`hsla(${330 + Math.random() * 30},${80 + Math.random() * 20}%,${75 + Math.random() * 15}%,0.85)`} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

/* ─── BIRDS ───────────────────────────────────────────────── */
function Birds() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      {[0, 1, 2].map(i => (
        <svg key={i} viewBox="0 0 40 20" style={{
          position: "absolute",
          top: `${10 + i * 8}%`,
          left: `-50px`,
          width: "40px",
          opacity: 0.7,
          animation: `bird-fly ${12 + i * 5}s ${i * 4 + 2}s ease-in-out infinite`,
        }}>
          <path d="M2,10 Q10,2 20,10 Q30,2 38,10" stroke="#2d1b2e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}

/* ─── SAKURA DIVIDER ──────────────────────────────────────── */
function SakuraDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #ffb3c6)" }} />
      <span style={{ fontSize: "1.2rem" }}>🌸</span>
      <span style={{ fontSize: "0.8rem" }}>✦</span>
      <span style={{ fontSize: "1.2rem" }}>🌸</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #ffb3c6, transparent)" }} />
    </div>
  );
}

/* ─── LOGO ────────────────────────────────────────────────── */
function Logo({ small }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <svg viewBox="0 0 40 40" style={{ width: small ? 32 : 40, height: small ? 32 : 40 }}>
        <circle cx="20" cy="20" r="19" fill="url(#logo-grad)" />
        <path d="M20,8 C24,8 28,12 28,16 C24,18 20,24 20,24 C20,24 16,18 12,16 C12,12 16,8 20,8Z" fill="white" opacity="0.95" />
        <path d="M14,22 Q20,30 26,22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="100%" stopColor="#ffb3c6" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div style={{
          fontFamily: "'Noto Serif JP', serif",
          fontWeight: 700,
          fontSize: small ? "1rem" : "1.15rem",
          color: "#2d1b2e",
          lineHeight: 1,
          letterSpacing: "0.06em",
        }}>
          Sakura <span style={{ color: "#ff6b9d" }}>Bites</span>
        </div>
        {!small && <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "#9b6b8a", textTransform: "uppercase", marginTop: 1 }}>桜 レストラン</div>}
      </div>
    </div>
  );
}

/* ─── NAVBAR ──────────────────────────────────────────────── */
function Navbar({ activePage, navigate, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = ["Home", "Menu", "About", "Order", "Delivery", "Payment", "Cart", "Checkout", "Help"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(253,240,245,0.92)" : "rgba(253,240,245,0.75)",
      backdropFilter: "blur(18px)",
      borderBottom: scrolled ? "1px solid rgba(255,158,181,0.3)" : "1px solid rgba(255,158,181,0.1)",
      transition: "all 0.35s ease",
      animation: "navbar-drop 0.6s ease both",
      boxShadow: scrolled ? "0 4px 30px rgba(255,107,157,0.1)" : "none",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,4vw,48px)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => navigate("Home")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <Logo small />
        </button>

        {/* Desktop nav */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {pages.map(p => (
            <button key={p} className={`nav-link ${activePage === p ? "active" : ""}`} onClick={() => navigate(p)}>
              {p === "Cart" ? `🛒 ${cartCount > 0 ? `(${cartCount})` : ""}` : p}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => navigate("Cart")} style={{ position: "relative", background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>
            🛒
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: -6, right: -6,
                background: "#ff6b9d", color: "white",
                width: 18, height: 18, borderRadius: "50%",
                fontSize: "0.65rem", fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: "cart-bounce 0.4s ease",
              }}>{cartCount}</span>
            )}
          </button>
          <button
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "1.4rem" }}
            className="show-mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(253,240,245,0.97)", backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,158,181,0.2)",
          padding: "16px clamp(16px,4vw,48px)",
          display: "flex", flexDirection: "column", gap: 4,
          animation: "float-up 0.3s ease",
        }}>
          {pages.map(p => (
            <button key={p} className={`nav-link ${activePage === p ? "active" : ""}`}
              onClick={() => { navigate(p); setMenuOpen(false); }}
              style={{ textAlign: "left", width: "fit-content" }}
            >{p}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: HOME
   ═══════════════════════════════════════════════════════════ */
function HomePage({ navigate, addToCart }) {
  return (
    <div className="page-enter">
      {/* Hero */}
      <SkyBackground variant="sunset" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(16px,4vw,48px) 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div className="float-up">
            <div className="section-sub float-up" style={{ marginBottom: 12 }}>🌸 Authentic Japanese Cuisine</div>
            <h1 className="float-up-d1" style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              textShadow: "0 4px 24px rgba(45,27,46,0.3)",
              marginBottom: 20,
            }}>
              Where Every<br />Bite Blooms<br />
              <span style={{ color: "#FFD580", textShadow: "0 2px 16px rgba(255,213,128,0.5)" }}>Like Sakura</span> 🌸
            </h1>
            <p className="float-up-d2" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: 32, maxWidth: 440, textShadow: "0 2px 8px rgba(45,27,46,0.2)" }}>
              Step into a world where Japanese culinary artistry meets anime summer magic. Handcrafted dishes inspired by the seasons, served in a story you'll never forget.
            </p>
            <div className="float-up-d3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => navigate("Menu")} style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
                🍜 Explore Menu
              </button>
              <button className="btn-outline" onClick={() => navigate("Order")} style={{ background: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.6)", color: "white", padding: "14px 28px", backdropFilter: "blur(4px)" }}>
                Order Now ✨
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 44 }}>
              {[["200+", "Menu Items"], ["50K+", "Happy Guests"], ["4.9★", "Rating"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.5rem", fontWeight: 700, color: "white", textShadow: "0 2px 8px rgba(45,27,46,0.2)" }}>{n}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.06em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured dish cards */}
          <div style={{ position: "relative", height: 420 }} className="hide-mobile">
            {FEATURED_DISHES.map((d, i) => (
              <div key={d.id} className="dish-card" style={{
                position: "absolute",
                width: 200,
                left: i === 0 ? "50%" : i === 1 ? "10%" : "38%",
                top: i === 0 ? "0%" : i === 1 ? "32%" : "52%",
                transform: `rotate(${i === 0 ? "4deg" : i === 1 ? "-6deg" : "2deg"})`,
                animation: `float-up ${0.5 + i * 0.12}s ease both`,
                zIndex: 3 - i,
              }}>
                <img src={d.img} alt={d.name} style={{ height: 120 }} />
                <div style={{ padding: "12px 14px" }}>
                  <div style={{ fontSize: "0.65rem", color: "#ff6b9d", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>{d.highlight}</div>
                  <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "0.88rem", color: "#2d1b2e" }}>{d.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#9b6b8a", marginTop: 4 }}>₹{d.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SkyBackground>

      {/* Featured Dishes Section */}
      <section style={{ padding: "80px clamp(16px,4vw,48px)", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-sub" style={{ marginBottom: 10 }}>✦ Our Specialties ✦</div>
          <h2 className="section-title">Popular Dishes</h2>
          <SakuraDivider />
          <p style={{ color: "#9b6b8a", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Handpicked by our chefs, loved by thousands — these are the dishes that define Sakura Bites.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="grid-4">
          {POPULAR_DISHES.map((item, i) => (
            <div key={item.id} className="dish-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={item.img} alt={item.name} style={{ height: 200 }} />
                {item.tag && <span className="tag-badge" style={{ position: "absolute", top: 12, left: 12 }}>{item.tag}</span>}
              </div>
              <div style={{ padding: "18px 18px 20px" }}>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1rem", marginBottom: 6, color: "#2d1b2e" }}>{item.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#9b6b8a", lineHeight: 1.55, marginBottom: 14 }}>{item.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, color: "#ff6b9d", fontSize: "1.05rem" }}>₹{item.price}</span>
                  <button className="btn-primary" style={{ padding: "8px 18px", fontSize: "0.8rem" }} onClick={() => addToCart(item)}>
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-outline" onClick={() => navigate("Menu")}>View Full Menu 🍱</button>
        </div>
      </section>

      {/* Why Us section */}
      <section style={{ background: "linear-gradient(135deg, #fdf0f5 0%, #fce4ec 50%, #f3e5f5 100%)", padding: "80px clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-sub" style={{ marginBottom: 10 }}>✦ Why Sakura Bites ✦</div>
            <h2 className="section-title">The Sakura Promise</h2>
            <SakuraDivider />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="grid-3">
            {[
              { icon: "🌿", title: "Farm Fresh", desc: "Ingredients sourced daily from local organic farms and premium Japanese suppliers." },
              { icon: "👨‍🍳", title: "Master Chefs", desc: "Our team trained in Kyoto and Tokyo, bringing authentic techniques to every plate." },
              { icon: "🚀", title: "Fast Delivery", desc: "Hot, fresh food at your door in under 45 minutes — or your next order is free." },
              { icon: "🌸", title: "Seasonal Menu", desc: "Dishes rotate with Japan's four seasons, always something new to discover." },
              { icon: "💯", title: "100% Halal", desc: "Fully certified halal kitchen. Everyone is welcome at our table." },
              { icon: "♻️", title: "Eco Packaging", desc: "All our packaging is biodegradable and made from bamboo-based materials." },
            ].map((item, i) => (
              <div key={i} className="glass-card card-hover" style={{ padding: "28px 24px", textAlign: "center" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1.05rem", marginBottom: 10, color: "#2d1b2e" }}>{item.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "#9b6b8a", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <SkyBackground variant="dusk" style={{ padding: "80px clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: "white", marginBottom: 16, textShadow: "0 3px 16px rgba(0,0,0,0.3)" }}>
            Ready to Experience<br />Anime Gastronomy? 🌸
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, fontSize: "1.05rem", lineHeight: 1.6 }}>
            First order? Get 20% off with code <strong style={{ color: "#FFD580" }}>SAKURA20</strong>
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => navigate("Order")} style={{ fontSize: "1rem", padding: "15px 36px" }}>Order Now 🍜</button>
            <button className="btn-outline" onClick={() => navigate("Menu")} style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.5)", color: "white", padding: "15px 32px", backdropFilter: "blur(4px)" }}>Browse Menu</button>
          </div>
        </div>
      </SkyBackground>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: MENU
   ═══════════════════════════════════════════════════════════ */
function MenuPage({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("starters");
  const [addedId, setAddedId] = useState(null);
  const categories = [
    { key: "starters", label: "🥢 Starters", jp: "前菜" },
    { key: "mains", label: "🍜 Main Course", jp: "主菜" },
    { key: "desserts", label: "🍡 Desserts", jp: "デザート" },
  ];

  const handleAdd = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: "100vh", background: "linear-gradient(180deg, #fdf0f5 0%, #fce4ec 100%)" }}>
      {/* Header */}
      <SkyBackground variant="day" style={{ padding: "64px clamp(16px,4vw,48px) 80px", textAlign: "center" }}>
        <div className="section-sub float-up" style={{ marginBottom: 10, color: "rgba(255,255,255,0.85)" }}>✦ Crafted With Love ✦</div>
        <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.25)", marginBottom: 12 }}>Our Menu 🍱</h1>
        <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
          From street-style bites to omakase experiences — every dish tells a story of Japanese heritage.
        </p>
      </SkyBackground>

      {/* Category tabs */}
      <div style={{ maxWidth: 1280, margin: "-24px auto 0", padding: "0 clamp(16px,4vw,48px)", position: "relative", zIndex: 10 }}>
        <div className="glass-card" style={{ display: "flex", gap: 8, padding: "10px", overflowX: "auto", scrollbarWidth: "none" }}>
          {categories.map(c => (
            <button key={c.key} onClick={() => setActiveCategory(c.key)} style={{
              padding: "12px 28px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: "0.88rem",
              whiteSpace: "nowrap",
              transition: "all 0.25s",
              background: activeCategory === c.key ? "linear-gradient(135deg,#ff6b9d,#ff9eb5)" : "transparent",
              color: activeCategory === c.key ? "white" : "#9b6b8a",
              boxShadow: activeCategory === c.key ? "0 4px 16px rgba(255,107,157,0.35)" : "none",
            }}>
              {c.label} <span style={{ fontSize: "0.72rem", opacity: 0.8, marginLeft: 4 }}>{c.jp}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px clamp(16px,4vw,48px) 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="grid-4">
          {MENU_ITEMS[activeCategory].map((item, i) => (
            <div key={item.id} className="dish-card" style={{ animation: `float-up 0.5s ${i * 0.08}s ease both` }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={item.img} alt={item.name} style={{ height: 200 }} />
                {item.tag && <span className="tag-badge" style={{ position: "absolute", top: 12, left: 12 }}>{item.tag}</span>}
              </div>
              <div style={{ padding: "18px 18px 20px" }}>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "0.98rem", marginBottom: 6, color: "#2d1b2e" }}>{item.name}</h3>
                <p style={{ fontSize: "0.78rem", color: "#9b6b8a", lineHeight: 1.55, marginBottom: 16 }}>{item.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, color: "#ff6b9d", fontSize: "1.05rem" }}>₹{item.price}</span>
                  <button
                    className="btn-primary"
                    style={{
                      padding: "8px 16px", fontSize: "0.8rem",
                      background: addedId === item.id ? "linear-gradient(135deg,#4caf50,#66bb6a)" : undefined,
                      transition: "all 0.3s",
                    }}
                    onClick={() => handleAdd(item)}
                  >
                    {addedId === item.id ? "✓ Added!" : "+ Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: ABOUT
   ═══════════════════════════════════════════════════════════ */
function AboutPage({ navigate }) {
  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      {/* Hero */}
      <SkyBackground variant="sunset" style={{ padding: "80px clamp(16px,4vw,48px) 100px", textAlign: "center" }}>
        <div className="section-sub float-up" style={{ marginBottom: 12, color: "rgba(255,255,255,0.85)" }}>✦ Our Story ✦</div>
        <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.3)", marginBottom: 16 }}>
          Born From a Dream<br />Under the Sakura 🌸
        </h1>
        <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 600, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.75 }}>
          In 2019, Chef Hiroshi Tanaka left his Tokyo omakase kitchen with one vision: bring the ephemeral beauty of sakura season to every plate, every day of the year.
        </p>
      </SkyBackground>

      {/* Story section */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(16px,4vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="grid-2">
          <div>
            <div className="section-sub" style={{ marginBottom: 12 }}>✦ The Beginning ✦</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>A Kitchen Born<br />From Passion</h2>
            <SakuraDivider />
            <p style={{ color: "#5a3d5c", lineHeight: 1.8, marginBottom: 16 }}>
              What started as a tiny 12-seat izakaya in a narrow Mumbai lane has grown into one of India's most celebrated Japanese dining destinations. Every dish carries the memory of a cherry blossom morning in Kyoto.
            </p>
            <p style={{ color: "#5a3d5c", lineHeight: 1.8, marginBottom: 28 }}>
              We don't just cook food — we craft moments. Each recipe is a collaboration between centuries of Japanese culinary tradition and the vibrant energy of modern anime culture.
            </p>
            <button className="btn-primary" onClick={() => navigate("Menu")}>Explore Our Menu 🌸</button>
          </div>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85"
              alt="Kitchen" style={{ borderRadius: 24, width: "100%", height: 400, objectFit: "cover", boxShadow: "0 24px 64px rgba(255,107,157,0.2)" }} />
            <div className="glass-card" style={{ position: "absolute", bottom: -20, left: -20, padding: "18px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: "1.5rem", color: "#ff6b9d", fontFamily: "'Noto Serif JP', serif" }}>2019</div>
              <div style={{ fontSize: "0.8rem", color: "#9b6b8a" }}>Founded in Mumbai</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "linear-gradient(135deg, #fdf0f5, #f3e5f5)", padding: "80px clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-sub" style={{ marginBottom: 10 }}>✦ The Team ✦</div>
            <h2 className="section-title">Meet Our Chefs</h2>
            <SakuraDivider />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="grid-3">
            {TEAM.map((member, i) => (
              <div key={i} className="glass-card card-hover" style={{ padding: 0, overflow: "hidden" }}>
                <img src={member.img} alt={member.name} style={{ width: "100%", height: 260, objectFit: "cover" }} />
                <div style={{ padding: "22px 22px 24px" }}>
                  <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1rem", marginBottom: 4, color: "#2d1b2e" }}>{member.name}</h3>
                  <div style={{ fontSize: "0.78rem", color: "#ff6b9d", fontWeight: 600, marginBottom: 12 }}>{member.role}</div>
                  <p style={{ fontSize: "0.83rem", color: "#9b6b8a", fontStyle: "italic", lineHeight: 1.6 }}>"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(16px,4vw,48px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-sub" style={{ marginBottom: 10 }}>✦ Our Journey ✦</div>
          <h2 className="section-title">Milestones 🌸</h2>
          <SakuraDivider />
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #ff9eb5, #ffb3c6, #ff9eb5)", transform: "translateX(-50%)" }} className="hide-mobile" />
          {[
            { year: "2019", title: "First Petals Fall", desc: "Sakura Bites opens its doors in Bandra, Mumbai — 12 seats, 1 chef, infinite passion." },
            { year: "2020", title: "Survived & Thrived", desc: "Launched Japan's first cloud kitchen concept in India during lockdown. 5,000 orders in month one." },
            { year: "2022", title: "Second Branch", desc: "Expanded to Lower Parel with a 60-seat anime-themed dining room and full cocktail bar." },
            { year: "2024", title: "National Recognition", desc: "Voted India's Best Japanese Restaurant by Condé Nast Traveller for two consecutive years." },
          ].map((item, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 60px 1fr",
              gap: 20,
              marginBottom: 36,
              alignItems: "center",
            }} className="grid-2">
              <div style={{ textAlign: i % 2 === 0 ? "right" : "left", gridColumn: i % 2 === 0 ? 1 : 3 }} className={i % 2 !== 0 ? "hide-mobile" : ""}>
                {i % 2 === 0 && (
                  <div className="glass-card" style={{ padding: "20px 24px", display: "inline-block" }}>
                    <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, color: "#ff6b9d", fontSize: "1.1rem" }}>{item.year}</div>
                    <h3 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#2d1b2e", margin: "4px 0 8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#9b6b8a", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }} className="hide-mobile">
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg,#ff6b9d,#ff9eb5)", boxShadow: "0 0 0 4px #fdf0f5, 0 0 0 6px #ff9eb5" }} />
              </div>
              <div style={{ gridColumn: i % 2 !== 0 ? 3 : 1 }}>
                {i % 2 !== 0 && (
                  <div className="glass-card" style={{ padding: "20px 24px", display: "inline-block" }}>
                    <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, color: "#ff6b9d", fontSize: "1.1rem" }}>{item.year}</div>
                    <h3 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#2d1b2e", margin: "4px 0 8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#9b6b8a", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                )}
                {i % 2 === 0 && (
                  <div className="glass-card" style={{ padding: "20px 24px", display: "none" }}>
                    <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, color: "#ff6b9d", fontSize: "1.1rem" }}>{item.year}</div>
                    <h3 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#2d1b2e", margin: "4px 0 8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#9b6b8a", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: CART
   ═══════════════════════════════════════════════════════════ */
function CartPage({ cart, updateCart, removeFromCart, navigate }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(total * 0.05);

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: "100vh", background: "linear-gradient(180deg, #fdf0f5 0%, #fce4ec 100%)" }}>
      <SkyBackground variant="day" style={{ padding: "60px clamp(16px,4vw,48px) 80px", textAlign: "center" }}>
        <h1 className="section-title float-up" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.25)" }}>Your Cart 🛒</h1>
        <p className="float-up-d1" style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>{cart.length} item{cart.length !== 1 ? "s" : ""} waiting for you</p>
      </SkyBackground>

      <div style={{ maxWidth: 900, margin: "-24px auto 0", padding: "0 clamp(16px,4vw,48px) 80px", position: "relative", zIndex: 5 }}>
        {cart.length === 0 ? (
          <div className="glass-card" style={{ padding: "64px 40px", textAlign: "center" }}>
            <div style={{ fontSize: "4rem", marginBottom: 20 }}>🍱</div>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.5rem", marginBottom: 12, color: "#2d1b2e" }}>Your cart is empty</h2>
            <p style={{ color: "#9b6b8a", marginBottom: 28 }}>Add some delicious dishes to get started!</p>
            <button className="btn-primary" onClick={() => navigate("Menu")}>Browse Menu 🌸</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24 }} className="grid-2">
            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {cart.map(item => (
                <div key={item.id} className="glass-card" style={{ padding: "18px 20px", display: "flex", gap: 16, alignItems: "center" }}>
                  <img src={item.img} alt={item.name} style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "0.95rem", color: "#2d1b2e", marginBottom: 4 }}>{item.name}</h3>
                    <p style={{ fontSize: "0.78rem", color: "#9b6b8a", marginBottom: 10, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button className="qty-btn minus" onClick={() => updateCart(item.id, item.qty - 1)}>−</button>
                        <span style={{ fontWeight: 700, fontSize: "0.95rem", minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                        <button className="qty-btn" onClick={() => updateCart(item.id, item.qty + 1)}>+</button>
                      </div>
                      <span style={{ fontWeight: 700, color: "#ff6b9d", marginLeft: "auto" }}>₹{item.price * item.qty}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: "#c4a0b8", fontSize: "1.2rem", background: "none", border: "none", cursor: "pointer", padding: "4px 8px", borderRadius: 8, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ff6b9d"; e.currentTarget.style.background = "rgba(255,107,157,0.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#c4a0b8"; e.currentTarget.style.background = "transparent"; }}
                  >✕</button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="glass-card" style={{ padding: "28px 24px", position: "sticky", top: 80 }}>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: 20, color: "#2d1b2e" }}>Order Summary</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#5a3d5c" }}>
                    <span>Subtotal</span><span>₹{total}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#5a3d5c" }}>
                    <span>GST (5%)</span><span>₹{tax}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#4caf50" }}>
                    <span>Delivery</span><span>Free 🎉</span>
                  </div>
                  <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #ffb3c6, transparent)", margin: "6px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.05rem", color: "#2d1b2e" }}>
                    <span>Total</span><span style={{ color: "#ff6b9d" }}>₹{total + tax}</span>
                  </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: "0.95rem", justifyContent: "center" }} onClick={() => navigate("Checkout")}>
                  Proceed to Checkout →
                </button>
                <button className="btn-outline" style={{ width: "100%", marginTop: 10, padding: "12px" }} onClick={() => navigate("Menu")}>
                  + Add More Items
                </button>
                <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16, fontSize: "0.72rem", color: "#9b6b8a" }}>
                  <span>🔒 Secure Checkout</span>
                  <span>•</span>
                  <span>🌸 Free Delivery</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: ORDER NOW
   ═══════════════════════════════════════════════════════════ */
function OrderPage({ addToCart, navigate }) {
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: "100vh" }}>
      <SkyBackground variant="day" style={{ padding: "70px clamp(16px,4vw,48px) 90px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="section-sub float-up" style={{ marginBottom: 10, color: "rgba(255,255,255,0.85)" }}>✦ Quick Order ✦</div>
          <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.25)", marginBottom: 16 }}>
            Order in Seconds ⚡
          </h1>
          <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7 }}>
            Pick your favourites from our top-rated dishes and get them delivered lightning fast.
          </p>
        </div>
      </SkyBackground>

      <div style={{ maxWidth: 1280, margin: "-32px auto 0", padding: "0 clamp(16px,4vw,48px) 80px", position: "relative", zIndex: 5 }}>
        {/* Categories quick-order */}
        {Object.entries(MENU_ITEMS).map(([cat, items]) => (
          <div key={cat} style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: "1.3rem", color: "#2d1b2e", textTransform: "capitalize" }}>
                {cat === "starters" ? "🥢" : cat === "mains" ? "🍜" : "🍡"} {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </h2>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #ffb3c6, transparent)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="grid-4">
              {items.map((item, i) => (
                <div key={item.id} className="glass-card card-hover" style={{
                  padding: "14px",
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  animation: `float-up 0.4s ${i * 0.07}s ease both`,
                }}>
                  <img src={item.img} alt={item.name} style={{ width: 60, height: 60, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.84rem", color: "#2d1b2e", marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                    <div style={{ fontWeight: 700, color: "#ff6b9d", fontSize: "0.9rem", marginBottom: 8 }}>₹{item.price}</div>
                    <button
                      className="btn-primary"
                      style={{
                        padding: "6px 14px", fontSize: "0.75rem",
                        background: addedId === item.id ? "linear-gradient(135deg,#4caf50,#66bb6a)" : undefined,
                      }}
                      onClick={() => handleAdd(item)}
                    >
                      {addedId === item.id ? "✓" : "+ Add"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="btn-primary" onClick={() => navigate("Cart")} style={{ fontSize: "1rem", padding: "15px 40px" }}>
            View Cart & Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: DELIVERY
   ═══════════════════════════════════════════════════════════ */
function DeliveryPage() {
  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <SkyBackground variant="sunset" style={{ padding: "72px clamp(16px,4vw,48px) 100px", textAlign: "center" }}>
        <div className="section-sub float-up" style={{ marginBottom: 10, color: "rgba(255,255,255,0.85)" }}>✦ Fast & Fresh ✦</div>
        <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.25)", marginBottom: 12 }}>
          We Deliver Magic 🚀
        </h1>
        <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
          Hot ramen and fresh sushi, delivered in a cherry blossom breeze — right to your door.
        </p>
      </SkyBackground>

      <div style={{ maxWidth: 1280, margin: "-28px auto 0", padding: "0 clamp(16px,4vw,48px) 80px", position: "relative", zIndex: 5 }}>
        {/* Delivery stats */}
        <div className="glass-card" style={{ padding: "32px", marginBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="grid-4">
            {[
              { icon: "⏱️", stat: "< 45 min", label: "Avg Delivery" },
              { icon: "🏙️", stat: "4 Zones", label: "Coverage Areas" },
              { icon: "🌡️", stat: "72°F+", label: "Delivery Temp" },
              { icon: "📦", stat: "99.2%", label: "On-Time Rate" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: "1.4rem", color: "#ff6b9d" }}>{s.stat}</div>
                <div style={{ fontSize: "0.78rem", color: "#9b6b8a", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery zones */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-sub" style={{ marginBottom: 8 }}>✦ Coverage ✦</div>
            <h2 className="section-title">Delivery Zones 🗺️</h2>
            <SakuraDivider />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="grid-4">
            {ZONES.map((zone, i) => (
              <div key={i} className="glass-card card-hover" style={{ padding: "28px 22px", textAlign: "center", borderTop: `4px solid ${zone.color}` }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: zone.color + "33", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "1.5rem" }}>📍</div>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1rem", color: "#2d1b2e", marginBottom: 8 }}>{zone.name}</h3>
                <div style={{ fontSize: "0.85rem", color: "#5a3d5c", marginBottom: 6 }}>⏱️ {zone.time}</div>
                <div style={{
                  display: "inline-block", padding: "4px 14px",
                  background: zone.fee === "Free" ? "#e8f5e9" : "#fff3e0",
                  color: zone.fee === "Free" ? "#2e7d32" : "#e65100",
                  borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, marginTop: 6,
                }}>
                  {zone.fee === "Free" ? "🎉 Free Delivery" : `Delivery: ${zone.fee}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 className="section-title">Delivery FAQ 🌸</h2>
            <SakuraDivider />
          </div>
          {[
            { q: "What are your delivery hours?", a: "We deliver daily from 11:00 AM to 11:30 PM. Last orders accepted at 11:00 PM." },
            { q: "How is food kept warm during delivery?", a: "We use insulated thermal bags imported from Japan. Soups and broths are sealed in double-walled containers." },
            { q: "Can I track my order?", a: "Yes! You'll receive a live tracking link via SMS and WhatsApp as soon as your order is picked up." },
            { q: "Is there a minimum order value?", a: "Minimum order is ₹300. Orders above ₹599 in Sakura District get free delivery automatically." },
          ].map((faq, i) => (
            <div key={i} className="glass-card" style={{ padding: "20px 24px", marginBottom: 12 }}>
              <h3 style={{ fontWeight: 600, fontSize: "0.92rem", color: "#2d1b2e", marginBottom: 8 }}>🌸 {faq.q}</h3>
              <p style={{ fontSize: "0.84rem", color: "#9b6b8a", lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: PAYMENT
   ═══════════════════════════════════════════════════════════ */
function PaymentPage({ cart, navigate }) {
  const [selected, setSelected] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(total * 0.05);

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: "100vh", background: "linear-gradient(180deg, #fdf0f5 0%, #fce4ec 100%)" }}>
      <SkyBackground variant="dusk" style={{ padding: "64px clamp(16px,4vw,48px) 90px", textAlign: "center" }}>
        <div className="section-sub float-up" style={{ marginBottom: 10, color: "rgba(255,255,255,0.85)" }}>✦ Secure Payment ✦</div>
        <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 20px rgba(0,0,0,0.3)", marginBottom: 8 }}>
          Payment 💳
        </h1>
        <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.8)" }}>Choose your preferred payment method</p>
      </SkyBackground>

      <div style={{ maxWidth: 800, margin: "-24px auto 0", padding: "0 clamp(16px,4vw,48px) 80px", position: "relative", zIndex: 5 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24 }} className="grid-2">
          {/* Methods */}
          <div>
            <div className="glass-card" style={{ padding: "28px 24px", marginBottom: 20 }}>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1rem", marginBottom: 20, color: "#2d1b2e" }}>Payment Method</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {PAYMENT_METHODS.map(method => (
                  <button key={method.id} onClick={() => setSelected(method.id)} style={{
                    padding: "16px 18px",
                    borderRadius: 14,
                    border: `2px solid ${selected === method.id ? "#ff6b9d" : "rgba(255,158,181,0.25)"}`,
                    background: selected === method.id ? "linear-gradient(135deg, rgba(255,107,157,0.08), rgba(255,158,181,0.06))" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "all 0.25s",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}>
                    <span style={{ fontSize: "1.6rem" }}>{method.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#2d1b2e", marginBottom: 3 }}>{method.label}</div>
                      <div style={{ fontSize: "0.78rem", color: "#9b6b8a" }}>{method.desc}</div>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%",
                        border: `2px solid ${selected === method.id ? "#ff6b9d" : "#c4a0b8"}`,
                        background: selected === method.id ? "#ff6b9d" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s",
                      }}>
                        {selected === method.id && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selected === "upi" && (
              <div className="glass-card" style={{ padding: "22px 24px", animation: "float-up 0.3s ease" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d1b2e", display: "block", marginBottom: 10 }}>
                  Enter UPI ID ⚡
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={e => setUpiId(e.target.value)}
                />
              </div>
            )}

            {selected === "card" && (
              <div className="glass-card" style={{ padding: "22px 24px", animation: "float-up 0.3s ease", display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d1b2e", display: "block", marginBottom: 8 }}>Card Number</label>
                  <input className="input-field" placeholder="1234 5678 9012 3456" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d1b2e", display: "block", marginBottom: 8 }}>Expiry</label>
                    <input className="input-field" placeholder="MM / YY" />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d1b2e", display: "block", marginBottom: 8 }}>CVV</label>
                    <input className="input-field" placeholder="•••" type="password" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mini summary */}
          <div>
            <div className="glass-card" style={{ padding: "24px", position: "sticky", top: 80 }}>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: 16, color: "#2d1b2e" }}>Order Total</h3>
              {cart.length === 0 ? (
                <p style={{ fontSize: "0.84rem", color: "#9b6b8a", textAlign: "center", padding: "20px 0" }}>Cart is empty</p>
              ) : (
                <>
                  {cart.slice(0, 3).map(item => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "#5a3d5c", marginBottom: 8 }}>
                      <span>{item.name} ×{item.qty}</span>
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  ))}
                  {cart.length > 3 && <div style={{ fontSize: "0.78rem", color: "#9b6b8a", marginBottom: 8 }}>+{cart.length - 3} more items</div>}
                  <div style={{ height: 1, background: "#ffb3c6", margin: "12px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.84rem", color: "#5a3d5c", marginBottom: 6 }}>
                    <span>GST</span><span>₹{tax}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.1rem", color: "#2d1b2e", marginBottom: 20 }}>
                    <span>Total</span><span style={{ color: "#ff6b9d" }}>₹{total + tax}</span>
                  </div>
                  <button className="btn-primary" style={{ width: "100%", padding: "14px" }} onClick={() => navigate("Checkout")}>
                    Pay ₹{total + tax} →
                  </button>
                </>
              )}
              <div style={{ textAlign: "center", marginTop: 16, fontSize: "0.72rem", color: "#9b6b8a" }}>
                🔒 256-bit encrypted · PCI DSS compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: CHECKOUT
   ═══════════════════════════════════════════════════════════ */
function CheckoutPage({ cart, navigate, clearCart }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [placed, setPlaced] = useState(false);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(total * 0.05);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address) return alert("Please fill in all required fields.");
    setPlaced(true);
    clearCart();
    setTimeout(() => navigate("Home"), 4500);
  };

  if (placed) {
    return (
      <div style={{ paddingTop: 64, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #fdf0f5, #fce4ec)" }}>
        <SakuraPetals count={24} />
        <div className="glass-card" style={{ padding: "60px 48px", textAlign: "center", maxWidth: 480, animation: "float-up 0.5s ease" }}>
          <div style={{ fontSize: "4rem", marginBottom: 20, animation: "pulse-soft 1.5s ease infinite" }}>🌸</div>
          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.8rem", fontWeight: 700, color: "#2d1b2e", marginBottom: 12 }}>
            Order Placed! ✨
          </h2>
          <p style={{ color: "#9b6b8a", lineHeight: 1.7, marginBottom: 8 }}>
            Your Sakura Bites order is confirmed and our chefs are already getting to work.
          </p>
          <p style={{ color: "#ff6b9d", fontWeight: 600, marginBottom: 28 }}>Estimated delivery: 35–45 minutes 🚀</p>
          <div style={{ background: "linear-gradient(135deg, rgba(255,107,157,0.1), rgba(255,158,181,0.08))", borderRadius: 12, padding: "14px", marginBottom: 24, fontSize: "0.85rem", color: "#5a3d5c" }}>
            You'll receive SMS & WhatsApp updates 📱
          </div>
          <p style={{ fontSize: "0.8rem", color: "#c4a0b8" }}>Redirecting you home in a moment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: "100vh", background: "linear-gradient(180deg, #fdf0f5 0%, #fce4ec 100%)" }}>
      <SkyBackground variant="day" style={{ padding: "64px clamp(16px,4vw,48px) 90px", textAlign: "center" }}>
        <h1 className="section-title float-up" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.25)" }}>Checkout 🌸</h1>
        <p className="float-up-d1" style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>Almost there! Complete your order below.</p>
      </SkyBackground>

      <div style={{ maxWidth: 1100, margin: "-24px auto 0", padding: "0 clamp(16px,4vw,48px) 80px", position: "relative", zIndex: 5 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28 }} className="grid-2">
          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="glass-card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1rem", marginBottom: 20, color: "#2d1b2e" }}>Delivery Details 📍</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5a3d5c", display: "block", marginBottom: 6 }}>Full Name *</label>
                    <input className="input-field" placeholder="Hana Yamamoto" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5a3d5c", display: "block", marginBottom: 6 }}>Phone *</label>
                    <input className="input-field" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5a3d5c", display: "block", marginBottom: 6 }}>Delivery Address *</label>
                  <textarea className="input-field" placeholder="Building, Street, Area, City — PIN Code" rows={3} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} style={{ resize: "vertical" }} />
                </div>
                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5a3d5c", display: "block", marginBottom: 6 }}>Special Instructions</label>
                  <input className="input-field" placeholder="Extra chopsticks, less spicy, etc." value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "22px 24px" }}>
              <h3 style={{ fontWeight: 600, fontSize: "0.9rem", color: "#2d1b2e", marginBottom: 12 }}>🎁 Apply Promo Code</h3>
              <div style={{ display: "flex", gap: 10 }}>
                <input className="input-field" placeholder="SAKURA20" style={{ flex: 1 }} />
                <button className="btn-primary" style={{ padding: "12px 22px", whiteSpace: "nowrap", flexShrink: 0 }}>Apply</button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="glass-card" style={{ padding: "24px", position: "sticky", top: 80 }}>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1rem", marginBottom: 16, color: "#2d1b2e" }}>Order Summary</h3>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <p style={{ color: "#9b6b8a", marginBottom: 16 }}>Your cart is empty</p>
                  <button className="btn-outline" onClick={() => navigate("Menu")}>Browse Menu</button>
                </div>
              ) : (
                <>
                  <div style={{ maxHeight: 220, overflowY: "auto", marginBottom: 16, paddingRight: 4, scrollbarWidth: "thin" }}>
                    {cart.map(item => (
                      <div key={item.id} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                        <img src={item.img} alt={item.name} style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#2d1b2e", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                          <div style={{ fontSize: "0.75rem", color: "#9b6b8a" }}>×{item.qty}</div>
                        </div>
                        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#ff6b9d", flexShrink: 0 }}>₹{item.price * item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid #ffb3c6", paddingTop: 14, display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.84rem", color: "#5a3d5c" }}>
                      <span>Subtotal</span><span>₹{total}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.84rem", color: "#5a3d5c" }}>
                      <span>GST (5%)</span><span>₹{tax}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.84rem", color: "#4caf50" }}>
                      <span>Delivery</span><span>Free 🎉</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.1rem", color: "#2d1b2e", paddingTop: 6, borderTop: "1px solid #ffb3c6" }}>
                      <span>Total</span><span style={{ color: "#ff6b9d" }}>₹{total + tax}</span>
                    </div>
                  </div>
                  <button className="btn-primary" style={{ width: "100%", padding: "15px", fontSize: "0.95rem" }} onClick={handleSubmit}>
                    🌸 Confirm Order
                  </button>
                  <button className="btn-outline" style={{ width: "100%", marginTop: 10, padding: "12px" }} onClick={() => navigate("Payment")}>
                    💳 Pay Online Instead
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────── */
function Footer({ navigate }) {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #2d1b2e 0%, #1a0d1e 100%)",
      padding: "64px clamp(16px,4vw,48px) 32px",
      color: "rgba(255,240,245,0.7)",
      marginTop: 0,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="grid-4">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16, filter: "brightness(1.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg viewBox="0 0 40 40" style={{ width: 36, height: 36 }}>
                  <circle cx="20" cy="20" r="19" fill="url(#footer-logo)" />
                  <path d="M20,8 C24,8 28,12 28,16 C24,18 20,24 20,24 C20,24 16,18 12,16 C12,12 16,8 20,8Z" fill="white" opacity="0.95" />
                  <defs>
                    <linearGradient id="footer-logo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b9d" />
                      <stop offset="100%" stopColor="#ffb3c6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: "1.1rem", color: "white" }}>
                    Sakura <span style={{ color: "#ff9eb5" }}>Bites</span>
                  </div>
                  <div style={{ fontSize: "0.56rem", letterSpacing: "0.2em", color: "#9b6b8a", textTransform: "uppercase" }}>桜 レストラン</div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.84rem", lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>
              Authentic Japanese cuisine crafted with love, served with the warmth of a summer anime day.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                ["📸", "https://instagram.com", "Instagram"],
                ["▶️", "https://youtube.com", "YouTube"],
                ["🐦", "https://twitter.com", "Twitter"],
              ].map(([icon, href, label]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={label} style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "rgba(255,107,157,0.1)",
                  border: "1px solid rgba(255,107,157,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                  transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,157,0.25)"; e.currentTarget.style.borderColor = "#ff9eb5"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,107,157,0.1)"; e.currentTarget.style.borderColor = "rgba(255,107,157,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#ff9eb5", marginBottom: 16 }}>Navigate</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Home", "Menu", "About", "Order", "Delivery", "Help"].map(p => (
                <button key={p} onClick={() => navigate(p)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", color: "rgba(255,240,245,0.55)", textAlign: "left", transition: "color 0.2s", padding: 0 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#ff9eb5"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,240,245,0.55)"}
                >{p}</button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#ff9eb5", marginBottom: 16 }}>Services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Dine-In", "Takeaway", "Catering", "Gift Cards", "Events"].map(s => (
                <span key={s} style={{ fontSize: "0.85rem", color: "rgba(255,240,245,0.55)", cursor: "default" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#ff9eb5", marginBottom: 16 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: "0.84rem", color: "rgba(255,240,245,0.55)", lineHeight: 1.65 }}>
              <p>12 Sakura Lane, Bandra<br />Mumbai – 400 050</p>
              <a href="tel:+912240019999" style={{ color: "rgba(255,240,245,0.55)", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#ff9eb5"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,240,245,0.55)"}
              >+91 22 4001 9999</a>
              <a href="mailto:hello@sakurabites.in" style={{ color: "rgba(255,240,245,0.55)", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#ff9eb5"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,240,245,0.55)"}
              >hello@sakurabites.in</a>
              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: "0.78rem", color: "#ff9eb5", marginBottom: 4 }}>Hours</div>
                <div>Mon–Sun: 11am – 11:30pm</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,107,157,0.12)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,240,245,0.25)", letterSpacing: "0.04em" }}>© 2025 Sakura Bites. All rights reserved. 🌸</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,240,245,0.25)", letterSpacing: "0.04em" }}>Made with 桜 in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE: HELP
   ═══════════════════════════════════════════════════════════ */
const FAQ_ITEMS = [
  {
    q: "What are your opening hours?",
    a: "We're open every day from 11:00 AM to 11:30 PM — including weekends and public holidays. Last orders for dine-in are accepted at 10:45 PM.",
    icon: "🕐",
  },
  {
    q: "Do you accept reservations?",
    a: "Yes! You can call us at +91 22 4001 9999 or email hello@sakurabites.in to reserve a table. Walk-ins are welcome based on availability, but we recommend booking for groups of 4 or more.",
    icon: "📅",
  },
  {
    q: "How do I track my delivery order?",
    a: "Once your order is confirmed, you'll receive an SMS with a live tracking link. You can also check the Delivery page in the app for real-time status updates on your order.",
    icon: "🛵",
  },
  {
    q: "Do you offer vegetarian or vegan options?",
    a: "Absolutely! Our menu is clearly labelled with 🌱 Vegan and 🌿 Healthy tags. Highlights include our Vegetable Udon, Edamame Gyoza, and Miso Soup Deluxe. Please inform your server of any dietary requirements.",
    icon: "🌱",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards (Visa, Mastercard, Amex), popular wallets (Amazon Pay, Mobikwik, Airtel), and Cash on Delivery for all delivery orders.",
    icon: "💳",
  },
];

function HelpPage() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i));

  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      {/* Header banner */}
      <div style={{
        background: "linear-gradient(135deg, #ff6b9d 0%, #ffb3c6 60%, #ffd580 100%)",
        padding: "60px clamp(16px,4vw,48px) 50px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative petals */}
        {["10%", "30%", "55%", "75%", "90%"].map((left, i) => (
          <div key={i} style={{
            position: "absolute",
            top: `${10 + i * 12}%`,
            left,
            fontSize: "1.4rem",
            opacity: 0.25,
            animation: `petal-spin ${6 + i * 2}s linear infinite`,
            pointerEvents: "none",
          }}>🌸</div>
        ))}
        <div className="section-sub float-up" style={{ color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
          サポート
        </div>
        <h1 className="float-up-d1 section-title" style={{ color: "white", textShadow: "0 4px 20px rgba(45,27,46,0.2)", marginBottom: 14 }}>
          Help & FAQ
        </h1>
        <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.88)", fontSize: "1rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          Everything you need to know about Sakura Bites. Can't find an answer?{" "}
          <a href="mailto:hello@sakurabites.in" style={{ color: "white", fontWeight: 700, textDecoration: "underline" }}>
            Drop us a message.
          </a>
        </p>
      </div>

      {/* FAQ cards */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "60px clamp(16px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="glass-card card-hover"
                style={{
                  overflow: "hidden",
                  border: isOpen ? "1.5px solid rgba(255,107,157,0.45)" : "1px solid rgba(255,158,181,0.25)",
                  boxShadow: isOpen
                    ? "0 12px 40px rgba(255,107,157,0.15)"
                    : "0 4px 20px rgba(255,107,157,0.07)",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "22px 26px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left",
                  }}
                >
                  {/* Icon bubble */}
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: isOpen
                      ? "linear-gradient(135deg, #ff6b9d, #ff9eb5)"
                      : "rgba(255,107,157,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    boxShadow: isOpen ? "0 4px 16px rgba(255,107,157,0.35)" : "none",
                  }}>
                    {item.icon}
                  </div>

                  {/* Question text */}
                  <span style={{
                    flex: 1,
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: isOpen ? "#ff6b9d" : "#2d1b2e",
                    lineHeight: 1.4,
                    transition: "color 0.25s",
                  }}>
                    {item.q}
                  </span>

                  {/* Chevron */}
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: isOpen ? "rgba(255,107,157,0.12)" : "rgba(255,158,181,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: isOpen ? "#ff6b9d" : "#9b6b8a",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}>
                    ▼
                  </div>
                </button>

                {/* Answer panel */}
                {isOpen && (
                  <div style={{
                    padding: "0 26px 24px 86px",
                    animation: "float-up 0.3s ease both",
                  }}>
                    <div style={{
                      borderTop: "1px solid rgba(255,158,181,0.2)",
                      paddingTop: 18,
                      fontSize: "0.92rem",
                      color: "#5a3d5c",
                      lineHeight: 1.75,
                    }}>
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact card */}
        <div className="glass-card" style={{
          marginTop: 48,
          padding: "36px 32px",
          textAlign: "center",
          border: "1px solid rgba(255,158,181,0.25)",
          background: "linear-gradient(135deg, rgba(255,107,157,0.06), rgba(255,213,128,0.06))",
        }}>
          <div style={{ fontSize: "2rem", marginBottom: 12 }}>🌸</div>
          <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.2rem", color: "#2d1b2e", marginBottom: 10, fontWeight: 700 }}>
            Still need help?
          </h3>
          <p style={{ color: "#9b6b8a", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 22 }}>
            Our team is ready to help Mon–Sun, 11 AM – 11:30 PM
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+912240019999" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              📞 Call Us
            </a>
            <a href="mailto:hello@sakurabites.in" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [cart, setCart] = useState([]);

  useEffect(() => { injectStyles(); }, []);

  const navigate = useCallback((page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const addToCart = useCallback((item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const updateCart = useCallback((id, qty) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const pageProps = { navigate, cart, addToCart, updateCart, removeFromCart, clearCart };

  const PAGES = {
    Home: <HomePage {...pageProps} />,
    Menu: <MenuPage {...pageProps} />,
    About: <AboutPage {...pageProps} />,
    Cart: <CartPage {...pageProps} />,
    Order: <OrderPage {...pageProps} />,
    Delivery: <DeliveryPage {...pageProps} />,
    Payment: <PaymentPage {...pageProps} />,
    Checkout: <CheckoutPage {...pageProps} />,
    Help: <HelpPage />,
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "'M PLUS Rounded 1c', sans-serif" }}>
      <Navbar activePage={activePage} navigate={navigate} cartCount={cartCount} />
      <main>{PAGES[activePage] || PAGES["Home"]}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

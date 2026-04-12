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

export default Logo;
import { Link } from "react-router-dom";

function Footer() {
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
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "Order", path: "/order" },
                { name: "Delivery", path: "/delivery" },
                { name: "Help", path: "/help" },
                { name: "About", path: "/about" },
              ].map(p => (
                <Link key={p.name} to={p.path} style={{ fontFamily: "inherit", fontSize: "0.85rem", color: "rgba(255,240,245,0.55)", textAlign: "left", transition: "color 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#ff9eb5"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,240,245,0.55)"}
                >{p.name}</Link>
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

export default Footer;
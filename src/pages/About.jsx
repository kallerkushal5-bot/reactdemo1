import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";
import SectionHeading from "../components/SectionHeading";
import { TEAM } from "../data";

function AboutPage() {
  const navigate = useNavigate();
  return (
    <motion.div className="page-enter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} style={{ paddingTop: 64 }}>
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
            <SectionHeading
              eyebrow="✦ The Beginning ✦"
              title="A Kitchen Born From Passion"
              description="What started as a tiny 12-seat izakaya in a narrow Mumbai lane has grown into one of India's most celebrated Japanese dining destinations. Every dish carries the memory of a cherry blossom morning in Kyoto."
            />
            <p style={{ color: "#5a3d5c", lineHeight: 1.8, marginBottom: 28 }}>
              We don't just cook food — we craft moments. Each recipe is a collaboration between centuries of Japanese culinary tradition and the vibrant energy of modern anime culture.
            </p>
            <button className="btn-primary" onClick={() => navigate("/menu")}>Explore Our Menu 🌸</button>
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
    </motion.div>
  );
}

export default AboutPage;
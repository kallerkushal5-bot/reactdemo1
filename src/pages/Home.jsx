import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import SakuraDivider from "../components/SakuraDivider";
import SectionHeading from "../components/SectionHeading";
import SkyBackground from "../components/SkyBackground";
import { POPULAR_DISHES } from "../data";

function HomePage({ addToCart }) {
  const navigate = useNavigate();
  const sectionTransition = { duration: 0.7, ease: "easeOut" };
  return (
    <motion.div className="page-enter" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={sectionTransition}>
      <HeroBanner />

      {/* Featured Dishes Section */}
      <section style={{ padding: "80px clamp(16px,4vw,48px)", maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeading
          eyebrow="✦ Our Specialties ✦"
          title="Popular Dishes"
          description="Handpicked by our chefs, loved by thousands — these are the dishes that define Sakura Bites."
        />

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
          <button className="btn-outline" onClick={() => navigate("/menu")}>View Full Menu 🍱</button>
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
            <button className="btn-primary" onClick={() => navigate("/order")} style={{ fontSize: "1rem", padding: "15px 36px" }}>Order Now 🍜</button>
            <button className="btn-outline" onClick={() => navigate("/menu")} style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.5)", color: "white", padding: "15px 32px", backdropFilter: "blur(4px)" }}>Browse Menu</button>
          </div>
        </div>
      </SkyBackground>
    </motion.div>
  );
}

export default HomePage;
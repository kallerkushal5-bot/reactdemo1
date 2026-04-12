import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";
import { MENU_ITEMS } from "../data";

function MenuPage({ addToCart }) {
  const navigate = useNavigate();

  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #ff6b9d 0%, #ffb3c6 60%, #ffd580 100%)", padding: "60px clamp(16px,4vw,48px) 50px", textAlign: "center" }}>
        <div className="section-sub float-up" style={{ marginBottom: 10, color: "rgba(255,255,255,0.85)" }}>✦ Our Menu ✦</div>
        <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.3)", marginBottom: 14 }}>Sakura Menu</h1>
        <p className="float-up-d2" style={{ color: "rgba(255,255,255,0.88)", maxWidth: 600, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
          Discover our carefully curated selection of authentic Japanese dishes, each one a masterpiece of flavor and presentation.
        </p>
      </div>

      {/* Menu items */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px clamp(16px,4vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {Object.values(MENU_ITEMS).flat().map((item, i) => (
            <div key={item.id} className="dish-card" style={{ animationDelay: `${i * 0.05}s` }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={item.img} alt={item.name} />
                {item.tag && <span className="tag-badge" style={{ position: "absolute", top: 12, left: 12 }}>{item.tag}</span>}
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, fontSize: "1.1rem", marginBottom: 8, color: "#2d1b2e" }}>{item.name}</h3>
                <p style={{ fontSize: "0.9rem", color: "#9b6b8a", lineHeight: 1.6, marginBottom: 16 }}>{item.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, color: "#ff6b9d", fontSize: "1.1rem" }}>₹{item.price}</span>
                  <button className="btn-primary" style={{ padding: "10px 20px" }} onClick={() => addToCart(item)}>
                    + Add to Cart
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

export default MenuPage;
import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";
import { ZONES, PAYMENT_METHODS } from "../data";

function OrderPage({ addToCart }) {
  const navigate = useNavigate();

  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px clamp(16px,4vw,48px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-sub" style={{ marginBottom: 10 }}>✦ Quick Order ✦</div>
          <h1 className="section-title">Order Online</h1>
          <SakuraDivider />
          <p style={{ color: "#9b6b8a", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Select your delivery zone and preferred payment method to place your order quickly.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="grid-2">
          {/* Delivery zones */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.3rem", color: "#2d1b2e", marginBottom: 20 }}>Select Delivery Zone</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {ZONES.map(zone => (
                <div key={zone.name} className="glass-card" style={{ padding: "16px", border: "2px solid rgba(255,158,181,0.2)", cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 600, color: "#2d1b2e", marginBottom: 4 }}>{zone.name}</div>
                      <div style={{ fontSize: "0.9rem", color: "#9b6b8a" }}>{zone.time}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: "#ff6b9d" }}>{zone.fee}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment methods */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.3rem", color: "#2d1b2e", marginBottom: 20 }}>Payment Method</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {PAYMENT_METHODS.map(method => (
                <div key={method.id} className="glass-card" style={{ padding: "16px", border: "2px solid rgba(255,158,181,0.2)", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "1.5rem" }}>{method.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, color: "#2d1b2e", marginBottom: 2 }}>{method.label}</div>
                      <div style={{ fontSize: "0.8rem", color: "#9b6b8a" }}>{method.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-primary" onClick={() => navigate("/menu")} style={{ fontSize: "1.1rem", padding: "16px 40px" }}>
            Start Ordering 🍜
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
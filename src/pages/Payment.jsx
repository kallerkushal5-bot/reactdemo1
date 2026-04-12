import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";
import { PAYMENT_METHODS } from "../data";

function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px clamp(16px,4vw,48px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-sub" style={{ marginBottom: 10 }}>✦ Payment ✦</div>
          <h1 className="section-title">Choose Payment Method</h1>
          <SakuraDivider />
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          {PAYMENT_METHODS.map(method => (
            <div key={method.id} className="glass-card" style={{ padding: "20px", cursor: "pointer", border: "2px solid rgba(255,158,181,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: "2rem" }}>{method.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: "#2d1b2e", marginBottom: 4 }}>{method.label}</div>
                  <div style={{ fontSize: "0.9rem", color: "#9b6b8a" }}>{method.desc}</div>
                </div>
                <span style={{ fontSize: "1.2rem", color: "#ff6b9d" }}>→</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-outline" onClick={() => navigate("/cart")}>← Back to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";
import { ZONES } from "../data";

function DeliveryPage() {
  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px clamp(16px,4vw,48px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-sub" style={{ marginBottom: 10 }}>✦ Delivery Info ✦</div>
          <h1 className="section-title">Delivery Zones</h1>
          <SakuraDivider />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="grid-2">
          {ZONES.map(zone => (
            <div key={zone.name} className="glass-card" style={{ padding: "24px", textAlign: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: zone.color, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>🚚</div>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, color: "#2d1b2e", marginBottom: 8 }}>{zone.name}</h3>
              <div style={{ fontSize: "1.1rem", color: "#ff6b9d", fontWeight: 700, marginBottom: 8 }}>{zone.time}</div>
              <div style={{ fontSize: "0.9rem", color: "#9b6b8a" }}>Delivery Fee: {zone.fee}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeliveryPage;
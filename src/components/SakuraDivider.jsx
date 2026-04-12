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

export default SakuraDivider;
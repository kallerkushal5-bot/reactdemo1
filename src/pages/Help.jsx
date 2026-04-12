import FAQ from "../components/FAQ";
import SectionHeading from "../components/SectionHeading";

function HelpPage() {
  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      <section style={{ background: "linear-gradient(135deg, #ff6b9d 0%, #ffb3c6 60%, #ffd580 100%)", padding: "60px clamp(16px,4vw,48px) 50px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {["10%", "30%", "55%", "75%", "90%"].map((left, i) => (
          <div key={i} style={{
            position: "absolute",
            top: `${10 + i * 12}%`,
            left,
            fontSize: "1.4rem",
            opacity: 0.22,
            animation: `petal-spin ${6 + i * 2}s linear infinite`,
            pointerEvents: "none",
          }}>
            🌸
          </div>
        ))}

        <div className="section-sub float-up" style={{ marginBottom: 10, color: "rgba(255,255,255,0.85)" }}>
          サポート
        </div>
        <h1 className="section-title float-up-d1" style={{ color: "white", textShadow: "0 3px 16px rgba(45,27,46,0.3)", marginBottom: 14 }}>
          Help & FAQ
        </h1>
        <p className="section-sub float-up-d2" style={{ color: "rgba(255,255,255,0.88)", fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
          Everything you need to know about Sakura Bites. If you still need assistance, our support team is standing by.
        </p>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px clamp(16px,4vw,48px)" }}>
        <SectionHeading
          eyebrow="✦ Sakura Support ✦"
          title="Frequently Asked Questions"
          description="Hover or tab through the questions to reveal quick, helpful answers. Only one answer is active at a time for a clean browsing experience."
        />

        <FAQ />
      </div>
    </div>
  );
}

export default HelpPage;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";

function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div className="page-enter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <SkyBackground variant="night" style={{ width: "100%", padding: "80px clamp(16px,4vw,48px)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: "8rem", marginBottom: 20, color: "white", textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}>404</div>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginBottom: 16, textShadow: "0 3px 16px rgba(0,0,0,0.3)" }}>
            Page Not Found 🌸
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 32 }}>
            Oops! It seems this page has drifted away like cherry blossoms in the wind. Let's get you back to familiar territory.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => navigate("/")} style={{ fontSize: "1rem", padding: "14px 32px" }}>
              🏠 Go Home
            </button>
            <button className="btn-outline" onClick={() => navigate("/menu")} style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.5)", color: "white", padding: "14px 28px", backdropFilter: "blur(4px)" }}>
              🍜 View Menu
            </button>
          </div>
        </div>
      </SkyBackground>
    </motion.div>
  );
}

export default NotFound;
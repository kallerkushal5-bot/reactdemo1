import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pages = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Order", path: "/order" },
    { name: "Delivery", path: "/delivery" },
    { name: "Payment", path: "/payment" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "/checkout" },
    { name: "Help", path: "/help" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(253,240,245,0.96)" : "rgba(253,240,245,0.82)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,158,181,0.28)" : "1px solid rgba(255,158,181,0.1)",
        transition: "all 0.35s ease",
        boxShadow: scrolled ? "0 18px 40px rgba(45,27,46,0.08)" : "none",
      }}
    >
      <div className="navbar-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,4vw,48px)", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" className="logo-link">
          <Logo small />
        </Link>

        <div className="desktop-nav hide-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {pages.map((page) => (
            <Link key={page.name} to={page.path} className={`nav-link ${location.pathname === page.path ? "active" : ""}`}>
              {page.name}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => navigate("/cart")} className="icon-button" aria-label="Cart">
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          <button
            className="mobile-toggle show-mobile"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            style={{
              background: "rgba(253,240,245,0.98)",
              backdropFilter: "blur(18px)",
              borderTop: "1px solid rgba(255,158,181,0.2)",
              padding: "18px clamp(16px,4vw,48px)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className={`nav-link ${location.pathname === page.path ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
                style={{ width: "100%" }}
              >
                {page.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

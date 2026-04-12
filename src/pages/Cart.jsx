import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";

function CartPage({ cart, updateCart, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal > 500 ? 0 : 49;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <div className="page-enter" style={{ paddingTop: 80, minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fdf0f5" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: 20 }}>🛒</div>
          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "2rem", color: "#2d1b2e", marginBottom: 16 }}>Your cart is empty</h2>
          <p style={{ color: "#9b6b8a", marginBottom: 32 }}>Add some delicious dishes to get started!</p>
          <button className="btn-primary" onClick={() => navigate("/menu")}>Browse Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px clamp(16px,4vw,48px)" }}>
        <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "2.5rem", color: "#2d1b2e", marginBottom: 40, textAlign: "center" }}>Your Cart</h1>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }} className="grid-2">
          {/* Cart items */}
          <div>
            {cart.map(item => (
              <div key={item.id} className="glass-card" style={{ display: "flex", gap: 16, padding: "20px", marginBottom: 16, alignItems: "center" }}>
                <img src={item.img} alt={item.name} style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover" }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600, color: "#2d1b2e", marginBottom: 4 }}>{item.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#9b6b8a", marginBottom: 8 }}>{item.desc}</p>
                  <div style={{ fontWeight: 700, color: "#ff6b9d" }}>₹{item.price}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button className="qty-btn minus" onClick={() => updateCart(item.id, item.qty - 1)}>-</button>
                  <span style={{ fontWeight: 600, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateCart(item.id, item.qty + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ color: "#ff6b9d", fontSize: "1.2rem", background: "none", border: "none", cursor: "pointer" }}>🗑️</button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="glass-card" style={{ padding: "24px", height: "fit-content" }}>
            <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.3rem", color: "#2d1b2e", marginBottom: 20 }}>Order Summary</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,158,181,0.3)", paddingTop: 12, marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.1rem", color: "#ff6b9d" }}>
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <button className="btn-primary" style={{ width: "100%", padding: "14px" }} onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
            <p style={{ fontSize: "0.8rem", color: "#9b6b8a", textAlign: "center", marginTop: 12 }}>
              Free delivery on orders above ₹500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
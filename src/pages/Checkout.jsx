import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkyBackground from "../components/SkyBackground";
import SakuraDivider from "../components/SakuraDivider";

function CheckoutPage({ cart, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", phone: "", address: "", instructions: ""
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal > 500 ? 0 : 49;
  const total = subtotal + delivery;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    alert("Order placed successfully! 🎉");
    clearCart();
    navigate("/");
  };

  return (
    <div className="page-enter" style={{ paddingTop: 80, minHeight: "100vh", background: "#fdf0f5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px clamp(16px,4vw,48px)" }}>
        <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "2.5rem", color: "#2d1b2e", marginBottom: 40, textAlign: "center" }}>Checkout</h1>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }} className="grid-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card" style={{ padding: "24px" }}>
            <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.3rem", color: "#2d1b2e", marginBottom: 20 }}>Delivery Details</h3>

            <div style={{ display: "grid", gap: 16 }}>
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-field"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
              <textarea
                placeholder="Delivery Address"
                className="input-field"
                style={{ minHeight: 80, resize: "vertical" }}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
              <textarea
                placeholder="Special Instructions (optional)"
                className="input-field"
                style={{ minHeight: 60, resize: "vertical" }}
                value={formData.instructions}
                onChange={(e) => setFormData({...formData, instructions: e.target.value})}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 24, padding: "14px" }}>
              Place Order 🍜
            </button>
          </form>

          {/* Order summary */}
          <div className="glass-card" style={{ padding: "24px", height: "fit-content" }}>
            <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.3rem", color: "#2d1b2e", marginBottom: 20 }}>Order Summary</h3>

            <div style={{ marginBottom: 20 }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "0.9rem" }}>{item.name} x{item.qty}</span>
                  <span style={{ fontSize: "0.9rem" }}>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,158,181,0.3)", paddingTop: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span>Delivery</span>
                <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.1rem", color: "#ff6b9d" }}>
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
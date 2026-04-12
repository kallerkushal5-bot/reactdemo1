import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes";

/* ─── FONT IMPORT ─────────────────────────────────────────── */
const FONT_LINK = document.createElement("link");
FONT_LINK.rel = "stylesheet";
FONT_LINK.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap";
document.head.appendChild(FONT_LINK);

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateCart = (id, qty) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
      <MainLayout cartCount={cartCount}>
        <AppRoutes
          addToCart={addToCart}
          updateCart={updateCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          cart={cart}
        />
      </MainLayout>
  );
}

export default App;

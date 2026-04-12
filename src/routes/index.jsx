import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Delivery from "../pages/Delivery";
import Payment from "../pages/Payment";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";

function AppRoutes({ addToCart, updateCart, removeFromCart, clearCart, cart }) {
  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu addToCart={addToCart} />} />
      <Route path="/order" element={<Order addToCart={addToCart} />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
      <Route path="/help" element={<Help />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children, cartCount }) {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "'M PLUS Rounded 1c', sans-serif" }}>
      <Navbar cartCount={cartCount} />
      <main style={{ paddingTop: 80 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
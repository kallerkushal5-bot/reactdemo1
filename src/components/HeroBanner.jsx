import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <video
        className="hero-banner__video"
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/sakura-fallback.svg"
      >
        <source src="/assets/sakura.mp4" type="video/mp4" />
        Your browser does not support the Sakura video.
      </video>

      <div className="hero-banner__overlay" />

      <div className="hero-banner__content">
        <div className="section-sub" style={{ color: "rgba(255,255,255,0.92)" }}>
          Sakura Season, Every Meal
        </div>
        <h1 className="section-title hero-banner__title">
          Cinematic Japanese dining,
          <br /> served under the sakura sky.
        </h1>
        <p className="hero-banner__text">
          Fresh flavors, artful plating, and a festival of seasonal dishes designed to feel as vibrant as cherry blossom season.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
          <Link to="/menu" className="btn-primary">
            Explore Menu
          </Link>
          <Link to="/order" className="btn-outline">
            Order Now
          </Link>
        </div>
      </div>

      <div className="hero-banner__fallback" aria-hidden="true" />
    </section>
  );
}

export default HeroBanner;

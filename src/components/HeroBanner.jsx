import { Link } from "react-router-dom";

function HeroBanner() {
  const videoId = "0eU8SjnZMnA";
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playlist=${videoId}&start=5&playsinline=1&showinfo=0`;

  return (
    <section className="hero-banner">
      <div className="hero-banner__video-wrapper">
        <iframe
          className="hero-banner__video"
          title="Sakura hero video"
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      </div>

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
